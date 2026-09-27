import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!url || !serviceRoleKey) {
    return NextResponse.json(
      { error: 'Server is not configured for founding rate opt-ins.' },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : '';

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const supabase = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase
    .from('founding_rate_optins')
    .upsert({ email, first_name: firstName || null }, { onConflict: 'email', ignoreDuplicates: true });

  if (error) {
    console.error('Founding rate opt-in failed:', error);
    return NextResponse.json({ error: 'Could not record opt-in.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
