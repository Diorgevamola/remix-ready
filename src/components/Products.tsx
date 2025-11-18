import { useState } from "react";
import { Sparkles, Palette, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIPuppetModal } from "@/components/AIPuppetModal";
const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openWhatsApp = () => {
    window.open('https://wa.me/5511957761009', '_blank');
  };
  const handleBuyAIPuppet = () => {
    setIsModalOpen(true);
  };
  return <section id="products" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Produtos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base mb-6">
            Oferecemos duas formas únicas de dar vida às suas ideias
          </p>
          
          {/* Quick Comparison */}
          
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Product 1: Fantoches Personalizados */}
          <div className="group relative bg-[image:var(--gradient-card)] rounded-3xl p-6 md:p-8 border-2 border-border/50 hover:border-primary/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 hover:scale-[1.02] animate-fade-in">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Tags superiores */}
            
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-[var(--shadow-elegant)] group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                Fantoches Personalizados
              </h3>
              
              <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                Criação artesanal 100% exclusiva baseada na sua imaginação
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm md:text-base group/item">
                  <div className="mt-0.5 p-1 rounded-full bg-primary/10">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors">Meio corpo ou corpo inteiro.</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base group/item">
                  <div className="mt-0.5 p-1 rounded-full bg-primary/10">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors">Baseado em desenhos, logos, animações ou sua imaginação</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base group/item">
                  <div className="mt-0.5 p-1 rounded-full bg-primary/10">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors">100% personalizado com sua criatividade</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base group/item">
                  <div className="mt-0.5 p-1 rounded-full bg-primary/10">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors">Qualidade artesanal premium</span>
                </li>
              </ul>

              {/* CTA */}
              <Button variant="default" size="lg" className="w-full group/btn" onClick={openWhatsApp}>
                Fale Conosco
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Product 2: Zucco IA Collection */}
          <div className="group relative bg-[image:var(--gradient-card)] rounded-3xl p-6 md:p-8 border-2 border-secondary/50 hover:border-secondary shadow-[var(--shadow-card)] hover:shadow-[0_0_40px_hsl(var(--secondary)/0.3)] transition-all duration-500 hover:scale-[1.02] animate-fade-in delay-150">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* New Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-accent to-secondary text-primary-foreground px-5 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg z-20">
              <Sparkles className="w-3 h-3 inline mr-1" />
              NOVIDADE!
            </div>

            {/* Tags superiores */}
            

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-[var(--shadow-elegant)] group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-secondary transition-colors">
                Zucco IA Collection
              </h3>
              
              <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                Transforme sua foto em um fantoche único usando Inteligência Artificial
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm md:text-base group/item">
                  <div className="mt-0.5 p-1 rounded-full bg-secondary/10">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors">Tamanho compacto ideal para presentes</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base group/item">
                  <div className="mt-0.5 p-1 rounded-full bg-secondary/10">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors">Envie uma foto (apenas humanos, uma pessoa)</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base group/item">
                  <div className="mt-0.5 p-1 rounded-full bg-secondary/10">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors">IA cria o design automaticamente</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base group/item">
                  <div className="mt-0.5 p-1 rounded-full bg-secondary/10">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="group-hover/item:text-foreground transition-colors">Qualidade artesanal premium</span>
                </li>
              </ul>

              {/* CTA */}
              <Button variant="hero" size="lg" className="w-full group/btn relative overflow-hidden shadow-[var(--shadow-glow)] hover:shadow-[0_0_60px_hsl(var(--secondary)/0.6)] transition-all duration-300" onClick={handleBuyAIPuppet}>
                <span className="relative z-10 flex items-center justify-center gap-2">Se transforme em fantoche agora!<Sparkles className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10" />
              </Button>
            </div>
          </div>
        </div>

        <AIPuppetModal open={isModalOpen} onOpenChange={setIsModalOpen} />

        {/* Bottom Note */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ambos os produtos são produzidos com a <span className="font-semibold text-[#ec176f]">mesma qualidade</span> e <span className="text-secondary font-semibold">atenção aos detalhes</span> que fazem da Zucco Puppets referência há mais de 15 anos
          </p>
        </div>
      </div>
    </section>;
};
export default Products;