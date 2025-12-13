import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronsDown } from "lucide-react";
import heroPuppet from "@/assets/imagens_webp/hero-puppet.webp";
import rodrigoPuppets from "@/assets/imagens_webp/rodrigo-puppets.webp";
import { WebGLShader } from "@/components/ui/web-gl-shader";


const Hero = () => {
  // Google Ads conversion tracking
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-836775906/p0vGCJm3oaoBEOLfgI8D'});
    }
  }, []);
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* WebGL Shader Background */}
      <div className="absolute inset-0 w-full h-full">
        <WebGLShader />
      </div>
      
      {/* Gradient Overlay - stronger on mobile for better text readability */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-40 md:opacity-30" />
      
      {/* Dark overlay for better text contrast on mobile */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/0" />

      {/* Animated Glow Effects - reduced on mobile */}
      <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/20 md:bg-primary/30 rounded-full blur-[80px] md:blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 md:bg-secondary/30 rounded-full blur-[100px] md:blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-80 md:h-80 bg-accent/15 md:bg-accent/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 lg:space-y-12 animate-fade-in">
          
          {/* Hero Text */}
          <div className="text-center space-y-4 md:space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight [text-shadow:_0_2px_12px_rgb(0_0_0_/_80%)]">
              Damos Vida A Personagens
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2 md:mt-3 [text-shadow:_0_0_30px_hsl(var(--primary)_/_0.5)]">
                Que Existem Apenas Na Sua Imaginação
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/95 max-w-3xl mx-auto px-2 [text-shadow:_0_2px_12px_rgb(0_0_0_/_80%)]">
              Os Fantoches Zucco Puppets podem ser vistos hoje em diversos programas de televisão, comerciais, influencers, conteúdos online e muito mais.
            </p>

            {/* Featured Video */}
            <div className="w-full pt-3 md:pt-4">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(250,69,140,0.3)] md:shadow-[0_0_60px_rgba(250,69,140,0.4)] border border-primary/40 bg-black/40 backdrop-blur-sm">
                <div className="relative w-full aspect-video">
                  <iframe 
                    id="panda-c4636bc5-02bf-44a0-8720-2d686308ab6a" 
                    src="https://player-vz-8fe9b8d6-aa4.tv.pandavideo.com.br/embed/?v=c4636bc5-02bf-44a0-8720-2d686308ab6a" 
                    style={{ border: 'none' }}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                    allowFullScreen={true}
                    loading="eager"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center animate-bounce pt-4 md:pt-6">
              <ChevronsDown className="w-8 h-8 md:w-12 md:h-12 text-primary drop-shadow-[0_0_8px_hsl(var(--primary))] [filter:drop-shadow(0_0_12px_hsl(var(--primary)/_0.6))]" />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-12 justify-center pt-2 md:pt-4">
            <div className="stat-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">500+</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">Fantoches Criados</div>
            </div>
            <div className="stat-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">15+</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">Anos de Experiência</div>
            </div>
          </div>

        </div>
      </div>

      {/* Smooth gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-20" />
    </section>
  );
};
export default Hero;