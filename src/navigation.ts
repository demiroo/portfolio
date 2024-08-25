import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['de', 'tr', 'en'] as const;
   
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
   '/': '/',
    '/bilder': {
      en: '/images',
      de: '/bilder',
      tr: '/resimler'
    },
    '/blog': {
        en: '/my-blog',
        de: '/mein-blog',
        tr: '/benim-blogum'
      },
  
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, pathnames});