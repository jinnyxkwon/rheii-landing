import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!url || !serviceRoleKey) {
    return NextResponse.json(
      { error: 'Server is not configured for waitlist signups.' },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : '';
  const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const growthJourney = typeof body.growthJourney === 'string' ? body.growthJourney.trim() : '';
  const lifeSeasons = Array.isArray(body.lifeSeasons) ? body.lifeSeasons.filter((s): s is string => typeof s === 'string') : [];
  const referralSource = typeof body.referralSource === 'string' ? body.referralSource : '';
  const referralSourceOther =
    typeof body.referralSourceOther === 'string' ? body.referralSourceOther.trim() : '';

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: 'First name, last name, and email are required.' },
      { status: 400 },
    );
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const supabase = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from('waitlist').insert({
    first_name: firstName,
    last_name: lastName,
    email,
    growth_journey: growthJourney || null,
    life_seasons: lifeSeasons.length > 0 ? lifeSeasons : null,
    referral_source: referralSource || null,
    referral_source_other: referralSourceOther || null,
  });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ ok: true, alreadyJoined: true });
    }
    console.error('Waitlist insert failed:', error);
    return NextResponse.json(
      { error: 'Could not join the waitlist. Please try again.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
