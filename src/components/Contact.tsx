import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  telefone: z.string().max(20, "Telefone muito longo").optional(),
  plano: z.string().min(1, "Selecione uma opção"),
  urls: z.string().max(1000, "Mensagem muito longa").optional(),
  privacy: z.boolean().refine((val) => val === true, "Você deve concordar com a Política de Privacidade"),
});

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    plano: "",
    urls: "",
    privacy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Verifique seu email.",
      });

      // Reset form
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        plano: "",
        urls: "",
        privacy: false,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro no formulário",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Fale com um especialista</h2>
        <p className="text-sm text-muted-foreground mb-8">
          Preencha o formulário abaixo e retornaremos com uma avaliação inicial.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome completo *</Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone (opcional)</Label>
              <Input
                id="telefone"
                type="tel"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="plano">Interesse *</Label>
              <Select value={formData.plano} onValueChange={(value) => setFormData({ ...formData, plano: value })}>
                <SelectTrigger id="plano">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="avaliacao">Solicitar avaliação gratuita</SelectItem>
                  <SelectItem value="essencial">Contratar Pacote Essencial</SelectItem>
                  <SelectItem value="premium">Solicitar Pacote Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="urls">Cole aqui até 3 URLs para análise (opcional)</Label>
            <Textarea
              id="urls"
              value={formData.urls}
              onChange={(e) => setFormData({ ...formData, urls: e.target.value })}
              placeholder="https://exemplo.com/url1&#10;https://exemplo.com/url2"
              rows={4}
            />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="privacy"
              checked={formData.privacy}
              onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
            />
            <Label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
              Li e concordo com a Política de Privacidade *
            </Label>
          </div>

          <Button type="submit" variant="brand" size="lg" className="w-full md:w-auto" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>

        <div className="mt-6 text-xs text-muted-foreground border-l-4 border-primary pl-4 py-2">
          Nossos processos consideram LGPD e boas práticas. Em casos de conteúdo com forte interesse público, a remoção pode ser limitada pelas leis e políticas das plataformas.
        </div>
      </div>
    </section>
  );
};

export default Contact;
