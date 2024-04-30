import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.user.findMany({});

  return Response.json({
    status: 200,
    user: result,
  });
}
