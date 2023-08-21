import { createClient } from '@supabase/supabase-js';

if (
  !process.env.NEXT_PUBLIC_SUPABASE_LINK ||
  !process.env.NEXT_PUBLIC_SUPABASE_KEY
) {
  throw new Error('Supabase environment variables are not set!');
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_LINK,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);
