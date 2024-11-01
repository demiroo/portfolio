"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { GlobeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <div className="relative z-50 w-full">
      <TooltipProvider delayDuration={100}>
        <Popover>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <motion.div
                  className={cn(
                    "ml-3 mr-3 flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.1 }}
                >
                  <GlobeIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Choose Language</span>
                </motion.div>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent 
              side="bottom" 
              className="bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2"
              sideOffset={5}
            >
              Select Language
            </TooltipContent>
          </Tooltip>
          
          <PopoverContent 
            side="top" 
            align="end"
            sideOffset={5}
            className="w-48 p-0 rounded-md shadow-lg bg-background border border-gray-200 dark:border-gray-700"
            avoidCollisions={true}
          >
            <div className="max-h-[calc(100vh-100px)] overflow-y-auto">
              <div className="flex flex-col py-1">
                {Object.entries(locales).map(([locale, { flag, label }]) => (
                  <Link
                    key={locale}
                    href={`/${locale}${getPathWithoutLocale()}`}
                    locale={locale}
                    className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <span 
                      className="font-twemoji text-lg" 
                      style={{ display: 'inline-block' }} 
                      aria-hidden="true"
                    >
                      {flag}
                    </span>
                    <span className="text-sm font-medium">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </TooltipProvider>
    </div>
  );
};

export default LocaleSwitcher;