# Manual del Usuario — Sitio Web "Turismo Local"

Este manual explica cómo **editar, actualizar y mantener** la página web turística desarrollada.

---

## 1️⃣ Introducción
El sitio fue creado con tecnologías 100% del lado del cliente (HTML, CSS y JavaScript).  
Todo el contenido editable se guarda en **archivos JSON**, lo que evita modificar directamente el código fuente.

---

## 2️⃣ Archivos principales

| Archivo | Descripción |
|----------|--------------|
| `index.html` | Estructura general de la página |
| `styles.css` | Estilos visuales del sitio |
| `app.js` | Carga los textos e imágenes dinámicamente |
| `content/textos.json` | Textos y descripciones de actividades, servicios y contacto |
| `content/publicidades.json` | Control de imágenes y videos de publicidades |
| `images/` | Carpeta con imágenes de actividades, servicios y publicidades |
| `videos/` | Carpeta con videos publicitarios |

---

## 3️⃣ Edición paso a paso

### A. Cambiar textos generales
1. Abre `content/textos.json`
2. Edita los valores entre comillas, por ejemplo:

```json
"titulo": "Turismo en la Costa Atlántica",
"descripcion": "Actividades, gastronomía y cultura junto al mar."
```

3. Guarda los cambios.

### B. Agregar actividades
Cada categoría (diarias, semanales, mensuales) tiene una lista de objetos con `titulo` y `descripcion`.

```json
"diarias": [
  {"titulo": "Paseo por el puerto", "descripcion": "Recorrido con guía local."}
]
```

Puedes añadir más elementos siguiendo el mismo formato.

### C. Modificar servicios
Se agrupan en secciones como “taxis”, “hoteles”, “bodegas”, etc.  
Ejemplo:

```json
"hoteles": [
  {"nombre": "Hotel del Sol", "telefono": "+598-9999-9999", "descripcion": "Vista panorámica al valle."}
]
```

### D. Publicidades (imágenes y videos)
1. Coloca los archivos en:
   - `/images/publicidades/` para imágenes
   - `/videos/` para videos
2. Abre `content/publicidades.json` y agrega:

```json
{
  "archivo": "nuevo_video.mp4",
  "titulo": "Promo Otoño",
  "poster": "imagen_poster.jpg",
  "link": "#"
}
```

---

## 4️⃣ Publicar cambios en GitHub Pages

1. Inicia sesión en tu cuenta de GitHub.  
2. Crea un nuevo repositorio y sube la carpeta completa del sitio.  
3. Activa **GitHub Pages** en la pestaña **Settings → Pages → Branch → main → /(root)**.  
4. Espera unos minutos y tu sitio estará disponible públicamente.  

Ejemplo de URL:
```
https://usuario.github.io/turismo-web/
```

---

## 5️⃣ Recomendaciones técnicas

- No cambies los nombres de las carpetas principales.  
- Evita espacios en los nombres de los archivos (usa `_` o `-`).  
- Siempre revisa que los archivos JSON sean válidos antes de subirlos.  
  Puedes verificarlo en https://jsonlint.com/

---

## 6️⃣ Créditos y Licencia

Proyecto educativo desarrollado con fines de enseñanza.  
Puedes modificarlo, compartirlo y adaptarlo libremente citando la fuente.

© 2025 — Turismo Local
