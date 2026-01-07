import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-200 rounded-2xl p-8 sm:p-12 lg:p-16 bg-white shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge - GitHub style */}
            <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Comece gratuitamente hoje
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Pronto para transformar o setor público?
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto animate-slide-up">
              Junte-se a centenas de startups, órgãos governamentais e investidores que já estão revolucionando a administração pública brasileira.
            </p>

            {/* CTAs - GitHub style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 shadow-sm text-base px-8 h-12 rounded-lg font-semibold"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-base px-8 h-12 rounded-lg font-semibold"
              >
                Agendar Demonstração
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">250+</div>
                  <div className="text-sm text-gray-600">Startups</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">35</div>
                  <div className="text-sm text-gray-600">Órgãos Públicos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">R$ 120M</div>
                  <div className="text-sm text-gray-600">Economia Gerada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}