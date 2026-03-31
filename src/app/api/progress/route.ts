import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

// GET: Fetch progress for a device + date range
export async function GET(request: NextRequest) {
  const supabase = getSupabase()
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
  }

  const { searchParams } = new URL(request.url)
  const deviceId = searchParams.get('device_id')
  const date = searchParams.get('date')
  const from = searchParams.get('from')
  const to = searchParams.get('to')

  if (!deviceId) {
    return NextResponse.json({ error: 'device_id required' }, { status: 400 })
  }

  let query = supabase
    .from('reading_progress')
    .select('*')
    .eq('device_id', deviceId)

  if (date) {
    query = query.eq('date', date)
  } else if (from && to) {
    query = query.gte('date', from).lte('date', to)
  }

  const { data, error } = await query
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data })
}

// POST: Mark an item as completed
export async function POST(request: NextRequest) {
  const supabase = getSupabase()
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
  }

  const body = await request.json()
  const { device_id, date, routine_type, item_id } = body

  if (!device_id || !date || !routine_type || !item_id) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('reading_progress')
    .upsert({
      device_id,
      date,
      routine_type,
      item_id,
      completed_at: new Date().toISOString(),
    }, {
      onConflict: 'device_id,date,routine_type,item_id',
    })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, data })
}

// DELETE: Unmark an item
export async function DELETE(request: NextRequest) {
  const supabase = getSupabase()
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
  }

  const body = await request.json()
  const { device_id, date, routine_type, item_id } = body

  const { error } = await supabase
    .from('reading_progress')
    .delete()
    .eq('device_id', device_id)
    .eq('date', date)
    .eq('routine_type', routine_type)
    .eq('item_id', item_id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
