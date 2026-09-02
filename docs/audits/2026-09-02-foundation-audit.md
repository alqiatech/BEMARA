# BEMARA Auditoría de Fundaciones

Fecha: 2026-09-02

## A. Estado actual del repositorio

- Ruta auditada: `/Users/pattyg/Documents/BEMARA`.
- Estado inicial verificado: no existía repositorio Git; no existían apps, paquetes, package manager, backend, migraciones ni CI.
- Fuente de verdad encontrada: carpeta `IDENTIDAD ` con espacio final.
- Archivos oficiales leídos: `BEMARA_Manifiesto_Maestro_Codex_v1.md`, `BEMARA_Manifiesto_Maestro_Producto_Desarrollo_v1.docx`, logo, ícono, paleta, tipografía y dos referencias UI.
- Assets oficiales: monograma B, wordmark BEMARA, paleta Black Plum, Bordeaux Noir, Mauve Taupe, Rose Beige, Silk Cream e Ivory.

## B. Gap analysis contra el manifiesto

- Faltaba monorepo pnpm + Turborepo.
- Faltaban las cuatro superficies oficiales: Mobile, Personal/web, bemara.me y Operations.
- Faltaban TypeScript strict, i18n es-MX/en-US, design tokens, contratos de dominio y env contracts.
- Faltaban foundations de privacidad, consentimientos, memoria, Life Graph, LENA, notificaciones, entitlements, API y workers.
- Faltaba separación entre analytics de producto y life data.
- Faltaba RLS desde la primera migración.

## C. Arquitectura objetivo

- `apps/web`: sitio público y BEMARA Personal/PWA.
- `apps/mobile`: React Native + Expo.
- `apps/operations`: herramienta interna separada.
- `apps/api`: NestJS modular monolith.
- `apps/workers`: jobs y automatizaciones.
- `packages/*`: tokens, UI, dominio, i18n, validation, config, safety y SDK.
- `database/migrations`: SQL portable para Supabase/PostgreSQL.

## D. Estructura de carpetas propuesta

La estructura implementada sigue el manifiesto:

- `apps/web`
- `apps/mobile`
- `apps/operations`
- `apps/api`
- `apps/workers`
- `packages/design-tokens`
- `packages/ui-web`
- `packages/ui-mobile`
- `packages/domain`
- `packages/i18n`
- `packages/validation`
- `packages/sdk`
- `packages/safety`
- `packages/config`
- `database/migrations`
- `docs`

## E. Modelo inicial de datos

La migración inicial cubre:

- `profiles`
- `consents`
- `audit_logs`
- `life_entities`
- `life_relationships`
- `memories`
- `notifications`
- `entitlements`
- `external_connections`
- `lena_action_proposals`
- `ai_provider_calls`

Principios: RLS obligatorio, memoria autorizada, audit trail, no prompts sensibles en telemetría IA, entitlements sin precios hardcodeados.

## F. Estrategia de design system

- Tokens oficiales extraídos de identidad.
- Questrial como fuente principal de interfaz.
- Montserrat para labels, botones, métricas y microcopy funcional.
- Assets oficiales copiados como distribución técnica, sin rediseñar la marca.
- La referencia UI 1 inspira navegación superior y narrativa consumer.
- La referencia UI 2 se toma como referencia visual, pero el sidebar no se adopta para consumer porque contradice el manifiesto; puede informar Operations.

## G. Fundaciones de LENA

- LENA es la única inteligencia visible.
- Contrato inicial para modos: escuchar, entender, perspectiva, decidir, actuar y temporal.
- AI Gateway pendiente de provider real; no habrá llamadas directas desde frontend.
- Acciones sensibles requieren consentimiento y/o aprobación humana.
- La memoria temporal queda marcada como no persistente.

## H. Plan de implementación por fases

1. Fase 0: monorepo, tokens, i18n, dominio, config, SQL, API, workers, CI y docs.
2. Fase 1: onboarding adaptativo, profile/context, Home base, Consent Center y Memory Center.
3. Fase 2: LENA Core con AI Gateway, memoria, RAG, safety y explainability.
4. Fase 3: dominios con flujo end-to-end real y conexión Life Graph.
5. Fase 4: Executive Layer, Smart Mail, calendar/tasks/doc intelligence y notifications.
6. Fase 5: baselines, correlaciones, predicciones y simulaciones explicables.
7. Fase 6: monetización, entitlements reales, pagos, hardening legal y release.

## I. Riesgos y decisiones pendientes

- Node local verificado: v25.9.0. Puede estar por delante del soporte oficial de algunas herramientas.
- La carpeta `IDENTIDAD ` tiene espacio final; se preserva para no alterar fuente de verdad.
- Faltan credenciales reales de Supabase, OpenAI, Anthropic, Resend, Conekta, Apple, Google, Sentry y PostHog.
- Falta decisión comercial de precios, trials, límites por plan y `@bemara.me` incluido o add-on.
- Falta revisión jurídica antes de producción.
- Falta decidir sourcing/licencia local de archivos Questrial y Montserrat para evitar depender de fuentes remotas.

## J. Primer bloque concreto recomendado

Construir Fase 0 sin pantallas de dominio: monorepo operativo, tokens oficiales, i18n, contratos de dominio, env contracts, API/worker foundations, migración SQL, CI y documentación.
