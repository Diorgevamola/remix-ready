import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Palette, 
  Trophy, 
  Truck, 
  Briefcase, 
  Clock, 
  Shield, 
  MessageCircle,
  CheckCircle2,
  Star
} from "lucide-react";
import logoZucco from "@/assets/logo-zucco.png";
import fantocheBlazer from "@/assets/imagens_webp/fantoche_loiro_blazer.jpg";
import grupoFantoches from "@/assets/imagens_webp/grupo_fantoches.jpg";
import personagemTerno from "@/assets/imagens_webp/personagem_terno_roxo.webp";
import senhorOculos from "@/assets/imagens_webp/senhor_bigode_oculos.webp";

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
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const benefits = [
  {
    icon: Palette,
    title: "100% Personalizados",
    description: "Fantoches únicos criados especialmente para sua marca"
  },
  {
    icon: Trophy,
    title: "+25 Anos de Experiência",
    description: "Tradição e qualidade reconhecidas no mercado"
  },
  {
    icon: Truck,
    title: "Entrega Nacional",
    description: "Enviamos para todo o Brasil com segurança"
  },
  {
    icon: Briefcase,
    title: "Ideal para Empresas",
    description: "Treinamentos, eventos, marketing e campanhas"
  },
];

const stats = [
  { value: "500+", label: "Projetos Entregues" },
  { value: "200+", label: "Empresas Atendidas" },
  { value: "25+", label: "Anos de Mercado" },
];

const galleryImages = [
  { src: fantocheBlazer, alt: "Fantoche corporativo profissional" },
  { src: grupoFantoches, alt: "Grupo de fantoches personalizados" },
  { src: personagemTerno, alt: "Personagem executivo" },
  { src: senhorOculos, alt: "Fantoche empresarial" },
];

const LandingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      company: "",
      email: "",
      message: "",
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
        description: "Seus dados foram enviados com sucesso. Entraremos em contato em até 24h!",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Header */}
      <header className="w-full py-4 px-6 bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={logoZucco} alt="Zucco Fantoches" className="h-12 object-contain" />
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Fale pelo WhatsApp</span>
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Hero Section */}
            <section className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 fill-primary" />
                Referência em fantoches corporativos
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Fantoches Personalizados que{" "}
                <span className="text-primary">Encantam seu Público</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Aumente o engajamento da sua marca com fantoches exclusivos para 
                treinamentos corporativos, eventos empresariais e campanhas de marketing.
              </p>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-card rounded-xl border border-border/50 shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </section>

            {/* Benefits */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Por que escolher a Zucco?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Nossos Trabalhos
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-square rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all hover:scale-105"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            <section className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-muted-foreground italic mb-4">
                "Os fantoches da Zucco transformaram nossos treinamentos corporativos. 
                A qualidade é excepcional e o atendimento foi impecável do início ao fim."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Maria Clara</div>
                  <div className="text-sm text-muted-foreground">Gerente de RH - Empresa XYZ</div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-card rounded-2xl shadow-2xl p-6 sm:p-8 border border-border/50">
              {/* Form Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  <Clock className="h-4 w-4" />
                  Resposta em até 24h
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Solicite seu Orçamento Grátis
                </h2>
                <p className="text-muted-foreground text-sm">
                  Preencha o formulário e receba uma proposta personalizada
                </p>
              </div>

              {/* Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome completo" 
                            {...field} 
                            className="bg-background"
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
                      <FormItem>
                        <FormLabel>Telefone *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(00) 00000-0000" 
                            {...field}
                            onChange={(e) => {
                              const formatted = formatPhone(e.target.value);
                              field.onChange(formatted);
                            }}
                            maxLength={15}
                            className="bg-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Nome da sua empresa" 
                            {...field} 
                            className="bg-background"
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
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="seu@email.com" 
                            {...field} 
                            className="bg-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Conte-nos sobre seu projeto (opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva brevemente o que você precisa..."
                            {...field} 
                            className="bg-background resize-none"
                            rows={3}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full mt-6" 
                    size="lg"
                    variant="hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Quero meu Orçamento Grátis"}
                  </Button>

                  {/* Trust Indicators */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-green-500" />
                      Seus dados estão seguros conosco
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Sem compromisso, orçamento 100% gratuito
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <img src={logoZucco} alt="Zucco Fantoches" className="h-10 mx-auto mb-3 object-contain" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zucco Fantoches. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
