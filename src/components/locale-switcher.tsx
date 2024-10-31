"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { GlobeIcon } from "lucide-react";

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
    "zh-CN": { flag: "🇨🇳", label: "中文" },
  };

  const getPathWithoutLocale = () => {
    const regex = new RegExp(`^/(${Object.keys(locales).join("|")})`);
    return pathname.replace(regex, "");
  };

  return (
    <div className="sticky mb-10 top-0 z-50 w-full">
      <div className="py-2 bg-background relative overflow-hidden">
        <div className="shape-border"></div>
        <div className="max-w-7xl mx-auto px-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="flex items-center space-x-1">
                <GlobeIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Choose Language</span> {/* For accessibility */}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-background">
              <div className="flex flex-col py-2">
                {Object.entries(locales).map(([locale, { flag, label }]) => (
                  <Link
                    key={locale}
                    href={`/${locale}${getPathWithoutLocale()}`}
                    locale={locale}
                    className="group flex items-center space-x-1 px-2 py-1 transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground"
                  >
                    <span className="font-twemoji text-2xl transform scale-75" style={{ display: 'inline-block' }} aria-hidden="true">
                      {flag}
                    </span>
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default LocaleSwitcher;
