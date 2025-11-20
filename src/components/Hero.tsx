import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, FileCheck } from "lucide-react";
import specialistImage from "@/assets/specialist-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <Badge className="bg-gradient-brand border-0 px-4 py-1 text-sm font-semibold">
            Proteção & Privacidade · LGPD
          </Badge>
          
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
            Recupere sua Privacidade Digital
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Removemos seus dados pessoais de buscadores e plataformas públicas como{" "}
            <strong className="text-foreground">Google</strong>,{" "}
            <strong className="text-foreground">Escavador</strong> e{" "}
            <strong className="text-foreground">JusBrasil</strong>. Atendimento sigiloso, suporte jurídico e monitoramento contínuo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection("planos")} variant="brand" size="lg">
              Contratar Agora
            </Button>
            <Button onClick={() => scrollToSection("contato")} variant="outline" size="lg">
              Fale com um Especialista
            </Button>
          </div>

          <ul className="mt-8 grid gap-3">
            {[
              { icon: Shield, text: "Sigilo absoluto e NDA sob demanda" },
              { icon: Lock, text: "Atendimento técnico e jurídico especializado" },
              { icon: FileCheck, text: "Relatórios de transparência e comprovação" },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-xs text-muted-foreground border-l-4 border-primary pl-4 py-2">
            Atuação nacional — serviços compatíveis com LGPD e melhores práticas de privacidade.
          </div>
        </div>

        <div className="rounded-2xl p-6 bg-card/60 backdrop-blur-glass border border-border shadow-lg">
          <img 
            src={specialistImage} 
            alt="Especialista M2SEC" 
            className="w-full h-72 object-cover rounded-xl"
          />
          <div className="mt-6">
            <h3 className="font-semibold text-xl text-foreground">Avaliação gratuita</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Envie até 3 URLs e fazemos uma análise inicial sem compromisso — identificamos exposição e ações recomendadas.
            </p>
            <Button onClick={() => scrollToSection("contato")} variant="outline" className="mt-4 w-full">
              Solicitar Avaliação
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
