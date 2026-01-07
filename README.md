# IBEDIS Connect 🚀

Plataforma de conexão entre startups, governo e investidores para inovação no setor público.

## 🚀 Deploy Rápido na Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SEU-USUARIO/ibedis-connect)

## 📋 Pré-requisitos

- Node.js 18+
- Conta na Vercel
- Banco PostgreSQL (recomendo Supabase ou Neon)

## 🛠️ Instalação Local

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/ibedis-connect.git
cd ibedis-connect

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Configure o banco de dados
npx prisma db push

# Execute o projeto
npm run dev
