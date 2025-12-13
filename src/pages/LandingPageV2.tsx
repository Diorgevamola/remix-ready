import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
  Circle
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
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-muted-foreground antialiased selection:bg-primary/20 selection:text-primary-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoZucco} alt="Zucco Puppets" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-normal">
            <a href="#artesania" className="hover:text-primary transition-colors">Artesania</a>
            <a href="#processo" className="hover:text-primary transition-colors">Processo</a>
            <a href="#contato" className="text-primary hover:text-primary/80 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Ambient Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, hsl(328 100% 54% / 0.15) 0%, transparent 60%)' }}
        />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Agenda 2024 Aberta</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-medium text-foreground tracking-tight leading-[1.1]">
              Personagens que <br />
              <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">ganham vida.</span>
            </h1>
            
            <p className="text-lg lg:text-xl font-light text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Fantoches artesanais de alto padrão para produções audiovisuais, teatro e mascotes corporativos. Engenharia de precisão em cada movimento.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="text-primary h-4 w-4" strokeWidth={1.5} />
                <span>Materiais Premium</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="text-primary h-4 w-4" strokeWidth={1.5} />
                <span>Mecanismos Articulados</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="text-primary h-4 w-4" strokeWidth={1.5} />
                <span>Design Exclusivo</span>
              </div>
            </div>
          </div>

          {/* Right Content: Capture Form */}
          <div id="contato" className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-card border border-border rounded-xl p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-xl font-medium text-foreground tracking-tight mb-2">Solicite um Orçamento</h3>
                <p className="text-sm font-light text-muted-foreground">Preencha os dados abaixo para iniciar seu projeto exclusivo.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">Nome Completo</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="João Silva" 
                              {...field}
                              className="w-full bg-background border-border text-foreground text-sm rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">Telefone / WhatsApp</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(11) 99999-9999" 
                              {...field}
                              onChange={(e) => {
                                const formatted = formatPhone(e.target.value);
                                field.onChange(formatted);
                              }}
                              maxLength={15}
                              className="w-full bg-background border-border text-foreground text-sm rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">Nome da Empresa</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Sua Produtora ou Marca" 
                            {...field}
                            className="w-full bg-background border-border text-foreground text-sm rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">E-mail Corporativo</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="nome@empresa.com" 
                            {...field}
                            className="w-full bg-background border-border text-foreground text-sm rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-[0_0_20px_hsl(328_100%_54%_/_0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? "Enviando..." : "Iniciar Projeto"}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                    </button>
                    <p className="text-center text-xs text-muted-foreground mt-4 font-light">
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
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">Parceiros de produção</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-60 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 text-foreground font-semibold tracking-tighter text-lg">
              <Box className="h-5 w-5 text-primary" strokeWidth={1.5} /> STUDIO A
            </div>
            <div className="flex items-center gap-2 text-foreground font-semibold tracking-tighter text-lg">
              <Hexagon className="h-5 w-5 text-primary" strokeWidth={1.5} /> NEXUS MEDIA
            </div>
            <div className="flex items-center gap-2 text-foreground font-semibold tracking-tighter text-lg">
              <Triangle className="h-5 w-5 text-primary" strokeWidth={1.5} /> VERTEX TV
            </div>
            <div className="flex items-center gap-2 text-foreground font-semibold tracking-tighter text-lg">
              <Circle className="h-5 w-5 text-primary" strokeWidth={1.5} /> ORBIT
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="artesania" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground tracking-tight mb-6">A arte do movimento.</h2>
            <p className="text-lg font-light text-muted-foreground max-w-2xl">Cada peça da Zucco Puppets é uma fusão de escultura tradicional e mecânica moderna, garantindo expressividade e durabilidade.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-card/30 border border-border hover:border-primary/30 hover:bg-card/50 transition duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Scissors className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">Costura de Precisão</h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                Tecidos importados e peles sintéticas de alta fidelidade, costurados à mão para acabamentos invisíveis em 4K e HD.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-card/30 border border-border hover:border-primary/30 hover:bg-card/50 transition duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Settings2 className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">Mecanismos Internos</h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                Esqueletos leves de fibra de carbono e gatilhos suaves para controle total de olhos, pálpebras e expressões.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-card/30 border border-border hover:border-primary/30 hover:bg-card/50 transition duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3 tracking-tight">Carisma & Identidade</h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                Design de personagens focado em carisma e memorabilidade, alinhado perfeitamente com a identidade visual da sua marca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase / CTA Strip */}
      <section className="py-24 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-medium text-foreground tracking-tight mb-8">
            Pronto para criar algo <br /> <span className="text-primary">extraordinário?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium py-3 px-8 rounded-full transition-all duration-200 shadow-lg shadow-primary/20"
            >
              Falar com Especialista
            </button>
            <a 
              href="mailto:contato@zuccopuppets.com"
              className="text-muted-foreground hover:text-primary text-sm font-medium py-3 px-8 transition-colors flex items-center gap-2"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              contato@zuccopuppets.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <img src={logoZucco} alt="Zucco Puppets" className="h-8 w-auto opacity-70" />
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">Behance</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/50 border-t border-border pt-8 font-light">
            <p>&copy; {new Date().getFullYear()} Zucco Puppets. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-muted-foreground">Termos</a>
              <a href="#" className="hover:text-muted-foreground">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageV2;
