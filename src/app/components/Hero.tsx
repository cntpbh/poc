import { Button } from "./ui/button";
import { ArrowRight, Play, TrendingUp, Users, Building2, DollarSign } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Subtle background pattern - GitHub style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge - GitHub style */}
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5 text-sm text-gray-700 hover:border-gray-400 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Nova integração com fundos de investimento
              <ArrowRight className="h-3 w-3 ml-1" />
            </div>
          </div>
          
          {/* Título Principal - GitHub style */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 animate-fade-in mb-6">
            Transforme o setor público{" "}
            <span className="text-blue-600">
              com inovação
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 animate-slide-up max-w-3xl mx-auto">
            Conectamos startups inovadoras, órgãos governamentais e investidores 
            estratégicos em uma plataforma única para revolucionar a administração pública.
          </p>
          
          {/* CTAs - GitHub style */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button 
              size="lg" 
              className="w-full sm:w-auto gap-2 bg-blue-600 hover:bg-blue-700 shadow-sm text-base px-8 h-12 rounded-lg font-semibold"
            >
              Começar Gratuitamente
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto gap-2 text-base px-8 h-12 rounded-lg font-semibold border-gray-300 hover:bg-gray-50 hover:border-gray-400"
            >
              <Play className="h-4 w-4" />
              Ver Demonstração
            </Button>
          </div>
        </div>
        
        {/* Stats - GitHub style */}
        <div className="mx-auto mt-20 max-w-5xl animate-slide-up">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            {[
              { 
                icon: TrendingUp,
                value: '250+', 
                label: 'Projetos Analisados'
              },
              { 
                icon: DollarSign,
                value: 'R$ 45M', 
                label: 'Investimento Captado'
              },
              { 
                icon: Building2,
                value: '35', 
                label: 'Órgãos Públicos'
              },
              { 
                icon: Users,
                value: '20%', 
                label: 'Economia Média'
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-gray-300 hover:shadow-md transition-all text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 mb-3">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}