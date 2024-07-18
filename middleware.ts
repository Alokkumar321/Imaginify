import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextMiddleware, NextRequest, NextResponse } from "next/server";

const handler: NextMiddleware = async (req: NextRequest, res: NextResponse) => {
  if (req.url === '/api/webhooks/clerk') {
    return { response: null };
  }
  await clerkMiddleware()(req, res);

};

export default handler;

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
