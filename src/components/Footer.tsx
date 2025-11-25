import logo from "@/assets/m3sec-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="M3SEC logo" className="w-10 h-10 object-contain" />
              <div>
                <div className="font-semibold text-foreground">M3SEC</div>
                <div className="text-xs text-muted-foreground">Security & Privacy</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proteção de dados, remoção de conteúdo e monitoramento especializado.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Remoção em Buscadores</li>
              <li>Remoção em Plataformas Públicas</li>
              <li>Monitoramento Contínuo</li>
              <li>Consultoria LGPD</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contato@m3sec.com</li>
              <li>Atendimento nacional</li>
              <li>Seg-Sex: 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2025 M3SEC. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
