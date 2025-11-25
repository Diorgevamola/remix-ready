import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronsDown } from "lucide-react";
import heroPuppet from "@/assets/imagens_webp/hero-puppet.webp";
import rodrigoPuppets from "@/assets/imagens_webp/rodrigo-puppets.webp";
const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      {/* Animated Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 animate-fade-in">
          
          {/* Hero Text */}
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
              Damos Vida A Personagens
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2 [text-shadow:_0_0_30px_hsl(var(--primary)_/_0.5)]">
                Que Existem Apenas Na Sua Imaginação
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-foreground/90 max-w-3xl mx-auto [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
              Os Fantoches Zucco Puppets podem ser vistos hoje em diversos programas de televisão, comerciais, influencers, conteúdos online e muito mais.
            </p>

            {/* Featured Video */}
            <div className="w-full pt-4">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(250,69,140,0.4)] border border-primary/30 bg-black/20 backdrop-blur-sm">
                <div className="relative w-full aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/Jbnxsiz6t0A" 
                    title="Vídeo em Destaque" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    loading="eager" 
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 lg:gap-12 justify-center pt-4">
            <div className="stat-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Fantoches Criados</div>
            </div>
            <div className="stat-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-secondary">15+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce pt-8">
            <ChevronsDown className="w-8 h-8 text-primary/70" />
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;