import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Rocket, Building, TrendingUp, Users, Shield, Zap } from 'lucide-react'

export default function Home() {
  const stats = [
    { label: 'Projetos Analisados', value: '250+', icon: Rocket },
    { label: 'Investimento Captado', value: 'R$ 45M', icon: TrendingUp },
    { label: 'Órgãos Públicos', value: '35', icon: Building },
    { label: 'Economia Gerada', value: 'R$ 120M', icon: Zap },
  ]

  const userTypes = [
    {
      title: 'Para Startups',
      description: 'Conecte sua solução inovadora com o setor público',
      icon: Rocket,
      href: '/dashboard/startup',
      features: ['Submissão de projetos', 'Análise TRL automatizada', 'Conexão com investidores'],
    },
    {
      title: 'Para Governo',
      description: 'Encontre soluções validadas para seus desafios',
      icon: Building,
      href: '/dashboard/governo',
      features: ['Cadastro de desafios', 'POCs sem custo', 'Compliance garantido'],
    },
    {
      title: 'Para Investidores',
      description: 'Invista em inovação com segurança jurídica',
      icon: TrendingUp,
      href: '/dashboard/investidor',
      features: ['Deal flow curado', 'Due diligence digital', 'Co-investimento'],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Conectando <span className="text-blue-600">Inovação</span> ao Setor Público
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A plataforma que une startups, governo e investidores para transformar 
              a administração pública através da inovação tecnológica.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/register">
                <Button size="lg" className="gap-2">
                  Começar Agora <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projetos">
                <Button variant="outline" size="lg">
                  Ver Projetos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="mx-auto h-8 w-8 text-blue-200" />
                  <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-blue-100">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* User Types */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uma plataforma, múltiplas oportunidades
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Escolha seu perfil e comece a transformar o setor público
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {userTypes.map((type) => {
              const Icon = type.icon
              return (
                <Card key={type.title} className="relative overflow-hidden">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-blue-600 mb-4" />
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Shield className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={type.href}>
                      <Button className="w-full" variant="outline">
                        Acessar <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Pronto para inovar?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Junte-se a centenas de organizações que já estão transformando o Brasil
            </p>
            <div className="mt-8">
              <Link href="/register">
                <Button size="lg">
                  Cadastre-se Gratuitamente
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
