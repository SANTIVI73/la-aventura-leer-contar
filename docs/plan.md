# La aventura de leer y contar

## Diseño y alcance
PWA estática y sin dependencias externas en ejecución. Cuatro áreas: lectura, matemáticas, avances y familias. Lía acompaña una experiencia de bosque con una actividad por pantalla y apoyos opcionales. Todos los textos y retos se distribuyen con la aplicación. No se solicita identidad, micrófono ni servicios de análisis.

## Implementación
- Contenido original: 9 cuentos con 3 preguntas y secuencias; 24 actividades de lenguaje; 36 de conteo y 36 de cálculo. Revisión de respuestas, silabación y cantidades.
- Motor de actividades: lectura acompañada, vocabulario, comprensión, ordenación, manipulación táctil, tabla 100, recta y teclado.
- Persistencia local versionada de ajustes, intentos y actividad pendiente. Cinco dominios separados. La lectura no se califica por pulsar un botón.
- Dificultad sugerida basada en los cinco últimos intentos, errores y ayudas; elección familiar siempre disponible.
- Manifiesto independiente, iconos propios, precaché atómica, estado de descarga, guía de instalación, voces locales cuando existen y alternativa visible.
- Validar lógica y datos con Node, flujos con navegador, recuperación tras cierre y caché sin red. Documentar límites de pruebas físicas en Android/iPhone.

## Decisiones pedagógicas
Fuentes: IES Practice Guide 21; currículo de Lengua de segundo ciclo del Ministerio; DfE Mathematics programmes of study. No constituyen un aval de la aplicación. Adaptaciones al español y decisiones de duración, colores y progresión se describen por separado en Familias.
