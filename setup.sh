#!/bin/bash

# Criar estrutura de pastas
mkdir -p src/app/{api,dashboard,projetos}
mkdir -p src/components/{ui,providers}
mkdir -p src/lib
mkdir -p prisma
mkdir -p public/images

# Criar todos os arquivos
touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/globals.css
touch src/components/ui/{button,input,textarea,label,select,card,toast,toaster,use-toast}.tsx
touch src/components/providers/auth-provider.tsx
touch src/lib/utils.ts
touch src/app/projetos/novo/page.tsx
touch prisma/schema.prisma
touch {package.json,next.config.js,tailwind.config.ts,tsconfig.json,.env.example,.gitignore,README.md}

echo "Estrutura criada! Agora copie o conteúdo dos arquivos acima."
