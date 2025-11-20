import { Button } from "@/components/ui/button";

const CTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gradient-brand text-white rounded-3xl p-12 shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para recuperar sua privacidade?
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Solicite uma avaliação gratuita — envie até 3 links e nós avaliamos a elegibilidade sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => scrollToSection("contato")} 
              variant="secondary" 
              size="lg"
              className="font-semibold"
            >
              Solicitar Avaliação Gratuita
            </Button>
            <Button 
              onClick={() => scrollToSection("planos")} 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Ver Planos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
