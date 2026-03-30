import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // TODO: Implement with Supabase + web-push
  // 1. Query subscriptions where current time matches morningTime or eveningTime
  // 2. Pick a random dua for each time slot
  // 3. Send push notifications via web-push

  return NextResponse.json({ notified: 0 })
}
