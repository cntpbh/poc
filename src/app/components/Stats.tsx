import { TrendingUp, Award, Target, Zap } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "R$ 120M",
      label: "Economia Gerada",
      description: "Em eficiência para o setor público",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Award,
      value: "95%",
      label: "Taxa de Sucesso",
      description: "Projetos implementados com êxito",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Target,
      value: "250+",
      label: "Projetos Ativos",
      description: "Soluções em desenvolvimento",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Zap,
      value: "60%",
      label: "Redução de Tempo",
      description: "Na implementação de soluções",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Resultados que{" "}
            <span className="text-blue-600">
              transformam
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Números que comprovam nosso impacto no setor público brasileiro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="border border-gray-200 rounded-lg bg-white p-8 hover:border-gray-300 hover:shadow-md transition-all text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-lg ${stat.bgColor} mb-4`}>
                  <Icon className={`h-7 w-7 ${stat.color}`} />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}