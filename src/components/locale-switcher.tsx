"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  const locales = {
    "de-DE": { flag: "🇩🇪", label: "Deutsch" },
    "tr-TR": { flag: "🇹🇷", label: "Türkçe" },
    "en-US": { flag: "🇺🇸", label: "English" },
    "es-ES": { flag: "🇪🇸", label: "Español" },
    "fr-FR": { flag: "🇫🇷", label: "Français" },
  };

  const getPathWithoutLocale = () => {
    const regex = new RegExp(`^/(${Object.keys(locales).join("|")})`);
    return pathname.replace(regex, "");
  };

  return (
    <ScrollArea className="w-full max-w-[calc(100vw-2rem)] mb-6 md:mb-10">
      <div className="flex justify-start md:justify-center space-x-1 p-1">
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
                "h-9 w-9 rounded-full flex-shrink-0",
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
      <ScrollBar orientation="horizontal" className="hidden" />
    </ScrollArea>
  );
}
