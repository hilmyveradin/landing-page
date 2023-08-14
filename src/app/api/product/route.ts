/* eslint-disable sonarjs/no-duplicate-string */
import { NextResponse } from 'next/server';

import { supabase } from '@/utils/supabaseClient';

export async function GET() {
  try {
    const { data, error } = await supabase.from('product_table').select('*');

    if (error) {
      return new NextResponse(JSON.stringify({ name: 'Error getting data' }), {
        status: 400,
      });
    }

    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse('Internal server error', {
      status: 500,
    });
  }
}
