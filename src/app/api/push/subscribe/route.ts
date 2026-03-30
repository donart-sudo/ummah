import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { endpoint, keys, morningTime, eveningTime, timezone } = body

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  // Upsert push subscription
  const { data: sub, error: subError } = await supabase
    .from('push_subscriptions')
    .upsert(
      {
        endpoint,
        p256dh: keys.p256dh,
        auth: keys.auth,
        is_active: true,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'endpoint' }
    )
    .select()
    .single()

  if (subError || !sub) {
    return NextResponse.json({ error: 'Failed to save subscription', details: subError }, { status: 500 })
  }

  // Upsert notification preferences
  const { error: prefError } = await supabase
    .from('notification_preferences')
    .upsert(
      {
        subscription_id: sub.id,
        morning_enabled: true,
        morning_time: morningTime || '06:00',
        evening_enabled: true,
        evening_time: eveningTime || '21:00',
        timezone: timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'subscription_id' }
    )

  if (prefError) {
    return NextResponse.json({ error: 'Failed to save preferences', details: prefError }, { status: 500 })
  }

  return NextResponse.json({ success: true, subscriptionId: sub.id })
}
