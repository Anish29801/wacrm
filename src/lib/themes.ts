/**
 * Single source of truth for the color-theme catalog.
 *
 * The CSS variables themselves live in `src/app/globals.css` under
 * `html[data-theme="..."]` blocks — that file is the one we paste
 * theme tokens into. This module only carries the metadata the UI
 * (settings picker, no-flash boot script) needs.
 *
 * Adding a new theme is a two-step change:
 *   1. Append the new `html[data-theme="<id>"]` block in globals.css
 *      with every token from an existing theme (use orange-dark as the
 *      shape reference).
 *   2. Add an entry below. The order here drives the picker grid.
 */

export const THEME_IDS = [
  "orange-dark",
  "orange-blaze",
  "orange-sunset",
  "orange-pumpkin",
  "orange-glow",
] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export const DEFAULT_THEME: ThemeId = "orange-dark";

export const STORAGE_KEY = "wacrm.theme";

export interface ThemeMeta {
  id: ThemeId;
  name: string;
  tagline: string;
  /**
   * Static swatch color for the picker chip. Hard-coded so the boot
   * script / picker cards don't need a getComputedStyle round trip
   * before the page settles. Must mirror `--primary` of the same
   * theme in globals.css.
   */
  swatch: string;
}

export const THEMES: ReadonlyArray<ThemeMeta> = [
  {
    id: "orange-dark",
    name: "Orange Dark",
    tagline: "Rich orange accent on a warm dark canvas.",
    swatch: "oklch(0.62 0.15 40)",
  },
  {
    id: "orange-blaze",
    name: "Orange Blaze",
    tagline: "Fiery orange-red — bold and energetic.",
    swatch: "oklch(0.6 0.17 30)",
  },
  {
    id: "orange-sunset",
    name: "Orange Sunset",
    tagline: "Golden-orange glow — warm and inviting.",
    swatch: "oklch(0.63 0.14 50)",
  },
  {
    id: "orange-pumpkin",
    name: "Orange Pumpkin",
    tagline: "Deep pumpkin orange — rich and cozy.",
    swatch: "oklch(0.61 0.16 45)",
  },
  {
    id: "orange-glow",
    name: "Orange Glow",
    tagline: "Bright luminous orange — vibrant and modern.",
    swatch: "oklch(0.64 0.16 35)",
  },
];

export function isThemeId(value: unknown): value is ThemeId {
  return (
    typeof value === "string" &&
    (THEME_IDS as ReadonlyArray<string>).includes(value)
  );
}
