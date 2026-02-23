// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";

export async function proxy(request: NextRequest) {
  const { searchParams, pathname } = new URL(request.url);
  const error = searchParams.get("error");

  if (error === "access_denied") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  if (pathname.startsWith("/dashboard")) {
    const session = await auth0.getSession(request);

    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};