# La aventura de leer y contar

**Abrir e instalar la aplicación:** https://santivi73.github.io/la-aventura-leer-contar/

Abre este enlace en Chrome/Edge (PC o Android) o Safari (iPhone/iPad). Android y PC: Instalar aplicación. iPhone: Compartir → Añadir a pantalla de inicio. El progreso se guarda por dispositivo y navegador.

Aplicación educativa en español para lectura, comprensión y primeras matemáticas. PWA estática sin dependencias de red en ejecución. No recopila datos personales; guarda el progreso en localStorage del dispositivo.

## Abrir en el ordenador
Con Node.js instalado, ejecutar `npm start` en esta carpeta y abrir http://localhost:4173. No abrir `index.html` directamente: el service worker necesita HTTP local o HTTPS.

## Publicación e instalación
Publicar **todo el contenido de dist/** en un alojamiento estático HTTPS. Los enlaces son relativos y admiten subcarpetas. No usar una regla que devuelva HTML para JavaScript o el manifiesto. Servir .webmanifest como application/manifest+json y sw.js como JavaScript sin caché de servidor. El archivo _headers incluye recomendaciones compatibles con alojamientos que lo admiten.

Android: Chrome/Edge → menú → Instalar aplicación. iPhone/iPad: Safari → Compartir → Añadir a pantalla de inicio. Ordenador: icono de instalación de Chrome/Edge. El manifiesto solicita ventana independiente y usa iconos de 192/512 píxeles, incluido maskable. La instalación real depende del navegador y del dispositivo.

Esperar «Aventuras listas sin conexión» antes de desconectar. Todos los módulos, datos y dibujos se precargan juntos. La voz depende de SpeechSynthesis; se priorizan voces españolas locales y se muestra una alternativa escrita cuando no hay una voz disponible. Las referencias externas necesitan red.

## Contenido
9 cuentos originales, 27 preguntas, 9 secuencias de acontecimientos, 24 actividades de lenguaje, 36 retos de conteo, 18 sumas y 18 restas, ejemplos guiados y tabla 1–100.

## Verificación
`npm test` comprueba lógica educativa, progreso y datos. `npm run check` comprueba sintaxis y recursos PWA. Consultar docs/verification.md para las comprobaciones realizadas y sus límites.

## Mantenimiento
Al modificar un recurso, cambiar la versión de CACHE en dist/sw.js para preparar una nueva copia completa. No introducir dependencias remotas esenciales. No atribuir pronunciación correcta a la interacción de la niña. Los registros de lectura contienen observación adulta opcional y la comprensión se contabiliza por separado.

Los datos son locales a cada origen/navegador; el modo privado, el borrado del navegador o la desinstalación pueden eliminarlos. La aplicación avisa si no puede guardar. No hay sincronización ni cuentas infantiles.
