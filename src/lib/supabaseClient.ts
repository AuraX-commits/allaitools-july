
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

// These are public keys - safe to be in the client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Please check your environment variables.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
