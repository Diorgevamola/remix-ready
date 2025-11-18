import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Sparkles, Loader2, Upload, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório").max(100, "Nome deve ter no máximo 100 caracteres"),
  telefone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Formato: (XX) XXXXX-XXXX"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido")
    .max(255, "E-mail muito longo"),
  foto: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Foto é obrigatória")
    .refine((files) => files[0]?.size <= MAX_FILE_SIZE, "Imagem deve ter no máximo 10MB")
    .refine((files) => files[0]?.type.startsWith("image/"), "Arquivo deve ser uma imagem"),
});

type FormData = z.infer<typeof formSchema>;

interface AIPuppetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AIPuppetModal = ({ open, onOpenChange }: AIPuppetModalProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const foto = watch("foto");

  // Preview image when selected
  if (foto && foto.length > 0 && !previewImage) {
    const file = foto[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // For now, just show a message and redirect to WhatsApp
      toast({
        title: "Pedido Recebido!",
        description: "Você será redirecionado para o WhatsApp para finalizar seu pedido.",
      });

      // Redirect to WhatsApp
      setTimeout(() => {
        window.open('https://wa.me/5511957761009?text=Olá! Gostaria de fazer um fantoche pela Zucco IA Collection', '_blank');
        onOpenChange(false);
        reset();
        setPreviewImage(null);
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro. Por favor, tente novamente.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    reset();
    setPreviewImage(null);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-primary" />
            Crie Seu Fantoche com IA
          </DialogTitle>
          <DialogDescription>
            Envie uma foto e nossa IA criará um fantoche único no estilo Muppets!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Image Upload */}
          <div className="space-y-2">
            <Label htmlFor="foto">Foto para o Fantoche *</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6">
              {previewImage ? (
                <div className="relative">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-48 object-contain rounded"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setPreviewImage(null);
                      reset({ foto: undefined });
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                  <Label
                    htmlFor="foto"
                    className="cursor-pointer text-primary hover:text-primary/80"
                  >
                    Clique para fazer upload
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    PNG, JPG até 10MB
                  </p>
                </div>
              )}
              <Input
                id="foto"
                type="file"
                accept="image/*"
                className="hidden"
                {...register("foto")}
              />
            </div>
            {errors.foto && (
              <p className="text-sm text-destructive">{errors.foto.message as string}</p>
            )}
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo *</Label>
            <Input
              id="nome"
              placeholder="Seu nome"
              {...register("nome")}
            />
            {errors.nome && (
              <p className="text-sm text-destructive">{errors.nome.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone *</Label>
            <Input
              id="telefone"
              placeholder="(11) 99999-9999"
              {...register("telefone")}
            />
            {errors.telefone && (
              <p className="text-sm text-destructive">{errors.telefone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="hero"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processando...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Criar Fantoche
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
