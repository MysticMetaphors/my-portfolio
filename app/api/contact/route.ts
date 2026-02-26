import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { auth0 } from '@/lib/auth0';

// Initialize the Neon database connection
const sql = neon(process.env.DATA_BASE_URL_NEON!);

// ==========================================
// GET: Fetch all contacts
// ==========================================
export async function GET(request: NextRequest) {
  try {
    const session = await auth0.getSession();

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const contacts = await sql`SELECT * FROM contacts ORDER BY id DESC`;

    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// ==========================================
// POST: Create a new contact
// ==========================================
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const session = await auth0.getSession();

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, contact, email, custom_id } = body;

    // Basic validation
    if (!custom_id) {
      return NextResponse.json({ error: 'custom_id is required' }, { status: 400 });
    }

    const newContact = await sql`
      INSERT INTO contacts (name, contact, email, custom_id)
      VALUES (${name}, ${contact}, ${email}, ${custom_id})
      RETURNING *
    `;

    return NextResponse.json(newContact[0], { status: 201 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// ==========================================
// PUT: Update an existing contact
// ==========================================
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, email, custom_id } = body;

    if (contact === undefined) contact == "-"

    if (!custom_id) {
      return NextResponse.json({ error: 'custom_id is required to update a record' }, { status: 400 });
    }

    const updatedContact = await sql`
      UPDATE contacts
      SET name = COALESCE(${name}, name),
          contact = COALESCE(${contact}, contact),
          email = COALESCE(${email}, email)
      WHERE custom_id = ${custom_id}
      RETURNING *
    `;

    if (updatedContact.length === 0) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json(updatedContact[0], { status: 200 });
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// ==========================================
// DELETE: Remove a contact
// ==========================================
export async function DELETE(request: NextRequest) {
  try {
    // Extract custom_id from the query string (e.g., /api/contacts?custom_id=123-abc)
    const session = await auth0.getSession();

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { searchParams } = new URL(request.url);
    const custom_id = searchParams.get('custom_id');

    if (!custom_id) {
      return NextResponse.json({ error: 'custom_id query parameter is required' }, { status: 400 });
    }

    const deletedContact = await sql`
      DELETE FROM contacts
      WHERE custom_id = ${custom_id}
      RETURNING *
    `;

    if (deletedContact.length === 0) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Contact deleted successfully', deleted: deletedContact[0] }, { status: 200 });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}