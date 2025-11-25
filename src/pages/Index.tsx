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
      <section className="py-16 md:py-20 relative overflow-hidden">
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
              onClick={() => window.open('https://wa.me/5511957761009', '_blank')}
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
      
      <About />
      <FAQ />
      <Contact generatedImage={null} />
      <Footer />
    </div>
  );
};

export default Index;
