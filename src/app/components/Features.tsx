import { Rocket, Building2, TrendingUp, CheckCircle, Shield, Zap, BarChart3, Users2 } from "lucide-react";
import { Button } from "./ui/button";

export function Features() {
  const features = [
    {
      icon: Rocket,
      title: "Para Startups",
      description: "Conecte sua solução inovadora com o setor público e acelere seu crescimento",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      benefits: [
        "Análise TRL automatizada",
        "Conexão direta com órgãos públicos",
        "Acesso a investidores qualificados"
      ]
    },
    {
      icon: Building2,
      title: "Para Governo",
      description: "Modernize seus processos com soluções tecnológicas validadas e eficientes",
      color: "text-green-600",
      bgColor: "bg-green-50",
      benefits: [
        "Curadoria de soluções inovadoras",
        "Redução de custos operacionais",
        "Compliance e segurança garantidos"
      ]
    },
    {
      icon: TrendingUp,
      title: "Para Investidores",
      description: "Invista em startups com alto potencial no mercado govtech brasileiro",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      benefits: [
        "Projetos pré-analisados",
        "Métricas de impacto social",
        "Portfolio diversificado"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Segurança e Compliance",
      description: "Todas as soluções passam por rigoroso processo de validação e atendem às normas da LGPD e regulamentações governamentais."
    },
    {
      icon: Zap,
      title: "Integração Rápida",
      description: "Processo simplificado de onboarding e integração com sistemas existentes, reduzindo tempo de implementação em até 60%."
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboard inteligente com métricas de performance, ROI e impacto social das soluções implementadas."
    },
    {
      icon: Users2,
      title: "Suporte Especializado",
      description: "Equipe dedicada de especialistas em GovTech para auxiliar em todas as etapas do processo."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Uma plataforma para{" "}
            <span className="text-blue-600">
              todos os perfis
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conectamos o ecossistema de inovação governamental em uma única solução
          </p>
        </div>

        {/* Main Feature Cards - GitHub style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-lg bg-white p-8 hover:border-gray-300 hover:shadow-lg transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor} mb-6`}>
                  <Icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mb-6 text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                {/* Benefits */}
                <ul className="mb-8 space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Button className="w-full bg-gray-900 hover:bg-gray-800 rounded-lg font-semibold">
                  Começar Agora →
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Features Grid - GitHub style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-lg bg-white p-6 hover:border-gray-300 hover:shadow-md transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 mb-4">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}