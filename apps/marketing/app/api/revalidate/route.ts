import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
    try {
        const secret = request.nextUrl.searchParams.get('secret');

        // Verify Secret
        if (secret !== process.env.CMS_WEBHOOK_SECRET) {
            return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
        }

        // Parse CMS Payload
        const body = await request.json();
        const slug = body?.slug?.current || body?.slug;

        if (!slug) {
            return NextResponse.json({ message: 'No slug provided' }, { status: 400 });
        }

        // Revalidate the specific blog post and the blog index
        revalidatePath(`/blog/${slug}`);
        revalidatePath('/blog');

        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
        console.error('Error in revalidate route:', err);
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
}
