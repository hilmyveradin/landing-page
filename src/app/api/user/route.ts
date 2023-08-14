/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/naming-convention */
import { NextResponse } from 'next/server';

import { supabase } from '@/utils/supabaseClient';
import type { UserTable } from '@/utils/types';

export async function GET() {
  try {
    const { data, error } = await supabase.from('user_table').select('*');

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

export async function POST(request: Request) {
  try {
    const {
      user_id,
      product_id,
      package_name,
      package_price,
      package_date,
    }: UserTable = await request.json();

    const { data, error } = await supabase
      .from('user_table')
      .insert([
        {
          user_id,
          product_id,
          package_name,
          package_price,
          package_date,
        },
      ])
      .select();

    if (error) {
      return new NextResponse(JSON.stringify({ name: 'Error insert data' }), {
        status: 400,
      });
    }
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse('Internal server error', {
      status: 500,
    });
  }
}

export async function DELETE(request: Request) {
  try {
    const { user_id, product_id }: UserTable = await request.json();

    const { error } = await supabase
      .from('user_table')
      .delete()
      .eq('user_id', user_id)
      .eq('product_id', product_id);

    if (error) {
      return new NextResponse(JSON.stringify({ name: 'Error delete data' }), {
        status: 400,
      });
    }
    return new NextResponse('', { status: 200 });
  } catch (error) {
    return new NextResponse('Internal server error', {
      status: 500,
    });
  }
}

export async function PUT(request: Request) {
  try {
    const {
      user_id,
      product_id,
      package_name,
      package_price,
      package_date,
    }: UserTable = await request.json();

    const { data, error } = await supabase
      .from('user_table')
      .update({
        package_name,
        package_price,
        package_date,
      })
      .eq('user_id', user_id)
      .eq('product_id', product_id)
      .select();

    if (error) {
      return new NextResponse(JSON.stringify({ name: 'Error updating data' }), {
        status: 400,
      });
    }
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse('Internal server error', {
      status: 500,
    });
  }
}
