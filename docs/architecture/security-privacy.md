# BEMARA Fundaciones de Seguridad y Privacidad

## Data classes

- `standard`: información técnica o no sensible.
- `personal`: información de la vida de la usuaria.
- `sensitive`: salud, emociones, finanzas, documentos, sexualidad, memoria sensible o integraciones.
- `restricted`: acciones, crisis, seguridad o datos que requieren controles adicionales.

## Consentimiento

Cada uso relevante debe guardar scope, finalidad, base legal, estado, fuente y timestamps. Los scopes iniciales viven en `@bemara/domain` y `@bemara/validation`.

## Memoria

La memoria se divide en working, personal, structured, episodic, preference y sensitive. El modo temporal de LENA no debe escribir memoria personal.

## Observabilidad

Los eventos de producto no deben incluir síntomas, sexualidad, conversaciones, cuerpos de documentos ni cifras financieras. La telemetría IA permite modelo/alias, tokens, latencia, costo y tool calls, pero no prompt sensible.

## Acciones sensibles

Requieren aprobación humana cuando involucren terceros, documentos, correos, calendario con invitados, exportación, borrado, cambios de consentimiento, cuenta externa o acciones financieras.
