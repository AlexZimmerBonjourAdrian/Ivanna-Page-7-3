## Conversión a sitio estático y despliegue en Netlify

### Objetivo
Convertir la app Flask (que renderiza plantillas Jinja) en un sitio estático listo para publicar gratis en Netlify, sin romper la app existente ni su flujo de desarrollo local.

### Resumen de cambios
- Se añadió la dependencia Frozen-Flask al proyecto.
- Se creó el script `freeze.py` para “congelar” el sitio a HTML estático.
- Se creó `netlify.toml` para que Netlify publique la carpeta `build/` sin comando de build.
- Se ajustaron las rutas en `app.py` para que terminen en `/` y así generar `index.html` dentro de cada subcarpeta.
- Se generó la carpeta `build/` con todo el contenido estático listo para subir.

---

### Paso a paso realizado

1) Agregar Frozen-Flask a las dependencias

Archivo: `pyproject.toml`

```toml
[project]
dependencies = [
    "email-validator>=2.3.0",
    "flask>=3.1.2",
    "flask-sqlalchemy>=3.1.1",
    "gunicorn>=23.0.0",
    "psycopg2-binary>=2.9.10",
    "Frozen-Flask>=0.18",
]
```

Instalación (si la necesitas manualmente):

```bash
python -m pip install "Frozen-Flask>=0.18"
```

2) Crear el script de congelado

Archivo: `freeze.py`

```python
from app import app
from flask_frozen import Freezer


freezer = Freezer(app)


if __name__ == "__main__":
    freezer.freeze()
```

3) Configuración de Netlify

Archivo: `netlify.toml`

```toml
[build]
  publish = "build"
  command = ""
```

4) Ajuste de rutas en Flask (terminación con `/`)

Archivo: `app.py`

- `@app.route('/microtales/')`
- `@app.route('/story-formats/')`
- `@app.route('/interactive-guide/')`

Esto obliga a Frozen‑Flask a generar `microtales/index.html`, `story-formats/index.html` e `interactive-guide/index.html`, lo que evita enlaces rotos en hosting estático.

5) Generar el sitio estático

```bash
python freeze.py
```

Esto crea la carpeta `build/` con la estructura final:

```
build/
  index.html
  microtales/
    index.html
  story-formats/
    index.html
  interactive-guide/
    index.html
  static/
    css/style.css
    js/main.js
```

---

### Despliegue en Netlify

Opción A: Netlify Drop (rápido, sin Git)
1. Regenera si cambiaste algo: `python freeze.py`.
2. Abre `https://app.netlify.com/drop` y arrastra la carpeta `build/`.
3. Netlify te dará una URL pública. Puedes personalizar el subdominio.

Opción B: Con Git (recomendado para actualizaciones)
1. Sube el repo a GitHub/GitLab/Bitbucket.
2. En Netlify: Add new site → Import from Git.
3. Selecciona el repo. Netlify leerá `netlify.toml`.
   - Build command: vacío.
   - Publish directory: `build`.
4. Deploy. Para actualizar, vuelve a ejecutar `python freeze.py`, commit y push.

Previsualización local del estático

```bash
python -m http.server --directory build 5500
```

Abre `http://localhost:5500` en el navegador.

---

### Cómo actualizar el sitio
Cada vez que modifiques plantillas HTML o archivos en `static/`:
1. Ejecuta `python freeze.py`.
2. Sube nuevamente la carpeta `build/` (Drop), o commit/push (Git + Netlify).

---

### Solución de problemas
- Enlaces rotos o 404 en subpáginas: asegúrate de que las rutas de Flask terminen en `/` y de haber regenerado con `python freeze.py`.
- Cambios que no aparecen: fuerza recarga (Ctrl+F5) o prueba en ventana privada. Netlify y el navegador pueden cachear.
- Archivos estáticos (CSS/JS) sin cargar: confirmá que las rutas en el HTML sean absolutas (`/static/...`) y que `build/static/` exista.
- Dominio personalizado: tras asignarlo en Netlify, espera la propagación DNS (minutos a horas).

---

### Qué no se rompió y por qué
- No se modificaron las plantillas ni la lógica funcional; solo se añadieron herramientas de build estático y se ajustaron rutas para hosting.
- La app Flask sigue funcionando localmente (desarrollo). El estático es una salida adicional para producción en Netlify.

---

### Comandos clave
```bash
# Generar el estático
python freeze.py

# Previsualizar el estático
python -m http.server --directory build 5500
```

---

### Contacto/Notas
Si vas a alojar bajo un subpath (por ejemplo, `https://dominio.com/proyecto/`), avísame: adaptaré rutas o base URL para ese contexto.


