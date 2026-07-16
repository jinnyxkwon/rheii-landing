import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!url || !serviceRoleKey) {
    return NextResponse.json(
      { error: 'Server is not configured for partnership inquiries.' },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const type = typeof body.type === 'string' ? body.type.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !type) {
    return NextResponse.json(
      { error: 'Name, email, and partnership type are required.' },
      { status: 400 },
    );
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const supabase = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from('partnerships').insert({
    name,
    email,
    type,
    message: message || null,
  });

  if (error) {
    console.error('Partnership insert failed:', error);
    return NextResponse.json(
      { error: 'Could not submit your inquiry. Please try again.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
