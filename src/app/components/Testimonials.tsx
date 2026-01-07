import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Carlos Mendes",
      role: "Secretário de Inovação",
      organization: "Prefeitura de São Paulo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      content: "A IBEDIS Connect revolucionou nossa forma de buscar e implementar soluções tecnológicas. Reduzimos custos em 40% e aumentamos a eficiência dos serviços públicos.",
      rating: 5
    },
    {
      name: "Ana Paula Silva",
      role: "CEO & Fundadora",
      organization: "TechGov Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content: "Conseguimos fechar contratos com 3 órgãos governamentais em apenas 6 meses. A plataforma facilitou todo o processo de validação e conexão.",
      rating: 5
    },
    {
      name: "Roberto Andrade",
      role: "Investment Director",
      organization: "GovTech Ventures",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      content: "Portfolio diversificado com startups de alto potencial. A análise TRL e métricas de impacto facilitam muito nossa tomada de decisão.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      role: "Diretora de Tecnologia",
      organization: "Governo do Estado do RJ",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      content: "Implementamos 5 soluções inovadoras que geraram economia de R$ 15M. A curadoria da IBEDIS é excepcional.",
      rating: 5
    },
    {
      name: "Lucas Ferreira",
      role: "CTO",
      organization: "SmartCity Brasil",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      content: "A plataforma acelerou nosso crescimento em 300%. Conseguimos validar nossa solução rapidamente e escalar para outros municípios.",
      rating: 5
    },
    {
      name: "Patricia Oliveira",
      role: "Coordenadora de Projetos",
      organization: "Ministério da Economia",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      content: "Transparência e eficiência em todo o processo. A IBEDIS Connect é referência em inovação para o setor público.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que dizem nossos{" "}
            <span className="text-blue-600">
              parceiros
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de quem já transformou o setor público com a IBEDIS Connect
          </p>
        </div>

        {/* Testimonials Grid - GitHub style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="border border-gray-200 rounded-lg bg-white p-8 hover:border-gray-300 hover:shadow-md transition-all animate-fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-200" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10 text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-blue-600 font-medium">{testimonial.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}