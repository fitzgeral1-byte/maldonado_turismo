#  Turismo Local del departamento de Maldonado  — Sitio Web para GitHub Pages

Este proyecto es una **página web turística responsive** desarrollada en **HTML, CSS y JavaScript puro**, sin necesidad de backend.  
El contenido se carga dinámicamente desde archivos JSON, lo que permite **editar textos, imágenes y videos sin tocar el HTML**.

---

## Cómo publicar en GitHub Pages

1. Crea un repositorio en tu cuenta de GitHub llamado, por ejemplo, `turismo-web`.
2. Sube **todos los archivos y carpetas** de este proyecto al repositorio.
3. En tu repositorio, ve a:
   - `Settings` → `Pages` → En la opción **Branch**, selecciona `main` (o `master`) y luego `/ (root)`.
4. Guarda los cambios.  
   En unos segundos/minutos, GitHub te mostrará la URL donde se publica tu web, por ejemplo:
   > https://tuusuario.github.io/turismo-web/

---

##  Estructura de Carpetas

```
turismo-web/
│── index.html           ← Página principal
│── styles.css           ← Estilos del sitio
│── app.js               ← Lógica JS (carga dinámica de JSON)
│
├── content/
│   ├── textos.json           ← Todos los textos del sitio
│   ├── publicidades.json     ← Imágenes/Vídeos de publicidad
│
├── images/
│   ├── actividades/          ← Imágenes de actividades
│   ├── servicios/            ← Imágenes de servicios
│   └── publicidades/         ← Imágenes de publicidades
│
└── videos/                   ← Videos de publicidades
```

---

##  Cómo editar el contenido

###  1. Editar textos generales
Abre el archivo `content/textos.json` con cualquier editor de texto (por ejemplo, Visual Studio Code, Notepad++ o incluso el editor online de GitHub).  
Ejemplo:

```json
"titulo": "Turismo en el Valle del Sol",
"descripcion": "Explora experiencias inolvidables entre montañas y viñedos.",
```

Puedes modificar:
- Título principal (`titulo`)
- Descripción (`descripcion`)
- Actividades (diarias, semanales, mensuales)
- Servicios (taxis, hoteles, bodegas, etc.)
- Contacto (email y teléfono)

###  2. Agregar o editar publicidades
Los datos de publicidad están en `content/publicidades.json`.  
Ejemplo:

```json
{
  "imagenes": [
    { "archivo": "promo_verano.jpg", "titulo": "Promo Verano", "link": "#" }
  ],
  "videos": [
    { "archivo": "bodega.mp4", "titulo": "Spot Bodega Sol", "poster": "placeholder.svg", "link": "#" }
  ]
}
```

- Coloca las imágenes en `/images/publicidades/`
- Coloca los videos en `/videos/`
- Solo necesitas agregar la referencia al archivo dentro de `publicidades.json`

###  3. Visualizar los cambios
- Guarda los archivos y sube los cambios a GitHub.
- La página se actualizará automáticamente en unos segundos en tu sitio de GitHub Pages

© 2025 Turismo Local del departamento de Maldonado. Desarrollado para fines comerciales.
