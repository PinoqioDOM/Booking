import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nrjgenpmetwqdqxcuigd.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseKey) {
  throw new Error('Missing Supabase key')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase