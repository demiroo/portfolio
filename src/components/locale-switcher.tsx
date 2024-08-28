"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLocale = pathName?.split("/")[1] || i18n.defaultLocale; // Extract current locale or fallback to default

  const getLocalizedPath = (locale: Locale) => {
    if (!pathName) return `/${locale}`; // If no path, only return locale
    const segments = pathName.split("/");
    segments[1] = locale; // Set locale as the first path segment
    return segments.join("/");
  };

  return (
    <div className="flex justify-center items-center space-x-2 mb-5 mt-5">
      {i18n.locales.map((locale) => {
        const isSelected = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={getLocalizedPath(locale)}
            className={`text-sm px-3 py-1 rounded ${
              isSelected
                ? "bg-gray-200 text-gray-900 font-semibold" // Style for selected locale
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700" // Style for non-selected locales
            } transition-all duration-200`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
