# GitHub Pages

Repositorio: https://github.com/SANTIVI73/la-aventura-leer-contar
Aplicación: https://santivi73.github.io/la-aventura-leer-contar/

El proyecto se mantiene en main. La rama gh-pages contiene exclusivamente el contenido de dist/ y un archivo .nojekyll. En Settings → Pages se usa Deploy from a branch → gh-pages → /(root). La web se sirve mediante HTTPS.

Para actualizar: ejecutar npm test y npm run check, copiar todo el contenido de dist/ a la rama gh-pages, conservar .nojekyll y publicar esa rama. Al cambiar recursos, incrementar la versión de CACHE en dist/sw.js. Revisar el resultado de pages build and deployment en Actions y abrir la web publicada.

La web y el código son públicos. No se publican credenciales, configuraciones privadas ni registros de progreso. El progreso de la aplicación se guarda únicamente en localStorage en el dispositivo y navegador usados. El cambio desde chatgpt.site a github.io no traslada automáticamente el progreso anterior.

Esperar «Aventuras listas sin conexión» antes de desconectar. La voz puede depender de una voz instalada o de conexión; las actividades escritas siguen disponibles. Las pruebas físicas de instalación en Android y iPhone deben completarse en esos dispositivos.