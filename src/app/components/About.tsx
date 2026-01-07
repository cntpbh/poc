import { CheckCircle, Target, Users, Zap } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Revolucionar a forma como o setor público brasileiro adota tecnologia e inovação, conectando startups, governos e investidores em um ecossistema colaborativo."
    },
    {
      icon: Users,
      title: "Nossa Visão",
      description: "Ser a principal plataforma de inovação govtech da América Latina, transformando a administração pública através da tecnologia."
    },
    {
      icon: Zap,
      title: "Nossos Valores",
      description: "Transparência, eficiência, inovação e impacto social são os pilares que guiam todas as nossas decisões e parcerias."
    }
  ];

  const achievements = [
    "Primeira plataforma brasileira de conexão govtech certificada",
    "Parceria com mais de 35 órgãos públicos em todo Brasil",
    "R$ 120M em economia gerada para o setor público",
    "95% de taxa de sucesso em implementações",
    "Reconhecida pela ONU como caso de sucesso em inovação pública"
  ];

  return (
    <section id="sobre" className="py-20 sm:py-24 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre a{" "}
            <span className="text-blue-600">
              IBEDIS Connect
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos uma plataforma pioneira que conecta startups inovadoras com o setor público, 
            facilitando a transformação digital da administração pública brasileira.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="border border-gray-200 rounded-lg bg-white p-8 hover:border-gray-300 hover:shadow-md transition-all animate-slide-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 mb-6">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Nossa História
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fundada em 2020, a IBEDIS Connect nasceu da necessidade de criar uma ponte entre 
              a inovação tecnológica e o setor público brasileiro. Identificamos que muitas 
              startups possuíam soluções inovadoras, mas enfrentavam barreiras para acessar 
              contratos governamentais.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ao mesmo tempo, órgãos públicos buscavam modernização, mas tinham dificuldade 
              em encontrar e validar soluções tecnológicas adequadas. Nossa plataforma foi 
              criada para resolver esse problema bilateral.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoje, conectamos mais de 250 startups com 35 órgãos públicos, tendo gerado 
              R$ 120 milhões em economia e eficiência para o setor público.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-6">Principais Conquistas</h4>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team Stats */}
        <div className="border border-gray-200 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Nossa Equipe em Números
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Colaboradores</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Especialistas GovTech</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Suporte Dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
