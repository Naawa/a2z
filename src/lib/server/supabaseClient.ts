import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private'

export const supabase = createClient('https://tmgtgsrveznotvegwzhz.supabase.co', env.SUPABASE_KEY || "");