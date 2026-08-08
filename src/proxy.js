import { NextResponse } from "next/server";

// Set this to `false` to restore all pages.
const ENABLED = false;

export function proxy(request) {
  if (!ENABLED) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Only the home page is shown. Everything else redirects home.
  if (pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Ignore assets, images, API and metadata so they still load on the home page.
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|webp|svg|css|js|woff2?)$).*)",
};
