import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['de', 'tr', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'de'
});
 
export const config = {
  // Match only internationalized pathnames
   matcher: '/((?!api|_next|static|public|favicon.ico).*)'
}; 
