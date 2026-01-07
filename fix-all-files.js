const fs = require('fs');
const path = require('path');

// Função para criar diretórios
function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
}

// Função para criar arquivo
function createFile(filePath, content) {
  ensureDirectoryExists(filePath);
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created: ${filePath}`);
}

// Criar todos os arquivos necessários
const files = {
  // Badge Component
  'src/components/ui/badge.tsx': `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }`,

  // Navbar
  'src/components/layouts/navbar.tsx': `'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Rocket } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Projetos', href: '/projetos' },
    { name: 'Como Funciona', href: '/como-funciona' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                IBEDIS Connect
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={\`text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors \${
                  pathname === item.href ? 'text-blue-600' : ''
                }\`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/login">
              <Button variant="outline" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">
                Cadastrar
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={\`block px-3 py-2 rounded-md text-base font-medium \${
                  pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }\`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="space-y-2">
                <Link href="/login">
                  <Button variant="outline" className="w-full">
                    Entrar
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full">
                    Cadastrar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}`,

  // Footer
  'src/components/layouts/footer.tsx': `import Link from 'next/link'
import { Rocket, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Rocket className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">
                IBEDIS Connect
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando a administração pública através da inovação tecnológica. 
              Conectamos startups, governo e investidores em uma plataforma única.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-gray-400 hover:text-white">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-gray-400 hover:text-white">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Av. Paulista, 1636<br />São Paulo, SP</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>(13) 3351-9100</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>contato@ibedis.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 IBEDIS Connect. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <Link href="/termos" className="text-gray-400 hover:text-white text-sm mr-4">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-gray-400 hover:text-white text-sm">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}`,

  // Projetos page
  'src/app/projetos/page.tsx': `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ProjetosPage() {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestão Energética Inteligente',
      description: 'IA para reduzir consumo energético em prédios públicos',
      sector: 'Infraestrutura',
      trl: 7,
      budget: 'R$ 500K',
      status: 'MVP',
      economy: '30%',
    },
    {
      id: 2,
      title: 'EduAnalytics Pro',
      description: 'Previsão de evasão escolar com machine learning',
      sector: 'Educação',
      trl: 6,
      budget: 'R$ 300K',
      status: 'POC',
      economy: '25%',
    },
    {
      id: 3,
      title: 'TeleHealth Rural',
      description: 'Telemedicina para áreas remotas com diagnóstico por IA',
      sector: 'Saúde',
      trl: 8,
      budget: 'R$ 1.2M',
      status: 'Scaling',
      economy: '40%',
    },
  ]

  const statusColors: Record<string, string> = {
    POC: 'bg-yellow-100 text-yellow-800',
    MVP: 'bg-blue-100 text-blue-800',
    Scaling: 'bg-green-100 text-green-800',
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Projetos em Destaque
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Conheça as inovações que estão transformando o setor público
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={statusColors[project.status]}>
                    {project.status}
                  </Badge>
                  <span className="text-sm text-gray-500">TRL {project.trl}</span>
                </div>
                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Setor:</span>
                    <span className="font-medium">{project.sector}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Investimento:</span>
                    <span className="font-medium">{project.budget}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Economia:</span>
                    <span className="font-medium text-green-600">{project.economy}</span>
                  </div>
                </div>
                <Link href={\`/projetos/\${project.id}\`}>
                  <Button className="w-full" variant="outline">
                    Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/projetos/novo">
            <Button size="lg">
              Submeter Novo Projeto
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}`,

  // Páginas vazias para evitar erros 404
  'src/app/como-funciona/page.tsx': `export default function ComoFunciona() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center">Como Funciona</h1>
        <p className="text-center mt-4">Página em construção</p>
      </div>
    </div>
  )
}`,

  'src/app/sobre/page.tsx': `export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center">Sobre o IBEDIS</h1>
        <p className="text-center mt-4">Página em construção</p>
      </div>
    </div>
  )
}`,

  'src/app/contato/page.tsx': `export default function Contato() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center">Contato</h1>
        <p className="text-center mt-4">Página em construção</p>
      </div>
    </div>
  )
}`,

  'src/app/login/page.tsx': `export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <p className="text-center mt-4">Página em construção</p>
      </div>
    </div>
  )
}`,

  'src/app/register/page.tsx': `export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center">Cadastro</h1>
        <p className="text-center mt-4">Página em construção</p>
      </div>
    </div>
  )
}`
};

// Criar todos os arquivos
Object.entries(files).forEach(([filePath, content]) => {
  createFile(filePath, content);
});

console.log('\n✅ Todos os arquivos foram criados com sucesso!');
console.log('\n📋 Próximos passos:');
console.log('1. git add .');
console.log('2. git commit -m "fix: add all missing components and pages"');
console.log('3. git push origin main');
