import { createClient } from '@supabase/supabase-js'

// Supabase public configuration
const SUPABASE_URL = 'https://ihgzgokxxkxfidmdryuw.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZ3pnb2t4eGt4ZmlkbWRyeXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2Njc2MTAsImV4cCI6MjA4MzI0MzYxMH0.BonFy7PKFLmd5n4BeOg7gmhMpBeLad18MhFxDDeQRuc'

// Create a single Supabase client for the app
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: false, // portfolio does not need auth persistence
      autoRefreshToken: false,
    },
  }
)
