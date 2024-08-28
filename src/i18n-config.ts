export const i18n = {
  defaultLocale: "de",
  locales: ["en", "de", "tr"],
} as const;

// Generate the Locale type from the `i18n.locales` array
export type Locale = (typeof i18n)["locales"][number];
