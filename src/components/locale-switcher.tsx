"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { GlobeIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function LocaleSwitcher() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

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
  }

  const getPathWithoutLocale = () => {
    const regex = new RegExp(`^/(${Object.keys(locales).join("|")})`)
    return pathname.replace(regex, "")
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "mr-2 ml-2 relative z-50 h-9 w-9 rounded-full",
            isOpen && "bg-accent text-accent-foreground"
          )}
        >
          <GlobeIcon className="h-5 w-5" />
          <span className="sr-only">Choose Language</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Choose Language</DrawerTitle>
        </DrawerHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4 px-4">
            {Object.entries(locales).map(([locale, { flag, label }]) => (
              <DrawerClose asChild key={locale}>
                <Link
                  href={`/${locale}${getPathWithoutLocale()}`}
                  locale={locale}
                  className="flex items-center space-x-2 rounded-md border p-2 hover:bg-accent"
                >
                  <span className="text-lg" aria-hidden="true">
                    {flag}
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </Link>
              </DrawerClose>
            ))}
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}