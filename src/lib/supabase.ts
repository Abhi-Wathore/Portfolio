import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ihgzgokxxkxfidmdryuw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZ3pnb2t4eGt4ZmlkbWRyeXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2Njc2MTAsImV4cCI6MjA4MzI0MzYxMH0.BonFy7PKFLmd5n4BeOg7gmhMpBeLad18MhFxDDeQRuc'
)
