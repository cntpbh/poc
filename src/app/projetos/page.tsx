import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
                <Link href={`/projetos/${project.id}`}>
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
}