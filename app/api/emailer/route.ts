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

    const [sentEmails, totalCountResult] = await Promise.all([
      // Get the actual email data
      sql`
        SELECT * FROM "cold-email"
        ORDER BY created_at DESC
      `,
      // Get just the total count
      sql`
        SELECT COUNT(*) as total_amount FROM "cold-email"
       `
    ]);

    // The count query returns an array with one object, so we extract it:
    const totalAmount = totalCountResult[0].total_amount;

    return NextResponse.json([sentEmails, totalAmount], { status: 200 });
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
    const { to, subject, html, name, social } = body;

    // --- 2. Check if email already exists in Neon ---
    const existingEntry = await sql`
      SELECT id FROM "cold-email" 
      WHERE sent_to = ${to} 
      LIMIT 1
    `;

    if (existingEntry.length > 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'Email already exists in database. No email sent.' 
      }, { status: 409 }); // 409 Conflict
    }

    // --- 3. Send the Email ---
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

    // --- 4. Save to Database ---
    const customId = crypto.randomUUID();

    const result = await sql`
      INSERT INTO "cold-email" (custom_id, name, sent_to, sent_by, social)
      VALUES (${customId}, ${name}, ${to}, ${user.sub}, ${social})
      RETURNING *
    `;

    console.log("executed: ", result);
    return NextResponse.json({
      success: true,
      data: result[0]
    }, { status: 201 });

  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ error: "Process failed" }, { status: 500 });
  }
}