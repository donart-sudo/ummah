import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import webpush from 'web-push'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const vapidPublic = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  const vapidPrivate = process.env.VAPID_PRIVATE_KEY

  if (!supabaseUrl || !supabaseKey || !vapidPublic || !vapidPrivate) {
    return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 })
  }

  webpush.setVapidDetails('mailto:ummah@app.com', vapidPublic, vapidPrivate)

  const supabase = createClient(supabaseUrl, supabaseKey)

  const type = request.nextUrl.searchParams.get('type') || 'morning'

  const notification = type === 'morning'
    ? {
        title: 'Fajr Reminder ☀️',
        body: 'Start your day with morning adhkar and remembrance of Allah',
        url: '/category/morning',
      }
    : {
        title: 'Night Adhkar 🌙',
        body: 'Read Surah Al-Mulk and your evening duas before sleep',
        url: '/category/night',
      }

  // Get all active subscriptions
  const { data: subscriptions, error } = await supabase
    .from('push_subscriptions')
    .select('*')
    .eq('is_active', true)

  if (error || !subscriptions) {
    return NextResponse.json({ error: 'Failed to fetch subscriptions', details: error }, { status: 500 })
  }

  let sent = 0
  let failed = 0

  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(
        {
          endpoint: sub.endpoint,
          keys: { p256dh: sub.p256dh, auth: sub.auth },
        },
        JSON.stringify(notification)
      )
      sent++
    } catch (err: unknown) {
      const statusCode = (err as { statusCode?: number })?.statusCode
      if (statusCode === 410 || statusCode === 404) {
        // Subscription expired, mark inactive
        await supabase
          .from('push_subscriptions')
          .update({ is_active: false, updated_at: new Date().toISOString() })
          .eq('id', sub.id)
      }
      failed++
    }
  }

  return NextResponse.json({ sent, failed, type })
}
