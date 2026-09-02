# BEMARA — Manifiesto Maestro de Producto y Desarrollo
**Toda tú. Con claridad.**

**Documento fuente de verdad para Codex — v1.0 — 01 septiembre 2026**

> Marca: BEMARA · Dominio: bemara.me · IA: LENA · Mercado inicial: México · Idiomas: es-MX / en-US

## 0. Fuente de verdad y propósito del documento

> **Nota / Regla:** REGLA PARA CODEX: cuando exista duda entre una solución SaaS genérica y la experiencia consumer premium definida para BEMARA, prevalece BEMARA.

Este documento es la especificación maestra de BEMARA para producto, diseño, experiencia, inteligencia artificial, datos, seguridad, monetización técnica y desarrollo. Es la fuente de verdad que deberá utilizar Codex para iniciar la construcción. No es una presentación comercial ni un documento de ideación.

BEMARA no deberá reinterpretarse durante el desarrollo como un CRM, ERP, panel administrativo para consumidoras, chatbot con módulos, aplicación médica, marketplace clínico o conjunto de microapps. Cualquier superficie, rol, módulo o portal no descrito aquí se considera fuera de alcance y no deberá crearse sin autorización expresa.

La visión es deliberadamente amplia. La disciplina de desarrollo consiste en construir por capas y con arquitectura correcta, no en reducir la propuesta a un producto genérico. Una fase técnica no equivale a amputar la visión del producto.

## 1. Identidad de producto

Marca: BEMARA. Dominio principal: bemara.me. Slogan: “Toda tú. Con claridad.” Inteligencia femenina: LENA.

BEMARA es una plataforma personal integral diseñada alrededor de la vida completa de una mujer. Conecta cuerpo, mente, emociones, dinero, tiempo, responsabilidades, familia, relaciones, carrera, hogar, documentos, seguridad, metas y transiciones de vida bajo una sola inteligencia contextual.

La tesis de producto es simple: las aplicaciones existentes suelen conocer una parte de la mujer; BEMARA busca comprender las dimensiones relevantes de la misma mujer y cómo se relacionan entre sí, siempre bajo control y consentimiento de la usuaria.

- No es “otra app de salud femenina”.
- No es un Life OS genérico re-etiquetado para mujeres.
- No asume que mujer significa menstruar, ser madre, estar casada, ser heterosexual o tener una anatomía determinada.
- No exige que la usuaria administre 20 apps o capture datos de forma obsesiva.
- La IA debe reducir carga, generar claridad y ejecutar acciones útiles.

## 2. Personalidad de marca y sistema visual

Dirección interna de diseño: FEMININE AUTHORITY. Debe sentirse femenina, adulta, elegante, inteligente, tecnológica y con presencia. La feminidad proviene de proporción, tipografía, fotografía, textura, ritmo y color; no de clichés visuales.

El logotipo oficial utiliza el monograma B como símbolo principal. El wordmark es BEMARA. La B funciona también como icono de app, favicon y sello de identidad.

- Prohibido: rosa chicle, neón, ramitas, flores decorativas, úteros abstractos, corazoncitos como identidad, lunas “femtech”, estrellitas arbitrarias o estética wellness genérica.
- Prohibido: look de CRM/SaaS empresarial, sidebar persistente barato, grids de KPIs idénticos, tablas administrativas como Home o cards repetidas sin narrativa.
- Permitido: superficies editoriales, composición asimétrica controlada, respiración, contrastes profundos, data visualisation personalizada, microinteracciones elegantes y narrativa visual.

| Token | HEX | Rol |
|---|---|---|
| Black Plum | #241820 | Base oscura, navegación, texto de autoridad, dark mode. |
| Bordeaux Noir | #5B3443 | CTA, énfasis, acciones importantes, identidad. |
| Mauve Taupe | #9C7B85 | Secundario, gráficas, estados, capas suaves. |
| Rose Beige | #C8A69A | Superficies cálidas, tarjetas, acentos humanos. |
| Silk Cream | #F2E9E2 | Fondo claro principal. |
| Ivory | #F7F1ED | Fondos amplios, contraste y respiración. |

### 2.1 Tipografía de interfaz

Questrial es la tipografía general de interfaz. Montserrat es tipografía de apoyo para labels, botones, métricas, microcopy funcional y énfasis. El logotipo/monograma es arte de marca independiente y no debe reconstruirse con una fuente aproximada.

| Uso | Desktop | Mobile | Fuente sugerida |
|---|---|---|---|
| H1 | 48/56 px | 34/40 px | Questrial Regular |
| H2 | 36/44 px | 28/34 px | Questrial Regular |
| H3 | 28/36 px | 22/28 px | Questrial Regular |
| H4 | 22/30 px | 20/26 px | Questrial Regular |
| Body L | 18/30 px | 17/28 px | Questrial Regular |
| Body M | 16/26 px | 15/24 px | Questrial Regular |
| Body S | 14/22 px | 14/22 px | Questrial Regular |
| Caption | 12/18 px | 12/18 px | Montserrat Medium |
| Button | 14/18 px | 14/18 px | Montserrat SemiBold |
| KPI/Number | 32/38 px | 26/32 px | Montserrat SemiBold |

## 3. Ecosistema BEMARA: superficies oficiales

El ecosistema inicial tiene cuatro superficies y ninguna otra. Todas comparten identidad, datos, permisos, entitlements y lógica de negocio, pero cada una tiene un propósito distinto.

- No crear portal de médicos, nutriólogos, psicólogos, familiares, hijos, pareja, proveedores, empresas ni “clientes”.
- No crear CRM, ERP, ecommerce propio, marketplace ni telemedicina en lanzamiento.
- Community es una capacidad futura dentro de BEMARA, no otra app.
- Clinical es una capacidad futura; no hay prestación clínica en V1.

| Superficie | Propósito | Tecnología base | Regla UX |
|---|---|---|---|
| BEMARA Mobile | Vida cotidiana: LENA, voz, captura, notificaciones, consultas, agenda, seguridad, registros y acciones. | React Native + Expo + TypeScript | Mobile-first; flujos rápidos y contextuales. |
| BEMARA Personal / PWA | Centro Personal profundo: perspectiva, finanzas, salud longitudinal, Life Graph, documentos, tendencias, predicciones y planeación. | Next.js/React + TypeScript PWA | Consumer premium; sin sidebar administrativo. |
| bemara.me público | Sitio de marca, producto, planes, privacidad, FAQ, login y descargas. | Next.js + TypeScript | Editorial, SEO y adquisición. |
| BEMARA Operations | Operación interna: usuarios, entitlements, soporte, safety, costos IA, feature flags, consentimientos e incidencias. | Next.js + TypeScript | Admin interno separado; jamás reutilizar como PWA de usuaria. |

## 4. Usuario objetivo, elegibilidad e inclusión

> **Nota / Regla:** Preguntar sólo lo necesario. Información corporal o sensible debe ser opcional, contextual y acompañada de explicación clara de por qué se solicita.

BEMARA se lanza para mujeres adultas, con foco de producto desde los 20 años en adelante. V1 no se diseña para menores. La plataforma debe acompañar distintas etapas y realidades sin forzar un modelo de vida único.

Identidad, anatomía relevante, situación hormonal/reproductiva, maternidad, orientación, relación de pareja y etapa vital se modelan como dimensiones independientes. Ninguna se deduce silenciosamente a partir de otra.

- Mujeres cis y mujeres trans.
- Solteras, en pareja, casadas, separadas, divorciadas o viudas.
- Con hijos, sin hijos por elección, infertilidad, adopción o pérdidas gestacionales.
- Mujeres con histerectomía, amenorrea, terapia hormonal u otras realidades corporales pertinentes.
- Madres de bebés, niños, adolescentes o hijos adultos; abuelas; cuidadoras de padres u otros familiares.
- Profesionales, empleadas, estudiantes adultas, emprendedoras, cuidadoras, jubiladas o en reinvención.

## 5. Arquitectura adaptativa: una plataforma distinta para cada mujer

BEMARA no muestra el catálogo completo de capacidades como un menú interminable. El producto completo existe por debajo; la experiencia visible se adapta a la mujer, a su etapa y a sus prioridades.

Cada dominio/capacidad puede estar Activo, Contextual o Dormido. Un dominio dormido no desaparece del producto: simplemente no ocupa atención hasta que tenga sentido. La usuaria puede activarlo manualmente en cualquier momento.

- Activo: relevante ahora y visible en Home/Personal.
- Contextual: puede aparecer por un acontecimiento, patrón o decisión de la usuaria.
- Dormido: existe pero no distrae.
- Nunca activar una categoría sensible sólo por inferencia. LENA propone y la usuaria decide.

## 6. Onboarding y Test BEMARA

El onboarding no es un formulario demográfico. Es el primer modelo contextual de la usuaria. Debe ser ramificado, amable, opcional por bloques y con “prefiero no responder” donde corresponda. Objetivo orientativo: 7–10 minutos para la ruta completa, con versión rápida y progressive profiling posterior.

Al finalizar, BEMARA muestra “Así queda BEMARA para ti hoy”: no una lista de 28 módulos, sino una experiencia inicial con prioridades y la posibilidad de ajustar.

| Bloque | Qué busca comprender | Resultado |
|---|---|---|
| Identidad y lenguaje | Nombre, pronombre si desea, idioma principal, Bilingual Mode. | Experiencia lingüística y tono inicial. |
| Etapa de vida | Edad, relación, vivienda, grandes transiciones actuales. | Prioridades contextuales. |
| Personas y cuidado | Hijos/edades si aplica, padres/personas a cargo, mascotas. | Mapa inicial de responsabilidades. |
| Trabajo y crecimiento | Empleo, carrera, emprendimiento, estudios, objetivos. | Dominio Work/Growth. |
| Dinero | Nivel deseado de ayuda, objetivos, preocupaciones; sin forzar cifras sensibles. | Configuración financiera inicial. |
| Cuerpo y bienestar | Sueño, energía, prioridades físicas; salud femenina sólo cuando corresponda. | Módulos corporales relevantes. |
| Mente y emociones | Cómo quiere usar LENA: escucha, claridad, organización, decisiones. | Modos de acompañamiento. |
| Prioridades | Elegir áreas que quiere tener al frente ahora. | Home inicial. |
| Privacidad | Memoria, permisos, datos sensibles, integraciones. | Consentimientos auditables. |

## 7. Home adaptativo y navegación

No existe un Home universal. El Home se compone según prioridad, urgencia, relevancia, beneficios esperados, preferencias fijadas por la usuaria y fatiga de notificaciones/interacciones.

La navegación consumer no deberá usar un sidebar administrativo persistente. En desktop/PWA se prioriza barra superior ligera, búsqueda/comando, navegación contextual, espacios editoriales y paneles que cambian según la intención. En mobile se limita a 4–5 destinos principales y LENA siempre accesible.

- Una “claridad de hoy” puede ser una narrativa, no un KPI.
- Evitar 12 cards iguales. Usar jerarquía: insight principal, acciones, historia, visualizaciones y contexto.
- Las gráficas deben responder una pregunta concreta de la mujer, no decorar.
- Toda insight importante ofrece “¿Por qué estoy viendo esto?” y muestra las señales utilizadas.
- La usuaria puede fijar, ocultar o bajar prioridad de áreas.

## 8. Taxonomía funcional: dominios y subdominios

Los siguientes dominios son la arquitectura funcional interna. No implican 14 botones visibles. LENA y el Home adaptativo pueden atravesar varios dominios en una sola interacción.

| Dominio | Subdominios principales |
|---|---|
| Claridad / Orquestación | Home adaptativo, prioridades, Daily/Weekly Brief, insights, “qué necesita atención”. |
| Cuerpo & Salud | Salud femenina, ciclo/hormonas cuando aplique, fertilidad/embarazo/postpartum, peri/menopausia, sueño, energía, síntomas, dolor, digestión, movimiento, nutrición, fuerza, hueso, cardiovascular, suelo pélvico, sexualidad, medicamentos/estudios/wearables. |
| Mente & Emociones | Estrés, ansiedad percibida, tristeza, enojo, culpa, soledad, autoestima, imagen corporal, burnout, identidad, journaling, duelo, patrones emocionales. |
| Dinero & Independencia | Ingresos, gastos, presupuesto, deudas, ahorro, metas, patrimonio, seguros, retiro, suscripciones, escenarios y Plan B. |
| Tiempo & Carga Mental | Calendario, tareas, rutinas, capacidad, responsabilidades, delegación, automatización y Mental Load Intelligence. |
| Familia & Cuidado | Hijos por etapa, escuela, salud, actividades, coparenting, padres, caregiving, personas dependientes y mascotas. |
| Relaciones & Sexualidad | Pareja, comunicación, acuerdos, conflictos, intimidad, libido, dating, amistades y vida social. |
| Carrera & Crecimiento | CV, logros, salario, negociación, empleo, aprendizaje, entrevistas, liderazgo, emprendimiento y reinvención profesional. |
| Casa & Vida Administrativa | Servicios, mantenimiento, proveedores, garantías, compras, despensa, inventario, documentos y vencimientos. |
| Estilo & Cuidado Personal | Belleza, piel, cabello, productos, guardarropa, outfits, compras, packing e imagen ante cambios corporales. |
| Seguridad & Viajes | Modo cita, regreso, viaje sola, check-ins, contactos confiables, documentos y preparación. |
| Metas & Proyectos | Deseo → viabilidad → plan → dinero → calendario → acciones → seguimiento. |
| Executive Layer | Mail, calendar, tasks, contacts, documents, follow-ups, summaries, @bemara.me y LENA Executive. |
| Community (futuro) | Matching contextual, tribus, actividades IRL; feature flag apagada en lanzamiento. |

## 9. Especificación por dominio

Cada dominio debe aportar valor real por sí mismo y, al mismo tiempo, alimentar el contexto transversal de BEMARA. No se construirán versiones “de muestra” con cards vacías. Cada dominio que entre a producción debe contar con al menos un flujo end-to-end útil, una integración con LENA y una conexión transversal.

### 9.1 Claridad / Orquestación

Es la capa que convierte la complejidad en prioridad. No es una “pantalla de KPIs”. Resume qué merece atención y qué puede resolver BEMARA.

- Morning Brief y Weekly Outlook opcionales, personalizados y no obligatorios.
- “Hoy importa”: máximo de señales prioritarias, no una lista infinita.
- Resumen de pendientes, capacidad, pagos, compromisos, bienestar y seguimientos.
- LENA puede decir: “Tienes cinco cosas que requieren atención; dos puedo resolverlas yo”.
- Cierre del día opcional: qué quedó abierto y qué puede esperar.
- La prioridad se calcula con urgencia, impacto, contexto, preferencia y saturación.

### 9.2 Cuerpo & Salud

> **Nota / Regla:** Ejemplo de insight correcto: “Cuatro de los últimos cinco episodios que registraste coincidieron con menos sueño. No puedo determinar la causa; si quieres, preparo este patrón para tu próxima consulta.”

El centro es el cuerpo completo, no el ciclo. El sistema sólo presenta subdominios corporales pertinentes a la realidad declarada de la usuaria.

- Tracking flexible de sueño, energía, dolor, migraña, digestión, piel, cabello, libido, peso/composición si desea, fuerza, movimiento, síntomas libres y medicación/estudios registrados.
- Salud femenina: ciclo, anticoncepción, fertilidad, embarazo, postpartum, lactancia, perimenopausia, menopausia y postmenopausia cuando correspondan.
- Wearables y fuentes externas siempre identifican origen del dato.
- LENA busca patrones longitudinales y usa lenguaje de asociación: “coincidió con”, nunca causalidad automática.
- Health Passport: resumen configurable para llevar a consulta, generado por la usuaria, no diagnóstico.
- Recordatorios de estudios, medicamentos registrados y citas, siempre con controles y consentimiento.
- No prescribir, no diagnosticar, no declarar una enfermedad, no sustituir profesionales.

### 9.3 Mente & Emociones

BEMARA debe reconocer que tristeza, duelo, cansancio, irritabilidad o soledad no son automáticamente patologías. LENA observa, escucha, organiza y deriva cuando corresponde.

- Registro por conversación, voz, journaling y check-ins mínimos; no depender de emojis o scores infantiles.
- Modos explícitos: Escúchame / Ayúdame a entenderlo / Dame perspectiva / Necesito decidir / Ayúdame a actuar / No guardes esto.
- Patrones: sueño + carga + relaciones + trabajo + cuerpo + actividad, con explicaciones transparentes.
- Conversational invitation: “¿Platicamos? Hay algo de estas últimas semanas que me gustaría revisar contigo.”
- Cuando un cambio sostenido merece atención, describir señales sin diagnosticar y recomendar apoyo profesional de forma clara y no alarmista.
- Safety escalation separada para crisis o señales de riesgo serio.

### 9.4 Dinero & Independencia

BEMARA funciona como CFO personal orientado a claridad y autonomía, no como banco, intermediario, asesor de inversión o prestamista.

- Ingresos, gastos, categorías, presupuestos flexibles, deudas, tarjetas, suscripciones, ahorro, metas, patrimonio, seguros y retiro.
- Captura manual, por foto/recibo, CSV y reglas; conexión bancaria se incorpora después mediante adaptador.
- Escenarios: “¿Puedo dejar este trabajo?”, “¿Puedo vivir sola?”, “¿Qué pasa si tengo un bebé?”, “¿Cuánto puedo gastar en este viaje?”.
- Plan B / Independence: meses de autonomía, liquidez, gastos indispensables y escenarios de separación, desempleo, viudez o cuidado familiar.
- Forecast de flujo y alertas de desvío con explicación.
- No ejecutar inversiones ni transferencias en lanzamiento; no dar recomendaciones financieras reguladas.

### 9.5 Tiempo & Mental Load Intelligence

Este dominio modela no sólo tareas, sino responsabilidades, seguimiento, decisiones y carga invisible. La pregunta de producto es: “¿Qué te puedo quitar de encima?”

- Calendarios personal, trabajo, familia y cuidado; vista unificada por permisos.
- Tasks con responsable, contexto, dependencia, fecha, esfuerzo y origen.
- Capacity Intelligence: no llenar todos los huecos libres; estimar carga humana real.
- Responsibility graph: qué sostiene ella, para quién y qué podría delegarse.
- Extraer tareas/eventos de emails, PDFs, fotos, avisos escolares y documentos.
- Delegar, reprogramar, agrupar, recordar a responsables y automatizar dentro de reglas autorizadas.
- Mental Load Forecast para semanas futuras.

### 9.6 Familia & Caregiving

Parte desde ella y su relación con las personas, no desde una app de bebé o un family organizer genérico.

- Hijos: escuela, salud, actividades, permisos, documentos, pagos y eventos, adaptado a edad.
- Coparenting y familia ensamblada cuando aplique.
- Caregiving de padres/personas mayores: citas, medicamentos registrados, estudios, documentos, hermanos responsables, gastos y transportes.
- Medir el efecto del cuidado sobre la propia mujer: tiempo, dinero, descanso y carga.
- Mascotas: salud, documentos, gastos y responsabilidades cuando sean parte relevante de su vida.
- La persona relacionada es entidad del Life Graph, no texto suelto.

### 9.7 Relaciones, Dating, Amistades & Sexualidad

BEMARA ayuda a la usuaria a comprender sus propios patrones y necesidades. No etiqueta ni diagnostica a terceros.

- Pareja: temas recurrentes, acuerdos, comunicación, límites, distribución de responsabilidades, decisiones e intimidad.
- Dating: criterios declarados, límites, seguridad, reflexión posterior a citas y coherencia con lo que ella dice buscar.
- Amistades/vida social: seguimiento de conexiones importantes y, con Community, matching contextual e IRL.
- Sexualidad: libido, satisfacción, dolor, intimidad, sueño, estrés, medicación registrada, cambios corporales y relación.
- LENA puede preparar conversaciones; nunca concluir “es narcisista”, “déjalo” o hacer diagnósticos de personalidad de terceros.

### 9.8 Carrera, Aprendizaje & Emprendimiento

La carrera se conecta con dinero, tiempo, familia, salud y metas; BEMARA conserva historial de logros y decisiones.

- CV, logros, proyectos, evaluaciones, salario, entrevistas, negociación, ofertas y objetivos.
- Comparar ofertas usando compensación, traslado, flexibilidad, cuidado, tiempo y metas personales.
- Regreso laboral tras maternidad u otras pausas.
- Emprendimiento: perspectiva personal de la dueña, sin convertirse en ERP/CRM empresarial.
- Bilingual Mode: práctica de inglés sobre situaciones reales (entrevistas, correos, reuniones) con LENA.
- Reinvención profesional después de transiciones vitales.

### 9.9 Casa & Vida Administrativa

El objetivo es reducir administración doméstica, no crear un ERP del hogar.

- Servicios, pagos, mantenimiento, proveedores, garantías, inventario útil, compras y despensa.
- Coste/historial de reparaciones para decisiones de reemplazo.
- Documentos de casa y familia relacionados con entidades del Life Graph.
- Compras y supermercado conectados con presupuesto, nutrición, familia y tiempo.

### 9.10 Nutrición, Movimiento y Sueño

Aunque forman parte del dominio corporal, se tratan como capacidades profundas por su frecuencia de uso.

- Nutrición: foto/voz, alimentos, objetivos, familia, restricciones, presupuesto, despensa, menú, lista y restaurantes.
- Ejemplo de alto valor: “Somos cuatro, tengo $1,500, esto hay en casa y no tengo tiempo; resuélveme las cenas.”
- Movimiento: fuerza, cardio, movilidad, recuperación, lesiones registradas, energía, agenda y objetivos.
- Sueño: duración/calidad, rutinas y correlaciones con actividad, emociones, alimentación y contexto.
- No obsesionar con calorías o scores; priorizar tendencias y decisiones útiles.

### 9.11 Estilo, Belleza e Imagen

No se trata de vender productos. El módulo ayuda a gestionar rutina, identidad e imagen en distintas etapas y cambios corporales.

- Piel/cabello: productos, rutina, inventario, gasto, resultados percibidos y fotos opcionales.
- Guardarropa: piezas, outfits, clima, agenda, cost-per-wear, packing y compras.
- Evitar duplicados: “ya tienes dos productos con la misma función”.
- Acompañar cambios corporales después de embarazo, menopausia, variaciones de peso, enfermedad o reinvención.

### 9.12 Documentos & Bóveda Personal

BEMARA no es un archivo pasivo. Lee, clasifica, relaciona y convierte documentos en acciones.

- INE/ID, pasaportes, licencias, visas, pólizas, contratos, escrituras, facturas, garantías, recetas, estudios y documentos familiares autorizados.
- Pipeline: captura → extracción → clasificación → metadata → entidades → fechas → vencimientos → Life Graph → acción.
- Búsqueda semántica: “¿Cuándo fue mi último estudio?” o “¿sigue vigente esta garantía?”.
- Compartición temporal/selectiva de reportes o documentos; nunca acceso global por defecto.

### 9.13 Seguridad & Viajes

Seguridad debe ayudar sin convertirse en vigilancia de pareja/familia.

- Modo cita, regreso a casa, viaje sola y actividad sola.
- Check-in programado, ETA, contacto confiable y escalamiento configurado por la usuaria.
- Bóveda de emergencia con información seleccionada.
- Viajes: presupuesto, agenda, documentos, packing, salud y seguridad conectados.
- Ubicación sólo cuando sea necesaria y con permisos explícitos.

### 9.14 Metas, Proyectos, Duelo & Reinvención

BEMARA convierte intención en planes realistas basados en la vida completa de la usuaria, y reconoce que no toda etapa necesita optimización.

- Metas: comprar casa, estudiar, viajar, correr, emprender, cambiar trabajo, salir de deudas, ampliar vida social, etc.
- Motor: deseo → viabilidad → plan → dinero → calendario → acciones → seguimiento.
- Duelo: muerte, pérdida gestacional, infertilidad, divorcio, mascota, salud, trabajo o identidad/etapa; nunca gamificar.
- Reinvención: ayudar a rediseñar vida social, trabajo, dinero, salud, imagen y propósito después de cambios importantes.

## 10. LENA: inteligencia femenina de BEMARA

LENA es una sola presencia para la usuaria. No existen múltiples personajes visibles. Internamente BEMARA puede usar skills/agentes especializados, pero LENA conserva continuidad de voz, memoria y relación.

LENA es IA y nunca finge ser humana, terapeuta, doctora o asesora financiera. Su personalidad es contemporánea, cálida, clara, adulta, con criterio, cero condescendencia y capacidad de ser directa cuando el contexto lo requiera.

| Capacidad | Qué significa |
|---|---|
| Memoria | Recuerda sólo lo autorizado; editable y borrable. |
| Contexto | Comprende etapa, personas, prioridades y situación actual. |
| Relacional | Cruza dominios: dinero, salud, tiempo, familia, etc. |
| Longitudinal | Compara meses/años y cambios en el tiempo. |
| Predictiva | Anticipa tendencias razonables con modelos apropiados. |
| Proactiva | Puede iniciar una conversación o propuesta útil. |
| Ejecutora | Agenda, prepara, organiza, delega o realiza acciones autorizadas. |
| Simuladora | Responde “qué pasa si…” con datos de la usuaria. |
| Protectora | Reconoce límites y deriva a ayuda humana cuando corresponde. |
| Adaptativa | Cambia tono, módulos y prioridades conforme cambia la mujer. |

### 10.1 Modos de conversación

- Escúchame: prioriza contención y preguntas mínimas; no intenta arreglar todo.
- Ayúdame a entenderlo: ordena hechos, emociones y contexto.
- Dame perspectiva: ofrece otras lecturas sin imponer una conclusión.
- Necesito decidir: estructura opciones, consecuencias y valores de la usuaria.
- Ayúdame a actuar: crea plan y propone/ejecuta acciones.
- No guardes esto: conversación efímera; no entra a memoria personal.

### 10.2 Agentes/skills internos de LENA

Skills sugeridos: Health, Emotional, Finance, Planning, Mental Load, Family/Care, Relationships, Nutrition, Documents, Career, Safety, Mail/Executive y Research. Son componentes técnicos, no personalidades visibles.

El LENA Orchestrator decide qué contexto recuperar, qué skill llamar, qué herramienta ejecutar, qué permiso se necesita y si una acción requiere confirmación.

## 11. BEMARA Executive Layer

Capa transversal que hace que BEMARA no sólo comprenda la vida, sino que ayude a operarla. Une Mail + Calendar + Tasks + Contacts + Documents + Finance + Life Graph + Notifications.

- Resumen ejecutivo personal de lo importante.
- Preparar respuestas, seguimientos y reuniones.
- Detectar compromisos en emails/documentos y convertirlos en acciones.
- Mantener “waiting for”: cosas que terceros prometieron y siguen pendientes.
- Organizar agenda con capacidad real.
- Encontrar información en historial y documentos.
- Crear drafts, planes, listas, checklists y recordatorios.
- Niveles de autonomía: sugerir → preparar → ejecutar dentro de reglas autorizadas.

## 12. BEMARA Smart Mail y @bemara.me

> **Nota / Regla:** Proveedor V1 sugerido: Resend para inbound/outbound y webhooks, con capa propia BEMARA Mail Engine. No exponer dependencia al frontend.

BEMARA podrá ofrecer una dirección personal @bemara.me como beneficio de plan premium/Intelligence o add-on. La decisión final de precio se toma después del análisis comercial; técnicamente debe existir como entitlement configurable.

La propuesta no es competir con Gmail por almacenamiento. Es “un correo que entiende tu vida”. La usuaria también podrá conectar Gmail/Outlook existentes mediante OAuth cuando esas integraciones se habiliten.

- Dirección tipo usuario@bemara.me, sujeta a disponibilidad y reglas anti-abuso.
- Smart Inbox: Necesita acción / Esperando respuesta / Dinero / Salud / Familia / Trabajo / Viajes / Documentos / Informativo.
- Email → evento/tarea/pago/documento/contacto/seguimiento/memoria estructurada, siempre según permisos.
- LENA redacta, traduce, explica intención y prepara respuestas en español o inglés.
- Follow-up Intelligence: “Dijeron que te enviarían esto el martes y aún no llegó”.
- No marketing masivo desde direcciones personales. Rate limits y reputación obligatorios.
- Sistema/notifications usan subdominio separado (ej. notify.bemara.me) para proteger reputación del correo personal.
- No reciclar de inmediato direcciones antiguas de usuarias; políticas de reserva y seguridad para evitar recepción de correo ajeno.

## 13. Notification Intelligence

Las notificaciones de BEMARA no son recordatorios genéricos. Cada una debe tener contexto, prioridad y una acción útil. El sistema aprende cuándo no interrumpir.

- Canales: push móvil, in-app inbox, email/digest, acciones de calendario; SMS/WhatsApp sólo si se decide posteriormente.
- Prioridad: Critical / Important / Contextual / Gentle / Digest-only.
- Quiet Intelligence: horarios, sueño, trabajo, fines de semana, vacaciones y temas que sí pueden romper silencio.
- Acciones rápidas desde push: confirmar, posponer, reprogramar, delegar, marcar pagado, abrir LENA.
- No bombardear. BEMARA debe reducir carga, no crear otra.

| Tipo | Ejemplo de intención | Comportamiento |
|---|---|---|
| Reminder | “Tu póliza vence en 21 días.” | Directo, accionable. |
| Insight | “Encontré un patrón que vale la pena mirar.” | Explica señales y contexto. |
| Conversation invitation | “¿Platicamos? Hay algo de estas últimas semanas que quiero revisar contigo.” | Invita sin alarmar ni diagnosticar. |
| Action proposal | “Puedo mover tres pendientes para descargarte mañana.” | CTA para ejecutar. |
| Safety intervention | Señal de riesgo importante. | Cambia a protocolo de seguridad y recursos adecuados. |

## 14. Life Graph: núcleo de contexto

> **Nota / Regla:** Ejemplo: “mi mamá” debe ser una entidad relacionada con citas, documentos, responsabilidades, gastos y caregiving; no una cadena de texto perdida en notas.

El Life Graph representa entidades y relaciones de la vida. Es el fundamento para contexto, búsqueda, correlaciones y ejecución. No requiere una graph database en V1; puede modelarse sobre PostgreSQL con relaciones explícitas y temporalidad.

- Woman/User
- Person
- Relationship
- Event
- Task
- Responsibility
- Goal
- Project
- Place
- Routine
- Document
- Account
- FinancialEvent
- Bill
- Subscription
- HealthObservation
- Symptom
- MedicationRecord
- StudyRecord
- FoodEvent
- Activity
- SleepEvent
- EmotionObservation
- ConversationMemory
- Preference
- Consent
- Notification
- ExternalConnection

## 15. Datos longitudinales, memoria y RAG

BEMARA debe almacenar eventos con fecha, origen, contexto y permisos. La meta es poder reconstruir la película de la vida, no sólo el estado actual.

- Working Memory: contexto de conversación actual.
- Personal Memory: hechos autorizados para recordar.
- Structured Memory: información normalizada del Life Graph.
- Episodic Memory: eventos relevantes de vida.
- Preferences: estilo, prioridades y configuración.
- Sensitive Memory: controles y consentimiento adicional.
- RAG/semantic search: embeddings + pgvector para recuperar únicamente el contexto necesario.
- “Olvida esto” debe ejecutar borrado real en las capas correspondientes, sujeto a retención legal/técnica documentada.

## 16. Big Data, correlaciones y predicción

BEMARA se diseña para predicción desde el inicio, pero no se finge Big Data antes de tenerlo. El orden correcto es Personal Baseline → modelos longitudinales → cohortes anonimizadas → Population Intelligence cuando exista volumen y consentimiento.

- Fórmula de producto: Datos → Patrón → Predicción → Explicación → Acción.
- Mostrar confianza/incertidumbre cuando sea relevante.
- Correlación no implica causalidad.
- Predicción de bienestar no equivale a diagnóstico médico.
- Las decisiones que puedan afectar significativamente derechos/intereses no deben descansar de forma opaca en automatización sin controles.

| Capa | Uso |
|---|---|
| Estadística | Baselines, tendencias, dispersión, correlaciones. |
| Time series | Cambios y patrones temporales. |
| ML | Modelos predictivos cuando el dataset y validación lo justifiquen. |
| Population models | Comparación anónima por cohortes, sólo con masa crítica y privacidad. |
| LLM reasoning | Explicar resultados, contextualizar y proponer acciones; no inventar la predicción. |

## 17. Bilingual Mode / aprendizaje contextual

BEMARA es bilingüe desde arquitectura: es-MX y en-US en lanzamiento. El modo bilingüe es opcional y puede ayudar a la usuaria a aprender inglés dentro de situaciones reales de su vida.

No se duplicará toda la UI permanentemente. El segundo idioma aparece de forma contextual: labels secundarios opcionales, tap-to-translate, explicaciones, práctica con LENA y corrección suave si la usuaria la pide.

- LENA puede conversar y cambiar entre español/inglés en la misma sesión.
- Puede preparar emails, entrevistas, reuniones y mensajes en ambos idiomas.
- En salud, seguridad, consentimiento y legal se prioriza comprensión absoluta en el idioma principal.
- Todo texto de interfaz usa i18n keys; prohibido hardcodear cadenas dispersas.

## 18. Privacidad, consentimiento y marco legal

BEMARA tratará información altamente sensible. Privacidad no es un checkbox legal: es parte del producto. México es el mercado inicial y el diseño deberá cumplir con la LFPDPPP vigente, incluyendo datos sensibles, consentimiento, derechos ARCO, transferencias y tratamiento automatizado.

Antes de producción, aviso de privacidad, términos, consentimientos y textos de seguridad deberán revisarse jurídicamente. El desarrollo debe dejar trazabilidad y controles para poder cumplirlos.

- Consentimiento granular por dominio e integración.
- Consentimiento expreso cuando corresponda a datos sensibles.
- Privacy Center, Consent Center, Memory Center y Devices.
- Acceso, rectificación, cancelación y oposición (ARCO).
- Exportación y borrado con workflow auditable.
- No vender datos personales ni usar datos íntimos para publicidad comportamental.
- No usar contenido de la usuaria para entrenar modelos propios o de terceros por defecto.
- Transferencias internacionales y subprocesadores claramente documentados.
- Minimización: recolectar sólo lo necesario para una función clara.
- Explicabilidad y posibilidad de oposición/ajuste en tratamientos automatizados relevantes.

## 19. Safety: límites médicos, psicológicos y financieros

- BEMARA informa, organiza, correlaciona y acompaña; no diagnostica ni prescribe.
- LENA no sustituye ginecóloga, psicóloga, psiquiatra, nutrióloga, abogada o asesora financiera.
- No afirmar “tienes depresión”, “tienes X enfermedad” o equivalentes sin un flujo clínico validado que no existe en V1.
- Puede describir cambios sostenidos y recomendar acercarse a un profesional.
- No etiquetar a terceros con diagnósticos psicológicos.
- No ejecutar inversiones, créditos o transferencias financieras en V1.
- Acciones irreversibles o sensibles requieren confirmación humana.
- Safety Engine y country resource registry para crisis, violencia y emergencias.
- No contactar terceros automáticamente sin autorización explícita o obligación legal aplicable.

## 20. Arquitectura técnica obligatoria

> **Nota / Regla:** No crear microservicios por moda. Modular monolith + workers primero; separar servicios sólo por necesidad real de escala, seguridad o disponibilidad.

| Capa | Decisión |
|---|---|
| Monorepo | pnpm + Turborepo; TypeScript end-to-end. |
| Web/PWA + sitio público | Next.js + React + TypeScript, PWA, SSR/SEO para sitio público. |
| Mobile | React Native + Expo + TypeScript; Expo Router; iOS + Android. |
| Operations | Next.js + TypeScript, app separada. |
| Backend API | Node.js + NestJS + TypeScript, modular monolith inicial. |
| Database | PostgreSQL administrado con Supabase; RLS obligatorio. |
| ORM/migrations | Drizzle ORM + SQL migrations; DB remains portable PostgreSQL. |
| Vector search | pgvector. |
| Auth | Supabase Auth; email/password + Apple/Google; sesiones seguras. |
| Storage | Buckets privados; acceso temporal; abstracción para migración. |
| Jobs | Workers + cola Postgres (pg-boss) para jobs, schedules y retries. |
| AI Gateway | Capa propia; OpenAI primary, Anthropic fallback/specialization. |
| Voice | OpenAI Realtime/audio through AI Gateway. |
| Mail | Resend + BEMARA Mail Engine; inbound/outbound/webhooks. |
| Push | Expo Notifications → APNs/FCM; lógica propia de prioridad. |
| Payments web MX | Conekta mediante Payment Adapter. |
| Payments mobile | Apple In-App Purchase + Google Play Billing. |
| Entitlements | Motor propio independiente del canal de pago. |
| Analytics | First-party product events + PostHog sólo con allowlist no sensible. |
| Errors | Sentry con PII scrubbing; jamás request bodies sensibles. |
| Web deploy default | Netlify; mantener compatibilidad de build. |
| API/workers deploy default | Railway; contenedores/Node portables. |
| Mobile build/release | Expo EAS + App Store Connect + Play Console. |
| DNS | Cloudflare. |

### 20.1 Repositorio propuesto

Estructura de referencia. Codex puede ajustar nombres internos sólo si conserva separación de responsabilidades y no crea nuevas superficies.

- apps/web — sitio público + BEMARA Personal/PWA
- apps/mobile — iOS/Android
- apps/operations — centro interno
- apps/api — NestJS API modular
- apps/workers — jobs y automatizaciones
- packages/design-tokens — colores, tipografía, spacing, motion
- packages/ui-web — primitives y componentes BEMARA web
- packages/ui-mobile — primitives y componentes BEMARA mobile
- packages/domain — tipos/contratos de negocio
- packages/i18n — es-MX/en-US
- packages/validation — schemas compartidos
- packages/sdk — cliente tipado
- packages/safety — políticas y contracts
- packages/config — feature flags y configuración no secreta

## 21. Arquitectura de seguridad

- RLS por usuario/tenant personal; Operations no puede saltarse controles sin permisos explícitos y auditados.
- Cifrado en tránsito y en reposo; considerar envelope encryption para campos/objetos especialmente sensibles.
- Secrets sólo en secret manager/env del runtime; nunca git ni frontend.
- OAuth tokens cifrados y revocables.
- Signed URLs de corta duración para documentos.
- Audit log para cambios de consentimiento, exportaciones, borrados, acciones de LENA y accesos internos sensibles.
- Session/device management; biometría/local secure storage en mobile.
- Rate limiting, abuse protection, CSP, CSRF donde aplique, sanitización y validation en API.
- Data classification y redaction antes de logs/observability.
- Security review antes de cualquier feature clínica, bancaria o comunitaria.

## 22. Pagos, planes y entitlements

No hardcodear precios. La arquitectura comercial debe permitir cambiar precios, periodos, trials y límites sin redeploy de lógica de producto.

- Planes conceptuales: Free / Personal / Intelligence.
- No vender “6 módulos vs 8 módulos”. Todos los dominios pertenecen a la plataforma; el pricing se basa en profundidad/capacidad de inteligencia, integraciones, automatización y consumo.
- Intelligence puede incluir Smart Mail/@bemara.me, predicción avanzada, mayor voz, automatizaciones e integraciones; precio final pendiente.
- Mensual y anual; pricing final se definirá con scouting y unit economics.
- Conekta para web México por menor tarifa base actual; adapter preparado para Stripe/internacional.
- En apps, cumplir políticas actuales de Apple/Google para suscripciones digitales.
- Entitlement Engine unifica Conekta, Apple y Google y evita pagos duplicados.

## 23. Community y Clinical: feature flags futuros

- community.enabled = false en lanzamiento.
- Activación de Community depende de WAU, densidad geográfica, representación de etapas y actividad; no sólo registros acumulados.
- Community será parte de BEMARA Mobile/PWA, no app separada.
- clinical.enabled = false en lanzamiento.
- No construir portales clínicos, agendas de doctores ni teleconsulta ahora.
- La arquitectura debe permitir Health Passport y compartición selectiva sin convertir BEMARA en proveedor médico.

## 24. Integraciones: orden y política

| Integración | Lanzamiento | Notas |
|---|---|---|
| Cámara/archivos | Sí | Captura de documentos, comida, recibos. |
| Push/APNs/FCM | Sí | Notification Intelligence. |
| Calendario del dispositivo/Google | Sí o fase temprana | OAuth y permisos mínimos. |
| Gmail/Outlook | Fase Executive | Conexión opcional; BEMARA Mail propio puede salir antes. |
| Apple Health/Health Connect | Fase temprana | Sólo datos autorizados y útiles. |
| Conekta/IAP/Play Billing | Antes de monetización | Entitlements unificados. |
| Banca agregada | Después | Adapter listo; proveedor se decide con costos/legal. |
| WhatsApp/SMS | Después | Sólo si aporta valor y unit economics. |
| Community/IRL | Después | Feature flag. |

## 25. Diseño de gráficas e inteligencia visual

- No dashboards genéricos. Cada visualización responde una pregunta personal.
- Cruces permitidos: sueño × ánimo, carga × energía, dinero × estrés, actividad × bienestar, agenda × capacidad, etc.
- Incluir ventanas temporales, fuente de datos y explicación de interpretación.
- No usar rainbow charts. Usar paleta BEMARA, contraste y accesibilidad.
- Web: preferir primitives custom/visx; no estilos default de librerías.
- Mobile: visualizaciones optimizadas, no miniatura ilegible del desktop.
- Evitar scores arbitrarios. Cuando exista índice, explicar composición y límites.

## 26. Analytics, observabilidad y costos

- Product analytics separado de intimate life data.
- No enviar síntomas, sexualidad, conversaciones, contenido de documentos o cifras financieras a analytics de terceros.
- Eventos permitidos: pantalla, feature used, success/failure, performance, conversion, retention, plan.
- Telemetry de AI: modelo, tokens, latencia, costo, tool calls, error, sin almacenar prompt sensible en logs.
- Cost per active user / per plan / per feature como métricas internas.
- Dash Operations debe mostrar salud de proveedores, colas, jobs, push, mail y AI.
- Alertas de costo anómalo y rate limits por plan.

## 27. Coding standards y calidad

- TypeScript strict; no any salvo excepción documentada.
- Contratos con Zod/valibot o schemas tipados compartidos.
- ESLint/Prettier; commits claros; conventional commits opcional.
- No secretos, no mocks en producción, no TODO críticos sin ticket.
- Unit tests para dominio/safety/entitlements; integration tests API; E2E para flujos críticos.
- Mobile/device QA real para cámara, push, biometría y background.
- Accessibility: WCAG AA como objetivo web; VoiceOver/TalkBack, targets táctiles, reduced motion y font scaling.
- Performance budgets para PWA y mobile; lazy loading y virtualización donde aplique.

## 28. Fases de desarrollo

> **Nota / Regla:** Las fases son orden de ingeniería, no permiso para lanzar un producto genérico. Release candidato debe representar el sistema BEMARA, no un dashboard con seis cards.

| Fase | Objetivo | Salida mínima |
|---|---|---|
| 0 — Foundation | Monorepo, CI, envs, design tokens, DB, auth, RLS, i18n, observability. | Base estable y deployable. |
| 1 — Identity & Adaptive Core | Onboarding, profile/context, Home adaptativo, consent/memory centers, shell PWA/mobile. | BEMARA reconoce a la usuaria y se configura. |
| 2 — LENA Core | AI Gateway, memory, RAG, voice, tools, safety, explainability. | LENA conversa, recuerda y usa herramientas básicas. |
| 3 — Life Domains | Cuerpo, Mente, Dinero, Tiempo/Carga, Familia/Care, Relaciones, Carrera, Casa/Admin, Metas. | Cada dominio con flujo end-to-end útil y conexión transversal. |
| 4 — Executive | Calendar/tasks/doc intelligence, Smart Mail, follow-up, Notification Intelligence. | LENA ayuda a operar la vida. |
| 5 — Personal Intelligence | Personal baselines, correlations, forecasts, “what if”, Mental Load Forecast. | Insights y predicciones personales explicables. |
| 6 — Monetization & Release | Entitlements, Conekta, IAP/Play, hardening, privacy/legal screens, store readiness. | Launch candidate México. |
| 7 — Post-launch Intelligence | Population data foundation, improved ML, bank/wearable connectors. | Más personalización y Big Data gradual. |
| 8 — Community | Activar sólo con masa crítica. | Matching/contextual community e IRL. |

## 29. Criterios de aceptación de una capability

- Resuelve un problema real, no existe sólo por completar una lista.
- Tiene al menos un flujo completo de principio a fin.
- LENA puede entender o actuar sobre ella.
- Se conecta al Life Graph o justifica por qué no.
- Tiene permisos/consentimiento definidos.
- Tiene estado vacío, error, loading y offline/poor network razonables.
- Tiene telemetría no sensible.
- Cumple accesibilidad y bilingüe.
- No introduce estética SaaS genérica.
- No hace promesas clínicas/financieras no permitidas.
- Cuenta con tests de los caminos críticos.

## 30. Prohibiciones explícitas para Codex

- No inventar portales, roles, apps, módulos o workflows fuera de este documento.
- No sustituir React Native/Expo por wrapper web para ahorrar tiempo.
- No convertir PWA consumer en admin dashboard.
- No usar sidebar persistente tipo CRM como navegación principal de la usuaria.
- No crear Home de KPIs genéricos.
- No crear 20 chatbots; la usuaria sólo conoce a LENA.
- No usar IA directamente desde frontend; siempre AI Gateway.
- No almacenar memoria de BEMARA dentro de un proveedor de IA como fuente de verdad.
- No hardcodear textos, precios, model IDs o secretos.
- No inferir silenciosamente salud, orientación, identidad, embarazo o atributos sensibles.
- No crear “diagnósticos” a partir de LLMs.
- No habilitar Community o Clinical sin autorización.
- No usar datos reales sensibles para fixtures o demos.
- No introducir nuevas dependencias mayores sin justificación técnica.

## 31. Configuración externa pendiente — se realizará con la propietaria después

> **Nota / Regla:** Nunca solicitar o guardar secretos dentro del repositorio. Crear .env.example sin valores sensibles y un documento de setup.

Codex debe preparar adapters, variables de entorno y documentación, pero no requiere claves reales para iniciar. Se usarán valores de desarrollo/test y providers simulados cuando sea necesario.

- DNS de bemara.me y subdominios.
- Supabase project + Auth providers.
- OpenAI API y controles de retención.
- Anthropic API fallback.
- Resend domain/DKIM/SPF/DMARC.
- Conekta merchant/test/live.
- Apple Developer / App Store Connect / Sign in with Apple / IAP.
- Google Play Console / Google Sign-In / Play Billing.
- Expo EAS credentials.
- Netlify + Railway environments.
- Sentry/PostHog con políticas de scrubbing.
- Conectores Google/Microsoft y wearables cuando entren a fase.

## 32. Decisiones comerciales pendientes

Estas decisiones deben modelarse como configuración y entitlements, no como constantes en el código.

- Precios Free / Personal / Intelligence.
- Trial y descuento anual.
- Límites de voz, acciones IA, mail y automatizaciones por plan.
- Si @bemara.me va incluido en Intelligence o como add-on.
- Proveedor de conexión bancaria y su momento de entrada.
- Umbral de activación de Community.
- Mercados posteriores a México y localización legal.

## 33. Referencias y restricciones externas vigentes al corte

Estas referencias justifican decisiones actuales de privacidad/pagos. Deben volver a revisarse antes de lanzamiento porque políticas y tarifas pueden cambiar.

- Cámara de Diputados — Ley Federal de Protección de Datos Personales en Posesión de los Particulares, texto vigente con última reforma DOF 14-11-2025: https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf
- Apple — App Review Guidelines, sección 3.1 Payments: https://developer.apple.com/app-store/review/guidelines/
- Google Play — Payments policy: https://support.google.com/googleplay/android-developer/answer/10281818
- Conekta — pricing México: https://www.conekta.com/pricing
- Stripe México — pricing y Billing: https://stripe.com/mx/pricing y https://stripe.com/mx/billing/pricing
- OpenAI — business data privacy / API training defaults: https://openai.com/business-data/ ; ZDR: https://openai.com/index/offering-zero-data-retention-for-frontier-models/
- Anthropic Privacy Center — commercial/API data training and retention: https://privacy.anthropic.com/en/articles/7996868-is-my-data-used-for-model-training y https://privacy.anthropic.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data
- Resend — transactional email pricing/capabilities: https://resend.com/pricing

## 34. Inicio inmediato para Codex

> **Nota / Regla:** BEMARA debe sentirse desde el primer release como una plataforma creada para una mujer completa, no como un software administrativo al que después se le pondrá “feminidad”.

Codex debe comenzar por Fase 0 y crear una base ejecutable, limpia y documentada. No debe intentar implementar los 14 dominios simultáneamente antes de tener Identity, Consent, Life Graph, AI Gateway, design system e i18n.

Primer objetivo concreto: monorepo operativo con web/PWA, mobile, operations, API, database/migrations, auth, design tokens, i18n, CI, env contracts y documentación de setup. Segundo objetivo: onboarding adaptativo + Home base + LENA Core + Memory/Consent. A partir de ahí, los dominios se incorporan siguiendo los contratos de este documento.

Cada entrega deberá incluir typecheck, lint, tests pertinentes, build, migraciones reproducibles, estado git limpio y QA visual real en web/mobile. No declarar una fase cerrada sólo porque compila.
