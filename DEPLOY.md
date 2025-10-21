# TalentoLab - Deploy en Vercel

## 🚀 Guía de Deploy

### Requisitos previos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio conectado a GitHub

### Pasos para Deploy

#### Opción 1: Deploy desde Vercel Dashboard

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Click en "Add New Project"
3. Importa el repositorio `MarViott/CloBrand`
4. Selecciona la branch `marisa`
5. Vercel detectará automáticamente que es un proyecto Vite
6. Configura las siguientes opciones (ya preconfiguradas en `vercel.json`):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
7. Click en "Deploy"

#### Opción 2: Deploy desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### ✅ Checklist de Preparación

- [x] `package.json` configurado con scripts de build
- [x] `vite.config.js` configurado
- [x] `vercel.json` creado con rewrites para SPA
- [x] Build funciona sin errores (`npm run build`)
- [x] `.gitignore` configurado correctamente
- [x] Código duplicado corregido en Header.jsx
- [x] Rutas de React Router configuradas

### 🔧 Configuración

El proyecto incluye `vercel.json` con:

- Rewrites para SPA (Single Page Application)
- Cache optimizado para assets estáticos
- Configuración de build automática

### 📦 Variables de Entorno

Si necesitas variables de entorno:

1. Ve a Project Settings en Vercel
2. Sección "Environment Variables"
3. Añade las variables necesarias con prefijo `VITE_`

### 🌐 Después del Deploy

Una vez desplegado, Vercel proporcionará:

- URL de producción: `https://tu-proyecto.vercel.app`
- URL de preview para cada commit
- Certificado SSL automático
- CDN global

### 📝 Notas

- Cada push a la branch `marisa` creará un deploy automático
- Los Pull Requests generan deploys de preview
- El sitio es totalmente responsivo y optimizado para móviles
