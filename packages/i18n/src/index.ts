export const locales = ["es-MX", "en-US"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es-MX";

const esMx = {
  "brand.name": "BEMARA",
  "brand.slogan": "Toda tú. Con claridad.",
  "brand.intelligence": "LENA",
  "nav.home": "Inicio",
  "nav.personal": "Personal",
  "nav.operations": "Operations",
  "nav.access": "Acceso",
  "public.hero.eyebrow": "Inteligencia personal para mujeres",
  "public.hero.title": "Toda tú. Con claridad.",
  "public.hero.body":
    "BEMARA conecta cuerpo, mente, dinero, tiempo, relaciones, documentos y decisiones bajo una inteligencia contextual: LENA.",
  "public.hero.primaryCta": "Solicitar acceso",
  "public.hero.secondaryCta": "Conocer BEMARA",
  "public.foundation.title": "Una plataforma que entiende contexto, no sólo datos.",
  "public.foundation.lifeGraph": "Life Graph",
  "public.foundation.lifeGraphBody": "Entidades, relaciones, eventos y memoria autorizada.",
  "public.foundation.privacy": "Privacidad por diseño",
  "public.foundation.privacyBody": "Consentimiento granular, memoria editable y trazabilidad.",
  "public.foundation.lena": "LENA transversal",
  "public.foundation.lenaBody": "Una sola inteligencia visible, con seguridad y aprobación humana.",
  "public.foundation.contractsLabel": "Contratos fundacionales de BEMARA",
  "personal.shell.title": "Tu claridad de hoy",
  "personal.shell.body": "Menos ruido, más dirección.",
  "mobile.home.title": "Buenos días",
  "mobile.home.body": "Tu enfoque de hoy, diseñado para ti.",
  "mobile.lena.prompt": "¿Qué puede quitarte carga hoy?",
  "operations.title": "BEMARA Operations",
  "operations.body": "Herramienta interna separada de la experiencia consumer.",
  "operations.foundation": "Estado de fundaciones",
  "operations.safety": "Safety y auditoría",
  "operations.safetyBody": "RLS, audit trail, consentimientos y confirmación humana desde la base.",
  "operations.entitlements": "Entitlements configurables",
  "operations.entitlementsBody":
    "Free, Personal e Intelligence como contratos, sin precios hardcodeados.",
  "operations.futureFlags": "Community / Clinical",
  "operations.futureFlagsBody": "Preparadas como capacidades futuras con feature flags apagadas.",
  "status.prepared": "Preparado",
  "status.disabled": "Apagado",
  "status.pending": "Pendiente",
} as const;

type EsMxDictionary = typeof esMx;
type Dictionary = Record<keyof EsMxDictionary, string>;
export type TranslationKey = keyof EsMxDictionary;

const enUs = {
  "brand.name": "BEMARA",
  "brand.slogan": "All of you. Clearly.",
  "brand.intelligence": "LENA",
  "nav.home": "Home",
  "nav.personal": "Personal",
  "nav.operations": "Operations",
  "nav.access": "Access",
  "public.hero.eyebrow": "Personal intelligence for women",
  "public.hero.title": "All of you. Clearly.",
  "public.hero.body":
    "BEMARA connects body, mind, money, time, relationships, documents, and decisions through one contextual intelligence: LENA.",
  "public.hero.primaryCta": "Request access",
  "public.hero.secondaryCta": "Meet BEMARA",
  "public.foundation.title": "A platform that understands context, not only data.",
  "public.foundation.lifeGraph": "Life Graph",
  "public.foundation.lifeGraphBody": "Entities, relationships, events, and authorized memory.",
  "public.foundation.privacy": "Privacy by design",
  "public.foundation.privacyBody": "Granular consent, editable memory, and traceability.",
  "public.foundation.lena": "LENA across BEMARA",
  "public.foundation.lenaBody": "One visible intelligence, with safety and human approval.",
  "public.foundation.contractsLabel": "BEMARA foundation contracts",
  "personal.shell.title": "Today's clarity",
  "personal.shell.body": "Less noise, more direction.",
  "mobile.home.title": "Good morning",
  "mobile.home.body": "Today's focus, designed for you.",
  "mobile.lena.prompt": "What can I take off your plate today?",
  "operations.title": "BEMARA Operations",
  "operations.body": "Internal tooling separated from the consumer experience.",
  "operations.foundation": "Foundation status",
  "operations.safety": "Safety and audit",
  "operations.safetyBody": "RLS, audit trail, consent, and human confirmation from the base.",
  "operations.entitlements": "Configurable entitlements",
  "operations.entitlementsBody":
    "Free, Personal, and Intelligence as contracts, without hardcoded prices.",
  "operations.futureFlags": "Community / Clinical",
  "operations.futureFlagsBody": "Prepared as future capabilities with feature flags off.",
  "status.prepared": "Prepared",
  "status.disabled": "Disabled",
  "status.pending": "Pending",
} as const satisfies Dictionary;

export const dictionaries = {
  "es-MX": esMx,
  "en-US": enUs,
} as const satisfies Record<Locale, Dictionary>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale];
}

export function translate(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale][key];
}
