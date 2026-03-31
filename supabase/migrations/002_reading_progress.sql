-- Reading progress tracking for daily morning/night routines
CREATE TABLE IF NOT EXISTS reading_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_id TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  routine_type TEXT NOT NULL CHECK (routine_type IN ('morning', 'night')),
  item_id TEXT NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT now()
);

-- Unique constraint: one completion per device/date/routine/item
CREATE UNIQUE INDEX IF NOT EXISTS idx_progress_unique
  ON reading_progress(device_id, date, routine_type, item_id);

-- Fast lookups by device and date
CREATE INDEX IF NOT EXISTS idx_progress_device_date
  ON reading_progress(device_id, date);

-- Row Level Security
ALTER TABLE reading_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on reading_progress"
  ON reading_progress FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public select on reading_progress"
  ON reading_progress FOR SELECT TO anon USING (true);

CREATE POLICY "Allow public delete on reading_progress"
  ON reading_progress FOR DELETE TO anon USING (true);
