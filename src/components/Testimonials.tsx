import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Rápida e eficiente. Recuperaram minha tranquilidade e removeram processos indevidos do Google.",
      author: "Cliente anônimo",
      location: "São Paulo",
    },
    {
      quote: "Atendimento sigiloso e profissional. Relatórios claros.",
      author: "RH",
      location: "empresa de tecnologia",
    },
    {
      quote: "Monitoramento contínuo que salvou nossa reputação online.",
      author: "Empreendedor",
      location: "Curitiba",
    },
  ];

  return (
    <section id="depoimentos" className="max-w-7xl mx-auto px-6 py-16 bg-muted/30 rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        O que nossos clientes dizem
      </h2>
      
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <figure key={index} className="p-6 bg-card rounded-xl shadow-sm border border-border relative">
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <blockquote className="text-sm text-foreground leading-relaxed mb-4">
              "{testimonial.quote}"
            </blockquote>
            <figcaption className="text-xs text-muted-foreground">
              — {testimonial.author}, <span className="italic">{testimonial.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
