import { auth0 } from '@/lib/auth0';
import { neon } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';

// 1. Explicitly type the return as Promise<Response>
// Standard Next.js App Router Handler (No Auth0 wrapper!)
export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ resources: string }> }
) {

  const session = await auth0.getSession();

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { resources: resourceType } = await ctx.params;
  const { searchParams } = new URL(req.url);
  const categorySlug = searchParams.get('category');

  if (!categorySlug || !resourceType) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  const sql = neon(process.env.DATA_BASE_URL_NEON!);

  try {
    const resources = await sql`
     SELECT 
        r.id, 
        r.name, 
        r.description, 
        r.type, 
        r.href, 
        r.tags, 
        r.preview,
        c.name AS category_name,
        (
          SELECT json_agg(
            json_build_object(
              'id', s.id,
              'source', s.source,
              'language', s.language,
              'framework', f.name,
              'framework_slug', f.slug
            )
          )
          FROM resource_snippets s
          JOIN frameworks f ON s.framework_id = f.id
          WHERE s.resource_id = r.id
        ) AS snippets
      FROM resources r
      JOIN categories c ON r.category_id = c.id
      WHERE c.slug = ${categorySlug} 
      AND r.type = ${resourceType}
      AND r.is_published = true
      ORDER BY r.created_at DESC
    `;

    return NextResponse.json({ success: true, data: resources });

  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};