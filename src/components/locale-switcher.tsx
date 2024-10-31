"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const LocaleSwitcher = () => {
  const pathname = usePathname();
  
  const locales = {
    "de-DE": { flag: "🇩🇪", label: "Deutsch" },
    "en-US": { flag: "🇺🇸", label: "English" },
    "es-ES": { flag: "🇪🇸", label: "Español" },
    "fr-FR": { flag: "🇫🇷", label: "Français" },
    "hi-IN": { flag: "🇮🇳", label: "हिन्दी" },
    "it-IT": { flag: "🇮🇹", label: "Italiano" },
    "ms-MY": { flag: "🇲🇾", label: "Melayu" },
    "pl-PL": { flag: "🇵🇱", label: "Polski" },
    "tr-TR": { flag: "🇹🇷", label: "Türkçe" },
    "uk-UA": { flag: "🇺🇦", label: "Українська" },
    "zh-CN": { flag: "🇨🇳", label: "中文" }
  };
  
  const getPathWithoutLocale = () => {
    const regex = new RegExp(`^/(${Object.keys(locales).join("|")})`);
    return pathname.replace(regex, "");
  };

  return (
    <div className="sticky mb-10 top-0 z-50 w-full">
      <div className="bg-background relative overflow-hidden">
        <div className="shape-border"></div>
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex items-center justify-center flex-wrap py-1">
            {Object.entries(locales).map(([locale, { flag, label }]) => (
              <Link
                key={locale}
                href={`/${locale}${getPathWithoutLocale()}`}
                locale={locale}
                className="group flex items-center space-x-1 px-2 py-1 mx-0.5 
                         transition-opacity duration-200 text-xs
                         hover:opacity-100 opacity-70
                         text-foreground"
              >
                <span 
                  className="font-twemoji text-2xl transform scale-75" 
                  style={{ display: 'inline-block' }}
                  aria-hidden="true"
                >
                  {flag}
                </span>
                <span className="font-medium hidden group-hover:inline">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocaleSwitcher;