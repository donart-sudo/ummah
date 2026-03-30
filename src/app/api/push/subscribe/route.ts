import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const { endpoint, keys, morningTime, eveningTime, timezone } = body

  // TODO: Save subscription to Supabase
  // - endpoint, keys.p256dh, keys.auth for web-push
  // - morningTime, eveningTime, timezone for scheduling

  return NextResponse.json({ success: true })
}
