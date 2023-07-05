import { getErrorResponse } from '@/lib/helpers';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const reserveId = req.url.split('/')[req.url.split('/').length - 1];
    const reserve = await prisma.reserve.findUnique({ where: { id: reserveId } });

    return NextResponse.json({ status: 'success', data: reserve });
  } catch (error: any) {
    return getErrorResponse(500, error.message);
  }
}
