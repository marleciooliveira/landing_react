import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/m2sec-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="M2SEC logo" className="w-12 h-12 object-contain" />
          <div>
            <div className="font-semibold text-lg text-foreground">M2SEC</div>
            <div className="text-xs text-muted-foreground">Security & Privacy</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollToSection("planos")} className="text-foreground hover:text-primary transition-colors">
            Planos
          </button>
          <button onClick={() => scrollToSection("depoimentos")} className="text-foreground hover:text-primary transition-colors">
            Prova Social
          </button>
          <Button onClick={() => scrollToSection("contato")} variant="outline" size="default">
            Fale Conosco
          </Button>
        </nav>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("services")} className="text-foreground text-left hover:text-primary transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection("planos")} className="text-foreground text-left hover:text-primary transition-colors">
              Planos
            </button>
            <button onClick={() => scrollToSection("depoimentos")} className="text-foreground text-left hover:text-primary transition-colors">
              Prova Social
            </button>
            <Button onClick={() => scrollToSection("contato")} variant="outline" className="w-full">
              Fale Conosco
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
