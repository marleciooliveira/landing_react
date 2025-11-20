import { Search, Database, Activity } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Remoção em Buscadores",
      description: "Solicitações direcionadas ao Google para remoção de resultados que expõem dados sensíveis.",
    },
    {
      icon: Database,
      title: "Remoção em Plataformas Públicas",
      description: "Atuação em Escavador e JusBrasil com embasamento jurídico para retirada de publicações indevidas.",
    },
    {
      icon: Activity,
      title: "Monitoramento & Recuperação",
      description: "Monitoramento contínuo de novas exposições e medidas reativas para manutenção da reputação.",
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <service.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-xl text-foreground mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
