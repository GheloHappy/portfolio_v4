export const R2_BASE =
  process.env.NEXT_PUBLIC_R2_BASE ??
  "https://pub-7e07910b633646b4aea20e5c0b782763.r2.dev";

export const img = (path: string) => `${R2_BASE}${path}`;
