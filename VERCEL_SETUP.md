# Configuração Vercel — Royal

O projeto usa **static export** (`output: 'export'`). O build gera a pasta `out/`.

Configuração via **vercel.json** (não precisa do dashboard):
- `buildCommand`: `npm run build`
- `outputDirectory`: `out`
- `framework`: `nextjs`

## Deploy via CLI

```bash
# 1. Login (uma vez)
npx vercel login

# 2. Link ao projeto (uma vez, na pasta do projeto)
npx vercel link

# 3. Deploy
npm run deploy          # produção
npm run deploy:preview  # preview
```

Se o site retorna **404**, ajuste no painel do Vercel:

## 0. Deployment Protection (causa comum de 404)
**Settings** → **Deployment Protection** (ou **Security**)
- Se **Standard Protection** ou **Vercel Authentication** estiver ativo, visitantes não logados recebem **404**
- Para produção pública: desative a proteção ou use **"None"** para Production
- Domínios customizados costumam ficar desprotegidos por padrão; subdomínios `*.vercel.app` podem estar protegidos

## 1. Framework Preset
**Settings** → **General** → **Framework Preset**  
Defina como **Next.js** (não deixe em "Other").

## 2. Root Directory
**Settings** → **General** → **Root Directory**  
Deixe **vazio** (o app está na raiz do repositório).

## 3. Build & Development Settings
**Settings** → **Build & Development Settings**
- **Build Command:** `npm run build` (ou deixe em branco para usar o padrão)
- **Output Directory:** deixe **vazio** (Next.js usa `.next` automaticamente)

## 4. Redeploy
Depois de alterar, faça **Redeploy** em **Deployments** → último deploy → **⋯** → **Redeploy**.
