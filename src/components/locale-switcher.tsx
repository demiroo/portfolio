"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLocale = pathName?.split("/")[1]; // Extrahiert das aktuelle Locale

  const getLocalizedPath = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale; // Setzt das Locale als ersten Pfadparameter
    return segments.join("/");
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      {i18n.locales.map((locale) => {
        const isSelected = locale === currentLocale; // Überprüfen, ob das aktuelle Locale ausgewählt ist

        return (
          <Link
            key={locale}
            href={getLocalizedPath(locale)}
            className={`text-sm px-3 py-1 rounded ${
              isSelected
                ? "bg-gray-200 text-gray-900 font-semibold" // Stil für das ausgewählte Locale
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700" // Stil für nicht ausgewählte Locales
            } transition-all duration-200`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
