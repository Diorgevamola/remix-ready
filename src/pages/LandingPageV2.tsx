import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { 
  CheckCircle, 
  ArrowRight,
  Scissors,
  Settings2,
  Sparkles,
  Mail,
  Box,
  Hexagon,
  Triangle,
  Circle,
  Menu,
  X
} from "lucide-react";
import logoZucco from "@/assets/logo-zucco.png";

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 2) return `(${numbers}`;
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  phone: z.string().min(14, { message: "Telefone inválido" }),
  company: z.string().min(2, { message: "Empresa deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
});

type FormData = z.infer<typeof formSchema>;

const LandingPageV2 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      company: "",
      email: "",
    },
  });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const API_ENDPOINT = "https://sua-api.com/endpoint";
      
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar dados");
      }

      toast({
        title: "Sucesso!",
        description: "Seus dados foram enviados. Entraremos em contato em até 24 horas úteis.",
      });

      form.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-muted-foreground antialiased selection:bg-primary/20 selection:text-primary-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoZucco} alt="Zucco Puppets" className="h-8 sm:h-10 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-normal">
            <button onClick={() => handleNavClick('artesania')} className="hover:text-primary transition-colors">Artesania</button>
            <button onClick={() => handleNavClick('processo')} className="hover:text-primary transition-colors">Processo</button>
            <button onClick={() => handleNavClick('contato')} className="text-primary hover:text-primary/80 transition-colors">Contato</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 top-14 bg-background/95 backdrop-blur-xl z-40 transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-lg">
            <button 
              onClick={() => handleNavClick('artesania')} 
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Artesania
            </button>
            <button 
              onClick={() => handleNavClick('processo')} 
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Processo
            </button>
            <button 
              onClick={() => handleNavClick('contato')} 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Ambient Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] sm:h-[400px] lg:h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, hsl(328 100% 54% / 0.12) 0%, transparent 60%)' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Left Content */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 w-fit mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Agenda 2024 Aberta</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground tracking-tight leading-[1.15]">
              Personagens que <br className="hidden sm:block" />
              <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">ganham vida.</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl font-light text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Fantoches artesanais de alto padrão para produções audiovisuais, teatro e mascotes corporativos.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 mt-2 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle className="text-primary h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" strokeWidth={1.5} />
                <span>Materiais Premium</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle className="text-primary h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" strokeWidth={1.5} />
                <span>Mecanismos Articulados</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle className="text-primary h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" strokeWidth={1.5} />
                <span>Design Exclusivo</span>
              </div>
            </div>

            {/* Mobile CTA Button */}
            <button 
              onClick={scrollToContact}
              className="lg:hidden mt-2 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium py-3.5 px-8 rounded-full transition-all duration-200 shadow-lg shadow-primary/20 w-full sm:w-auto"
            >
              Solicitar Orçamento Grátis
            </button>
          </div>

          {/* Right Content: Capture Form */}
          <div id="contato" className="relative group scroll-mt-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-card border border-border rounded-xl p-5 sm:p-6 lg:p-8 shadow-2xl">
              <div className="mb-5 sm:mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-medium text-foreground tracking-tight mb-1.5 sm:mb-2">Solicite um Orçamento</h3>
                <p className="text-xs sm:text-sm font-light text-muted-foreground">Preencha os dados para iniciar seu projeto.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">Nome Completo</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="João Silva" 
                              {...field}
                              className="w-full bg-background border-border text-foreground text-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 h-auto focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">Telefone / WhatsApp</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(11) 99999-9999"
                              inputMode="tel"
                              {...field}
                              onChange={(e) => {
                                const formatted = formatPhone(e.target.value);
                                field.onChange(formatted);
                              }}
                              maxLength={15}
                              className="w-full bg-background border-border text-foreground text-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 h-auto focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">Nome da Empresa</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Sua Produtora ou Marca" 
                            {...field}
                            className="w-full bg-background border-border text-foreground text-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 h-auto focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">E-mail Corporativo</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            inputMode="email"
                            placeholder="nome@empresa.com" 
                            {...field}
                            className="w-full bg-background border-border text-foreground text-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 h-auto focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="pt-1 sm:pt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium py-3 sm:py-3.5 px-6 rounded-lg transition-all duration-200 shadow-[0_0_20px_hsl(328_100%_54%_/_0.25)] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                    >
                      <span>{isSubmitting ? "Enviando..." : "Iniciar Projeto"}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                    </button>
                    <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4 font-light">
                      Entraremos em contato em até 24 horas úteis.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof / Logos */}
      <section className="border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
          <p className="text-center text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6 sm:mb-8">Parceiros de produção</p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-6 sm:gap-8 lg:gap-16 opacity-60 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center justify-center gap-2 text-foreground font-semibold tracking-tighter text-sm sm:text-base lg:text-lg">
              <Box className="h-4 w-4 sm:h-5 sm:w-5 text-primary" strokeWidth={1.5} /> STUDIO A
            </div>
            <div className="flex items-center justify-center gap-2 text-foreground font-semibold tracking-tighter text-sm sm:text-base lg:text-lg">
              <Hexagon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" strokeWidth={1.5} /> NEXUS MEDIA
            </div>
            <div className="flex items-center justify-center gap-2 text-foreground font-semibold tracking-tighter text-sm sm:text-base lg:text-lg">
              <Triangle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" strokeWidth={1.5} /> VERTEX TV
            </div>
            <div className="flex items-center justify-center gap-2 text-foreground font-semibold tracking-tighter text-sm sm:text-base lg:text-lg">
              <Circle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" strokeWidth={1.5} /> ORBIT
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="artesania" className="py-16 sm:py-20 lg:py-28 relative scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 lg:mb-20 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground tracking-tight mb-4 sm:mb-6">A arte do movimento.</h2>
            <p className="text-base sm:text-lg font-light text-muted-foreground max-w-2xl mx-auto lg:mx-0">Cada peça da Zucco Puppets é uma fusão de escultura tradicional e mecânica moderna.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="group p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card/30 border border-border hover:border-primary/30 hover:bg-card/50 transition duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 sm:mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Scissors className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 sm:mb-3 tracking-tight">Costura de Precisão</h3>
              <p className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed">
                Tecidos importados e peles sintéticas de alta fidelidade, costurados à mão para acabamentos invisíveis.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card/30 border border-border hover:border-primary/30 hover:bg-card/50 transition duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 sm:mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Settings2 className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 sm:mb-3 tracking-tight">Mecanismos Internos</h3>
              <p className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed">
                Esqueletos leves de fibra de carbono e gatilhos suaves para controle total de expressões.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card/30 border border-border hover:border-primary/30 hover:bg-card/50 transition duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 sm:mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 sm:mb-3 tracking-tight">Carisma & Identidade</h3>
              <p className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed">
                Design focado em carisma e memorabilidade, alinhado à identidade visual da sua marca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase / CTA Strip */}
      <section id="processo" className="py-16 sm:py-20 lg:py-24 border-t border-border relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground tracking-tight mb-6 sm:mb-8">
            Pronto para criar algo <br className="hidden sm:block" /> <span className="text-primary">extraordinário?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium py-3.5 px-8 rounded-full transition-all duration-200 shadow-lg shadow-primary/20 active:scale-[0.98]"
            >
              Falar com Especialista
            </button>
            <a 
              href="mailto:contato@zuccopuppets.com"
              className="w-full sm:w-auto text-center text-muted-foreground hover:text-primary text-sm font-medium py-3 px-6 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              <span className="truncate">contato@zuccopuppets.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background pt-10 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="flex items-center gap-2">
              <img src={logoZucco} alt="Zucco Puppets" className="h-7 sm:h-8 w-auto opacity-70" />
            </div>
            <div className="flex gap-5 sm:gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">Behance</a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-muted-foreground/50 border-t border-border pt-6 sm:pt-8 font-light gap-3 sm:gap-0">
            <p>&copy; {new Date().getFullYear()} Zucco Puppets. Todos os direitos reservados.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link to="/termos" className="hover:text-muted-foreground transition-colors">Termos</Link>
              <Link to="/privacidade" className="hover:text-muted-foreground transition-colors">Privacidade</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageV2;
