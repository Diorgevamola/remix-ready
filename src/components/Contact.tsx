import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, MessageCircle, Phone, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
interface ContactProps {
  generatedImage: {
    original: string;
    generated: string;
  } | null;
}
const Contact = ({
  generatedImage
}: ContactProps) => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasGeneratedImage = !!generatedImage;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Redirect to WhatsApp if there's a generated image
    if (hasGeneratedImage) {
      window.open('https://wa.me/5511998599385', '_blank');
    }

    // Make API call simultaneously (wrapped in IIFE to not block WhatsApp redirect)
    (async () => {
      try {
        // Helper function to convert and compress image to base64
        const imageToBase64 = async (imageUrl: string): Promise<string> => {
          // If already base64, extract the pure base64 without prefix
          if (imageUrl.startsWith("data:image")) {
            const base64 = imageUrl.split(",")[1];
            // Compress if too large
            return await compressBase64IfNeeded(imageUrl);
          }

          // If blob URL, convert to base64 and compress
          const response = await fetch(imageUrl);
          const blob = await response.blob();

          // Compress blob before converting to base64
          const compressedBlob = await compressImage(blob);
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64String = reader.result as string;
              // Remove the data:image/xxx;base64, prefix
              const pureBase64 = base64String.split(",")[1];
              resolve(pureBase64);
            };
            reader.onerror = reject;
            reader.readAsDataURL(compressedBlob);
          });
        };

        // Compress image blob to reduce size
        const compressImage = async (blob: Blob): Promise<Blob> => {
          return new Promise(resolve => {
            const img = new Image();
            const url = URL.createObjectURL(blob);
            img.onload = () => {
              URL.revokeObjectURL(url);

              // Calculate new dimensions (max 1024px on longest side)
              const maxSize = 1024;
              let width = img.width;
              let height = img.height;
              if (width > height && width > maxSize) {
                height = height * maxSize / width;
                width = maxSize;
              } else if (height > maxSize) {
                width = width * maxSize / height;
                height = maxSize;
              }
              const canvas = document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext("2d");
              ctx?.drawImage(img, 0, 0, width, height);
              canvas.toBlob(compressedBlob => {
                resolve(compressedBlob || blob);
              }, "image/jpeg", 0.85 // 85% quality
              );
            };
            img.src = url;
          });
        };

        // Compress base64 string if needed
        const compressBase64IfNeeded = async (dataUrl: string): Promise<string> => {
          const base64 = dataUrl.split(",")[1];

          // If less than 500KB, don't compress
          if (base64.length < 500000) {
            return base64;
          }

          // Convert to blob and compress
          const response = await fetch(dataUrl);
          const blob = await response.blob();
          const compressedBlob = await compressImage(blob);
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64String = reader.result as string;
              const pureBase64 = base64String.split(",")[1];
              resolve(pureBase64);
            };
            reader.onerror = reject;
            reader.readAsDataURL(compressedBlob);
          });
        };

        // Create JSON payload
        const payload: any = {
          nome_completo: formData.name,
          email: formData.email,
          telefone: formData.phone,
          observacoes: formData.message
        };

        // Add images as compressed base64 if they exist
        if (generatedImage) {
          console.log("Comprimindo e preparando imagens...");
          payload.imagem_original = await imageToBase64(generatedImage.original);
          payload.imagem_gerada = await imageToBase64(generatedImage.generated);
        }
        console.log("Enviando payload:", {
          ...payload,
          imagem_original: payload.imagem_original ? `${payload.imagem_original.substring(0, 50)}... (${payload.imagem_original.length} caracteres)` : undefined,
          imagem_gerada: payload.imagem_gerada ? `${payload.imagem_gerada.substring(0, 50)}... (${payload.imagem_gerada.length} caracteres)` : undefined
        });

        // Send to n8n webhook as JSON with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 120000); // 120 second timeout

        const response = await fetch("https://n8n-n8n.lcormq.easypanel.host/webhook/finalizar-pedido", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error("Erro ao enviar pedido");
        }
        toast({
          title: "Pedido enviado com sucesso!",
          description: "Nossa equipe entrará em contato via WhatsApp para discutir detalhes, preço e prazos."
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        toast({
          title: "Erro ao enviar pedido",
          description: "Ocorreu um erro ao processar seu pedido. Tente novamente.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    })();
  };
  return <section id="contact" className="py-12 md:py-16 lg:py-20 relative overflow-hidden scroll-mt-20">
      {/* Background Effects */}
      
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      
    </section>;
};
export default Contact;