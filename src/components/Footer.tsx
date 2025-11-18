import { Heart, Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-zucco.png";
const Footer = () => {
  return <footer className="relative py-8 md:py-12 border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Zucco Puppets Logo" className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground max-w-xs">
              Transformando sonhos em fantoches desde 2008
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Links Rápidos</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-1">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-1">
                  Contato
                </a>
              </li>
              <li>
                <a href="https://instagram.com/zuccopuppets" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-1">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="mailto:contato@zuccopuppets.com.br" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@zuccopuppets.com.br</span>
              </a>
              
              <a href="https://wa.me/5511957761009" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
              
              <a href="https://instagram.com/zuccopuppets" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                <span className="text-sm">@zuccopuppets</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-border/50">
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
            <a href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <span className="text-border">•</span>
            <a href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zucco Puppets. Todos os direitos reservados.
            </p>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;