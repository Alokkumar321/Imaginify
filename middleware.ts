import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextMiddleware, NextRequest, NextResponse } from "next/server";

const handler: NextMiddleware = async (req: NextRequest) => {
  if (req.url === '/api/webhooks/clerk') {
    return NextResponse.json({ message: 'Webhook received' }); 
  }
  return clerkMiddleware()(req, {} as any); 
};

export default handler;

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
