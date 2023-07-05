import { getErrorResponse } from '@/lib/helpers';
import { prisma } from '@/lib/prisma';
import { ReserveInput, ReserveSchema } from '@/lib/validations/user.schema';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ReserveInput;
    const data = ReserveSchema.parse(body);

    const userId = req.headers.get('X-USER-ID');

    const reserve = await prisma.reserve.create({
      data: { ...data, userId: userId }
    });

    return new NextResponse(
      JSON.stringify({
        status: 'success',
        data: { reserve: reserve }
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error: any) {
    if (error instanceof ZodError) {
      return getErrorResponse(400, 'failed validations', error);
    }

    return getErrorResponse(500, error.message);
  }
}
