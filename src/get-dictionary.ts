import "server-only";
import type { Locale } from "./i18n-config";  // Use the inferred Locale type from i18n-config

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  tr: () => import("./dictionaries/tr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.de();
