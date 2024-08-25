'use client';
import { useRouter, usePathname } from '@/navigation';
import React from 'react';

type Locale = "de" | "tr" | "en";

export default function LanguageChangerFooter() {
  const router = useRouter();
  const pathname = usePathname();

  const handleTextClick = (lang: Locale) => {
    router.push(pathname, { locale: lang });
  };

  return (
    <div className="justify-center flex space-x-2 mt-4">
      <div>
        <span
          className="bg-black font-medium px-2 py-1 text-xs cursor-pointer text-white rounded-lg hover:bg-slate-300 hover:text-slate-900"
          onClick={() => handleTextClick('de')}
        >
          DE
        </span>
      </div>
      <div>
        <span
          className="bg-black font-medium px-2 py-1 text-xs cursor-pointer text-white rounded-lg hover:bg-slate-300 hover:text-slate-900"
          onClick={() => handleTextClick('tr')}
        >
          TR
        </span>
      </div>
      <div>
        <span
          className="bg-black font-medium px-2 py-1 text-xs cursor-pointer text-white rounded-lg hover:bg-slate-300 hover:text-slate-900"
          onClick={() => handleTextClick('en')}
        >
          EN
        </span>
      </div>
    </div>
  );
}
