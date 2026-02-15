# Configuração Vercel — Royal

Se o site retorna **404**, ajuste no painel do Vercel:

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
