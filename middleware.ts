import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Automatically detect the locale based on the user's browser
  localeDetection: true,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};