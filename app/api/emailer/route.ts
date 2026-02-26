import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { neon } from "@neondatabase/serverless";
import { auth0 } from "@/lib/auth0";

const sql = neon(process.env.DATA_BASE_URL_NEON!);

// ==========================================
// GET: Fetch sent cold emails for the logged-in user
// ==========================================
export async function GET(req: NextRequest) {
  try {
    const session = await auth0.getSession();
    const user = session?.user;

    // Check if user is authenticated
    if (!user || !user.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Table names with hyphens must be in double quotes
    const sentEmails = await sql`
      SELECT * FROM "cold-email"
      WHERE sent_by = ${user.sub}
      ORDER BY created_at DESC
    `;

    return NextResponse.json(sentEmails, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// ==========================================
// POST: Send email and record in Neon DB
// ==========================================
export async function POST(req: NextRequest) {
  try {
    const session = await auth0.getSession();
    const user = session?.user;

    // 1. Authenticate the request
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { to, subject, html, name } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: to,
      subject: subject,
      html: html,
    });

    const customId = crypto.randomUUID();

    const result = await sql`
      INSERT INTO "cold-email" (custom_id, name, sent_to, sent_by)
      VALUES (${customId}, ${name}, ${to}, ${user.sub})
      RETURNING *
    `;
    console.log("executed: ", result)
    return NextResponse.json({ 
      success: true, 
      data: result[0] 
    }, { status: 201 });

  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ error: "Process failed" }, { status: 500 });
  }
}