export const bemaraColors = {
  blackPlum: "#241820",
  bordeauxNoir: "#5B3443",
  mauveTaupe: "#9C7B85",
  roseBeige: "#C8A69A",
  silkCream: "#F2E9E2",
  ivory: "#F7F1ED",
} as const;

export const bemaraColorRoles = {
  canvas: bemaraColors.ivory,
  canvasWarm: bemaraColors.silkCream,
  ink: bemaraColors.blackPlum,
  inkSoft: bemaraColors.mauveTaupe,
  brand: bemaraColors.bordeauxNoir,
  brandDeep: bemaraColors.blackPlum,
  surfaceWarm: bemaraColors.roseBeige,
  borderSubtle: "rgba(36, 24, 32, 0.14)",
  focusRing: "rgba(91, 52, 67, 0.34)",
} as const;

export const bemaraTonalUse = {
  lightBase: 40,
  darkBase: 25,
  primaryAccent: 15,
  secondary: 10,
  warmSecondary: 10,
} as const;

export const bemaraTypography = {
  families: {
    interface: "Questrial",
    support: "Montserrat",
    fallback: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  desktop: {
    h1: { fontSize: "48px", lineHeight: "56px", family: "Questrial" },
    h2: { fontSize: "36px", lineHeight: "44px", family: "Questrial" },
    h3: { fontSize: "28px", lineHeight: "36px", family: "Questrial" },
    h4: { fontSize: "22px", lineHeight: "30px", family: "Questrial" },
    bodyLarge: { fontSize: "18px", lineHeight: "30px", family: "Questrial" },
    body: { fontSize: "16px", lineHeight: "26px", family: "Questrial" },
    bodySmall: { fontSize: "14px", lineHeight: "22px", family: "Questrial" },
    caption: { fontSize: "12px", lineHeight: "18px", family: "Montserrat" },
    button: { fontSize: "14px", lineHeight: "18px", family: "Montserrat" },
    number: { fontSize: "32px", lineHeight: "38px", family: "Montserrat" },
  },
  mobile: {
    h1: { fontSize: "34px", lineHeight: "40px", family: "Questrial" },
    h2: { fontSize: "28px", lineHeight: "34px", family: "Questrial" },
    h3: { fontSize: "22px", lineHeight: "28px", family: "Questrial" },
    h4: { fontSize: "20px", lineHeight: "26px", family: "Questrial" },
    bodyLarge: { fontSize: "17px", lineHeight: "28px", family: "Questrial" },
    body: { fontSize: "15px", lineHeight: "24px", family: "Questrial" },
    bodySmall: { fontSize: "14px", lineHeight: "22px", family: "Questrial" },
    caption: { fontSize: "12px", lineHeight: "18px", family: "Montserrat" },
    button: { fontSize: "14px", lineHeight: "18px", family: "Montserrat" },
    number: { fontSize: "26px", lineHeight: "32px", family: "Montserrat" },
  },
} as const;

export const bemaraRadii = {
  control: "8px",
  card: "14px",
  editorialPanel: "22px",
  circle: "999px",
} as const;

export const bemaraSpacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
} as const;

export const bemaraMotion = {
  quick: "120ms",
  standard: "220ms",
  expressive: "420ms",
  easing: "cubic-bezier(0.2, 0, 0, 1)",
} as const;

export const bemaraAssets = {
  iconPng: "brand/bemara-icon.png",
  logoPng: "brand/bemara-logo.png",
  sourceIdentityDirectory: "IDENTIDAD ",
} as const;

export const bemaraTokens = {
  colors: bemaraColors,
  colorRoles: bemaraColorRoles,
  tonalUse: bemaraTonalUse,
  typography: bemaraTypography,
  radii: bemaraRadii,
  spacing: bemaraSpacing,
  motion: bemaraMotion,
  assets: bemaraAssets,
} as const;

export type BemaraColorName = keyof typeof bemaraColors;
export type BemaraTokenSet = typeof bemaraTokens;
