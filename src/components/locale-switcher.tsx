"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher() {
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
    <div className="flex justify-center mb-10 space-x-2">
      {Object.entries(locales).map(([locale, { flag, label }]) => (
        <Link
          key={locale}
          href={`/${locale}${getPathWithoutLocale()}`}
          locale={locale}
        >
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-9 w-9 rounded-full",
              pathname.startsWith(`/${locale}`) &&
                "bg-accent text-accent-foreground"
            )}
            title={label}
          >
            <span className="text-lg" aria-hidden="true">
              {flag}
            </span>
            <span className="sr-only">{label}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
}
