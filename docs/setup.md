# BEMARA Setup

## Requisitos locales

- Node compatible con el ecosistema web/mobile. Se detectó Node `v25.9.0`; si alguna herramienta falla por soporte, usar una versión LTS soportada por Next, Expo y Nest.
- pnpm `10.x`.

## Variables

Usar `.env.example` como contrato. No guardar secrets reales en git.

## Fuente de verdad

La carpeta oficial de identidad es `IDENTIDAD `, con espacio final. No renombrarla sin autorización expresa. Los assets copiados en `apps/*/public/brand`, `apps/mobile/assets/brand` y `packages/design-tokens/assets` son copias técnicas para distribución.

## Calidad

Los scripts raíz ejecutan Turbo sobre apps y paquetes:

- `pnpm typecheck`
- `pnpm lint`
- `pnpm test`
- `pnpm build`

## Superficies separadas

- BEMARA Mobile: `pnpm --filter @bemara/mobile dev`
- BEMARA Mobile con Development Build: `pnpm --filter @bemara/mobile dev:client`
- BEMARA Mobile iOS local: `pnpm --filter @bemara/mobile ios`
- BEMARA Mobile Android local: `pnpm --filter @bemara/mobile android`
- BEMARA Personal/PWA: `pnpm --filter @bemara/web dev`
- BEMARA Operations: `pnpm --filter @bemara/operations dev`
- BEMARA API: `pnpm --filter @bemara/api dev`
- BEMARA Workers: `pnpm --filter @bemara/workers dev`

`apps/mobile` no publica BEMARA Personal mediante Expo Web. El build de Mobile valida TypeScript localmente; las builds nativas se preparan con EAS cuando correspondan.
