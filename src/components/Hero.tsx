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
  return <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-24 pb-6 sm:pb-16 md:pt-28 md:pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      {/* Background Image */}
      

      {/* Animated Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" style={{
      animationDelay: '2s'
    }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 mt-8 md:mt-0">
        <div className="flex items-center justify-center relative">
          {/* Text Content */}
          <div className="text-center space-y-3 sm:space-y-6 lg:space-y-8 animate-fade-in max-w-4xl">
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight md:text-5xl [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
              Damos Vida A Personagens
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-1 text-glow [text-shadow:_0_0_30px_hsl(var(--primary)_/_0.5)]">
                Que Existem Apenas Na sua Imaginação
              </span>
            </h1>

            <p className="text-sm sm:text-lg lg:text-xl text-foreground/90 max-w-2xl mx-auto [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">Os Fantoches Zucco Puppets podem ser vistos hoje em diversos programas de televisão, comerciais, influencers, conteúdos online e muito mais.</p>

            {/* Featured Video */}
            <div className="w-full max-w-4xl mx-auto mt-6 sm:mt-8">
              <div className="relative w-full rounded-xl overflow-hidden shadow-[0_0_40px_rgba(250,69,140,0.3)] border border-primary/20">
                <div className="relative w-full" style={{
                aspectRatio: "16/9"
              }}>
                  <iframe src="https://www.youtube.com/embed/Jbnxsiz6t0A" title="Vídeo em Destaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="eager" className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center pt-2 sm:pt-6 lg:pt-8 pb-2 sm:pb-8 lg:pb-12">
              <div className="stat-card animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Fantoches Criados</div>
              </div>
              <div className="stat-card animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="text-2xl sm:text-3xl font-bold text-secondary">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center animate-bounce pt-1">
              <ChevronsDown className="w-6 h-6 text-primary/70" />
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default Hero;