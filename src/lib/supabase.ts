import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yegfvcovexemawweqvld.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_0-t0_5IZ1sTOJC3xIkfCJQ_D30WVTXq';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);