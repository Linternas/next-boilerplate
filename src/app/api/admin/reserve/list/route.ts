import { getErrorResponse } from '@/lib/helpers';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import url from 'url';

export async function GET(req: NextRequest) {
  const query = url.parse(req.url, true).query;
  const count = await prisma.reserve.count();

  if (!query.skip) {
    return getErrorResponse(500, 'Skip is required');
  }

  if (!query.take) {
    return getErrorResponse(500, 'Take is required');
  }

  const list = await prisma.reserve.findMany({
    skip: Number(query.skip),
    take: Number(query.take),
    orderBy: {
      id: 'asc'
    }
  });

  return NextResponse.json({
    data: {
      count: count,
      list: list
    }
  });
}
