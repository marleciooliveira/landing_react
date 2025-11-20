import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      name: "Pacote Essencial",
      subtitle: "Remoção pontual",
      price: "R$ 360,00",
      period: "Pagamento único",
      features: [
        "Até 10 URLs para remoção",
        "Análise e teste de elegibilidade",
        "Relatório final",
      ],
      cta: "Contratar Essencial",
    },
    {
      name: "Pacote Premium Completo",
      subtitle: "Remoção e monitoramento",
      price: "R$ 3.000,00",
      period: "Pagamento único",
      features: [
        "Remoção ilimitada de URLs",
        "Monitoramento diário",
        "Suporte prioritário e relatórios mensais",
      ],
      cta: "Solicitar Premium",
      featured: true,
    },
  ];

  return (
    <section id="planos" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Planos</h2>
        <p className="text-muted-foreground text-lg">Planos claros, processos transparentes e suporte profissional.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
              plan.featured
                ? "bg-gradient-brand text-white border-transparent shadow-xl scale-105"
                : "bg-card border-border"
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className={`font-semibold text-2xl mb-1 ${plan.featured ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className={`text-sm ${plan.featured ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.subtitle}
                </div>
              </div>
              <div className="text-right">
                <div className={`text-3xl font-bold ${plan.featured ? "text-white" : "text-foreground"}`}>
                  {plan.price}
                </div>
                <div className={`text-xs ${plan.featured ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.period}
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? "text-white" : "text-primary"}`} />
                  <span className={`text-sm ${plan.featured ? "text-white/90" : "text-muted-foreground"}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => scrollToSection("contato")}
              variant={plan.featured ? "secondary" : "default"}
              className="w-full"
              size="lg"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-center text-muted-foreground max-w-3xl mx-auto">
        Observação: elegibilidade de remoção varia conforme a natureza do conteúdo e a política das plataformas. Fornecemos aconselhamento jurídico sobre estratégias alternativas quando necessário.
      </p>
    </section>
  );
};

export default Pricing;
