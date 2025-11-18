import { Heart, Sparkles, Star, Users } from "lucide-react";
import rodrigoPuppets from "@/assets/imagens_webp/rodrigo-puppets.webp";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 relative overflow-hidden scroll-mt-20">
      {/* Gradient Transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none -mt-16" />
      
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 py-1.5 text-xs sm:text-sm backdrop-blur-sm mb-4">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span>Sobre a Zucco Puppets</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Paixão por Criar
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Dando vida à imaginação através da arte dos fantoches
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center bg-[image:var(--gradient-card)] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-[var(--shadow-card)] border border-border/50 backdrop-blur-sm">
            {/* Image */}
            <div className="relative order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              <img
                src={rodrigoPuppets}
                alt="Rodrigo Araújo com fantoches personalizados"
                loading="lazy"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed order-2">
              <p className="text-foreground/90">
                Olá! Eu sou o <span className="text-primary font-semibold">Rodrigo Araújo</span>,
                criador de fantoches no estilo Muppets e Vila Sésamo. Sou fundador da{" "}
                <span className="text-secondary font-semibold">Zucco Puppets</span>,
                uma empresa que cria e fabrica fantoches personalizados por encomenda.
              </p>

              <p className="text-foreground/90">
                A cada novo projeto que recebemos, vestimos nossas asas e através da imaginação
                voamos pelo mundo da criação para transformar sua ideia em um lindo{" "}
                <span className="text-accent font-semibold">fantoche personalizado</span>!
              </p>

              <p className="text-foreground/90">
                Atendemos encomendas dos mais diversos países e temos orgulho em dividir nosso
                sucesso ensinando aos nossos alunos como produzir o seu próprio fantoche.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8">
                <div className="text-center p-3 sm:p-4 bg-background/50 rounded-lg sm:rounded-xl border border-border/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">Criatividade</h3>
                  <p className="text-xs text-muted-foreground">
                    Único e personalizado
                  </p>
                </div>

                <div className="text-center p-3 sm:p-4 bg-background/50 rounded-lg sm:rounded-xl border border-border/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">Qualidade</h3>
                  <p className="text-xs text-muted-foreground">
                    Acabamento profissional
                  </p>
                </div>

                <div className="text-center p-3 sm:p-4 bg-background/50 rounded-lg sm:rounded-xl border border-border/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">Experiência</h3>
                  <p className="text-xs text-muted-foreground">
                    Reconhecidos internacionalmente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
