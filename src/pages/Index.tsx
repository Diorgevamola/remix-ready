import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import VideosSection from "@/components/VideosSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { WebGLShader } from "@/components/ui/web-gl-shader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideosSection />
      <Portfolio />
      
      {/* CTA Section */}
      <section id="orcamento" className="py-16 md:py-20 relative overflow-hidden scroll-mt-20">
        {/* WebGL Shader Background */}
        <div className="absolute inset-0 w-full h-full">
          <WebGLShader />
        </div>
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Pronto para Criar Seu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
                Fantoche dos Sonhos?
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Entre em contato e transforme sua ideia em um personagem único e inesquecível
            </p>
            <button
              onClick={() => {
                // Meta Pixel tracking
                if (typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === 'function') {
                  (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'Subscribe');
                }
                // Google Ads tracking
                if (window.gtag) {
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-836775906/p0vGCJm3oaoBEOLfgI8D',
                    'event_callback': () => window.open('https://wa.me/5511957761009', '_blank')
                  });
                } else {
                  window.open('https://wa.me/5511957761009', '_blank');
                }
              }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-lg shadow-[0_0_30px_rgba(250,69,140,0.5)] hover:shadow-[0_0_50px_rgba(250,69,140,0.8)] transition-all duration-300 hover:scale-105"
            >
              <span>Solicitar Orçamento</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 md:py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Produtos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Escolha a opção ideal para o seu projeto</p>
          </div>

          <div className="max-w-md mx-auto">
            {/* Zucco IA Collection - Coming Soon */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border opacity-60 grayscale pointer-events-none select-none">
              {/* Badge Em Breve */}
              <div className="absolute -top-3 right-4 md:right-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Em Breve!
                </span>
              </div>

              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Zucco IA Collection</h3>
              <p className="text-sm text-muted-foreground mb-6">Transforme sua foto em um fantoche único usando Inteligência Artificial</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Tamanho compacto ideal para presentes</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Envie uma foto (apenas humanos, uma pessoa)</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>IA cria o design automaticamente</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Qualidade artesanal premium</span>
                </li>
              </ul>

              <button 
                disabled
                className="w-full flex items-center justify-center gap-2 bg-muted text-muted-foreground text-sm font-medium py-3 px-6 rounded-full cursor-not-allowed"
              >
                <span>Em Breve</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <About />
      <FAQ />
      <Contact generatedImage={null} />
      <Footer />
    </div>
  );
};

export default Index;
