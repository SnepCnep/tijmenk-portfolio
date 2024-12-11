import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const [username, ...rest] = slug;

  return NextResponse.json({ username, rest });
}
