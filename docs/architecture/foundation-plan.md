# BEMARA Plan de Fundaciones

## Principios no negociables

- BEMARA no es CRM, ERP, dashboard administrativo, app médica ni chatbot con tarjetas.
- LENA es la única inteligencia visible.
- Community y Clinical quedan preparadas con feature flag apagada.
- La experiencia consumer no reutiliza Operations.
- BEMARA Mobile usa React Native + Expo + TypeScript como app nativa iOS/Android.
- Expo es tooling de Mobile, no sustituto de BEMARA Personal/PWA.
- BEMARA Personal/PWA vive en `apps/web` como aplicación web React + TypeScript independiente.
- BEMARA Operations vive en `apps/operations` y es una superficie interna separada.
- No hay precios, secrets, model IDs ni API keys hardcodeadas.
- Todo texto visible de producto debe salir de i18n.
- Privacy by design y RLS desde la primera migración.

## Arquitectura oficial

- `apps/mobile`: React Native, Expo, TypeScript, Expo Router, iOS y Android. Expo Go se permite sólo para validación temprana; Development Builds y EAS Build/EAS Submit se usan cuando comiencen integraciones nativas.
- `apps/web`: BEMARA Personal/PWA, React + TypeScript, arquitectura web propia, experiencia consumer premium responsive.
- `apps/operations`: React + TypeScript, aplicación interna separada.
- `apps/api`: Node.js + TypeScript, backend independiente para lógica sensible, privacidad y AI Gateway.
- `apps/workers`: Node.js + TypeScript para jobs, procesamiento asíncrono, notificaciones, documentos y tareas de LENA.
- Datos: PostgreSQL sobre Supabase inicial, Auth, RLS, Storage y pgvector cuando corresponda.
- LENA: orquestación propia en TypeScript, OpenAI como proveedor principal, Anthropic como fallback y memoria propiedad de BEMARA.

## Orden técnico

1. Workspace y calidad: pnpm, Turbo, TS strict, ESLint, Prettier, Vitest.
2. Identidad: tokens oficiales, assets oficiales y primitivas UI.
3. Contratos: dominio, i18n, config, validation, safety y SDK.
4. Datos: migración SQL inicial con RLS.
5. Apps: web/PWA, mobile, operations, API y workers separados.
6. Observabilidad: contratos de eventos permitidos, Sentry/PostHog sin life data sensible.
7. CI: typecheck, lint, tests y build.

## Primeras fundaciones visibles permitidas

- Sitio público con marca y promesa literal.
- Shell Personal/PWA mínimo sin sidebar administrativo.
- Shell Mobile con acceso a LENA.
- Operations interno con estado de fundaciones.

No se implementan dominios de producto hasta tener onboarding, consentimiento, memoria y Life Graph funcionando.
