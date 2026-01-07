import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TrendingUp, Clock, MapPin, ArrowRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  startup: string;
  category: string;
  trl: string;
  investment: string;
  location: string;
  status: string;
  description: string;
  impact: string;
  tags: string[];
};

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Gestão de Frota Inteligente",
      startup: "FleetTech Solutions",
      category: "Mobilidade",
      trl: "TRL 8",
      investment: "R$ 2.5M",
      location: "São Paulo, SP",
      status: "Em andamento",
      description: "Solução de IoT para monitoramento e otimização de frotas públicas com redução de 35% nos custos operacionais.",
      impact: "Economia de R$ 12M/ano para 5 municípios",
      tags: ["IoT", "IA", "Sustentabilidade"]
    },
    {
      id: 2,
      title: "Plataforma de Telemedicina Municipal",
      startup: "HealthConnect",
      category: "Saúde",
      trl: "TRL 9",
      investment: "R$ 3.8M",
      location: "Rio de Janeiro, RJ",
      status: "Implementado",
      description: "Sistema integrado de telemedicina para atendimento remoto em áreas de difícil acesso.",
      impact: "150 mil atendimentos realizados",
      tags: ["Saúde", "Telemedicina", "Inclusão"]
    },
    {
      id: 3,
      title: "IA para Análise de Contratos Públicos",
      startup: "LegalAI",
      category: "Jurídico",
      trl: "TRL 7",
      investment: "R$ 1.9M",
      location: "Brasília, DF",
      status: "Piloto",
      description: "Inteligência artificial para análise e validação automática de contratos governamentais.",
      impact: "Redução de 80% no tempo de análise",
      tags: ["IA", "Automação", "Compliance"]
    },
    {
      id: 4,
      title: "Blockchain para Transparência Fiscal",
      startup: "TransparencyChain",
      category: "Financeiro",
      trl: "TRL 8",
      investment: "R$ 4.2M",
      location: "Curitiba, PR",
      status: "Em expansão",
      description: "Plataforma blockchain para rastreamento transparente de recursos públicos em tempo real.",
      impact: "100% de transparência fiscal",
      tags: ["Blockchain", "Transparência", "Fintech"]
    },
    {
      id: 5,
      title: "Sistema de Segurança Urbana com IA",
      startup: "SafeCity AI",
      category: "Segurança",
      trl: "TRL 7",
      investment: "R$ 5.1M",
      location: "Belo Horizonte, MG",
      status: "Em andamento",
      description: "Análise preditiva e reconhecimento inteligente para segurança pública urbana.",
      impact: "Redução de 40% em crimes",
      tags: ["IA", "Computer Vision", "Segurança"]
    },
    {
      id: 6,
      title: "Educação Digital Adaptativa",
      startup: "EduTech Brasil",
      category: "Educação",
      trl: "TRL 9",
      investment: "R$ 2.8M",
      location: "Fortaleza, CE",
      status: "Implementado",
      description: "Plataforma de ensino adaptativo com IA para escolas públicas municipais.",
      impact: "80 mil alunos beneficiados",
      tags: ["Educação", "IA", "Inclusão Digital"]
    }
  ];

  const categories = ["Todos", "Mobilidade", "Saúde", "Jurídico", "Financeiro", "Segurança", "Educação"];

  return (
    <section id="projetos" className="py-20 sm:py-24 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projetos de{" "}
            <span className="text-blue-600">
              Destaque
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça as soluções inovadoras que estão transformando o setor público brasileiro
          </p>
        </div>

        {/* Filters */}
        <Tabs defaultValue="Todos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-12 h-auto gap-2 bg-gray-100 p-1 rounded-lg">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-md data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm font-semibold"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="Todos" className="mt-0">
            <ProjectGrid projects={projects} />
          </TabsContent>
          {categories.slice(1).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <ProjectGrid projects={projects.filter(p => p.category === category)} />
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-lg font-semibold">
            Ver Todos os Projetos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="border border-gray-200 rounded-lg bg-white hover:border-gray-300 hover:shadow-lg transition-all overflow-hidden animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Card Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <Badge 
                variant={project.status === "Implementado" ? "default" : "secondary"}
                className={project.status === "Implementado" 
                  ? "bg-green-100 text-green-700 hover:bg-green-100" 
                  : "bg-blue-100 text-blue-700 hover:bg-blue-100"
                }
              >
                {project.status}
              </Badge>
              <Badge variant="outline" className="font-semibold border-gray-300">
                {project.trl}
              </Badge>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-100">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-3">
            <div className="flex items-center text-sm text-gray-600">
              <Building2 className="h-4 w-4 mr-2 text-gray-400" />
              <span className="font-medium">{project.startup}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-gray-400" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <TrendingUp className="h-4 w-4 mr-2 text-gray-400" />
              <span className="font-semibold text-green-600">{project.investment}</span>
            </div>
            
            {/* Impact */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-semibold">
                Impacto
              </p>
              <p className="text-sm font-medium text-gray-900">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Card Footer */}
          <div className="px-6 pb-6">
            <Button 
              variant="ghost" 
              className="w-full hover:bg-gray-50 font-semibold"
            >
              Ver Detalhes →
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

function Building2(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}