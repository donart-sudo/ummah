-- Push subscriptions for web push notifications
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  endpoint TEXT NOT NULL UNIQUE,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Notification preferences per subscription
CREATE TABLE IF NOT EXISTS notification_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscription_id UUID NOT NULL UNIQUE REFERENCES push_subscriptions(id) ON DELETE CASCADE,
  morning_enabled BOOLEAN DEFAULT true,
  morning_time TIME DEFAULT '06:00',
  evening_enabled BOOLEAN DEFAULT true,
  evening_time TIME DEFAULT '21:00',
  timezone TEXT DEFAULT 'Europe/Tirane',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_push_active ON push_subscriptions(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_notif_subscription ON notification_preferences(subscription_id);

-- Row Level Security
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification_preferences ENABLE ROW LEVEL SECURITY;

-- Allow public insert/update for push subscriptions (no auth, personal app)
CREATE POLICY "Allow public insert on push_subscriptions"
  ON push_subscriptions FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public update on push_subscriptions"
  ON push_subscriptions FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "Allow public select on push_subscriptions"
  ON push_subscriptions FOR SELECT TO anon USING (true);

CREATE POLICY "Allow public insert on notification_preferences"
  ON notification_preferences FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public update on notification_preferences"
  ON notification_preferences FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "Allow public select on notification_preferences"
  ON notification_preferences FOR SELECT TO anon USING (true);
