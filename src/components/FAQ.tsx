import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para remover um link do Google?",
      answer: "Depende da natureza do conteúdo e do procedimento do provedor. Em média, processos iniciais podem levar de dias a semanas. Nós fornecemos estimativas por caso.",
    },
    {
      question: "Vocês garantem 100% de remoção?",
      answer: "Não existe garantia universal — políticas de plataformas variam. Oferecemos estratégias legais e técnicas para maximizar as chances e documentação que comprova esforços.",
    },
    {
      question: "Como é o sigilo do atendimento?",
      answer: "Todos os atendimentos são confidenciais. Podemos assinar NDA e adotamos controles técnicos para proteger informações dos clientes.",
    },
  ];

  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        Perguntas frequentes
      </h2>
      
      <Accordion type="single" collapsible className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-card border border-border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
