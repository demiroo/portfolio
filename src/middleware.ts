import type {
  MiddlewareConfig,
  NextFetchEvent,
  NextRequest,
} from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const shouldUseIntl = true;

const createIntlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const response = shouldUseIntl ? createIntlMiddleware(request) : NextResponse.next();
  
  // Add caching headers
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  
  return response;
}

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!_next|favicon.ico|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(de-DE|en-US|es-ES|ms-MY|fr-FR|hi-IN|it-IT|pl-PL|tr-TR|uk-UA|zh-CN)/:path*",
    "/"
  ],
};
