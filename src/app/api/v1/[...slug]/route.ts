import { NextRequest, NextResponse } from 'next/server';




export async function GET(request: NextRequest, context: { params: { slug: string[] } }) {
    const { slug } = context.params;
    const [username, ...rest] = slug;
    

}