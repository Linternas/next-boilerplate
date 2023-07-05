import { getErrorResponse } from '@/lib/helpers';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const count = await prisma.reserve.count();
  const data = await prisma.reserve.findMany({
    skip: 0,
    take: 20,
    orderBy: {
      id: 'asc'
    }
  });

  return NextResponse.json({
    data: {
      count: count,
      list: data
    }
  });

  //   return getErrorResponse(500, error.message);
}
