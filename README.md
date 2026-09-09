# Aula de Matemáticas — Blog/Aula Virtual (Astro + Decap CMS + Giscus)

## 1. Instalación local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321` para el sitio y `http://localhost:4321/admin` para el panel
(en local, Decap CMS usa un backend de prueba `test-repo`/`proxy`; el login real de
Git Gateway solo funciona una vez desplegado en Netlify).

## 2. Desplegar en Netlify (costo cero)

1. Sube este proyecto a un repositorio de GitHub.
2. En Netlify: **Add new site → Import an existing project** y selecciona el repo.
   Build command: `npm run build` — Publish directory: `dist`.
3. Ve a **Site configuration → Identity** y actívalo.
4. En Identity → **Registration**, pon "Invite only" (para que solo tú, el profesor,
   tengas acceso a `/admin`).
5. En Identity → **Services**, activa **Git Gateway**. Esto es lo que permite que
   Decap CMS haga commits en tu repo sin que expongas un token de GitHub.
6. En **Identity → Invite users**, invítate a ti mismo con tu correo.
7. Entra a `https://tu-sitio.netlify.app/admin`, confirma la invitación y ya puedes
   crear/editar explicaciones desde el panel.

## 3. Configurar Giscus (sistema de comentarios)

Elegí **Giscus** (ver justificación en la respuesta del chat). Pasos:

1. El repositorio de GitHub debe ser **público** y debe existir instalado en él
   la GitHub App **giscus**: https://github.com/apps/giscus (Install → selecciona el repo).
2. En GitHub, ve a **Settings → General → Features** del repo y activa **Discussions**.
3. Crea (o usa) una categoría de Discussions llamada, por ejemplo, `Comentarios-Blog`,
   y ponla como tipo **Announcement** — así solo el profesor (mantenedor del repo)
   puede abrir hilos nuevos, pero cualquier alumno autenticado con GitHub puede
   responder. Esto evita que se creen discusiones "sueltas" fuera de tus posts.
4. Ve a https://giscus.app, pega la URL de tu repo, y con `data-mapping="pathname"`
   configúralo para que cada URL de post (`/blog/tu-slug/`) tenga su propio hilo,
   generado automáticamente la primera vez que alguien comenta ahí.
5. Copia los 4 valores generados (`data-repo`, `data-repo-id`, `data-category`,
   `data-category-id`) y pégalos en `src/components/Comments.astro`.

**Moderación**: como dueño del repositorio, moderas desde la pestaña *Discussions*
de GitHub (editar, ocultar, bloquear o convertir en respuesta oficial). Los alumnos
se autentican con su cuenta de GitHub (ligera, gratuita, sin contraseñas nuevas).

## 4. Añadir contenido

- Manualmente: crea un archivo `.md` en `src/content/explicaciones/` con el
  frontmatter descrito en `src/content/config.ts`.
- Desde el panel: entra a `/admin`, clic en "Explicaciones de Matemáticas → New",
  completa los campos y publica (el flujo editorial crea un PR/borrador antes
  de mezclarse a `main`).
# Blog-Clases-Matematicas
# Blog-Clases-Matematicas
