import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [
    {
      question: "Quais as diferenças entre os fantoches personalizados e os Zucco IA Collection?",
      answer:
        "**Os personalizados:**\n1. São produzidos conforme a imagem enviada pelo cliente, podem ser humanos, animais e outros objetos. Criamos baseados nas imagens enviadas pelo cliente.\n2. Tamanho maior, podemos ser corpo inteiro ou meio corpo.\n3. Roupas personalizadas.\n4. Mãos articuladas.\n5. Valor definido após avaliação do grau de dificuldade, tempo de produção e materiais utilizados enviado via orçamento.\n\n**Zucco IA Collection** em nossa página:\n1. São produzidos conforme a imagem criada em nossa página pela IA.\n2. Tamanho menor somente meio corpo.\n3. Entregue somente com uma camiseta.\n4. Mãos fixas.\n5. Preço disponível na página.\n6. Não é possível fazer modificações na imagem produzida pela IA.",
    },
    {
      question: "Qual o estilo da Zucco Puppets?",
      answer:
        "Temos nosso estilo próprio, inspirado no universo dos Muppets e da Vila Sésamo — personagens expressivos, cheios de vida e personalidade única.",
    },
    {
      question: "Como posso encomendar um fantoche personalizado?",
      answer:
        "Você pode fazer o pedido diretamente pelo site ou entrando em contato pelo WhatsApp (11) 95776-1009. Envie um desenho ou foto do personagem desejado, uma descrição breve e o uso pretendido (teatro, vídeo, escola, mascote, etc.).",
    },
    {
      question: "Preciso ter um desenho pronto do meu personagem?",
      answer: "Sim. Trabalhamos sempre com base na imagem enviada pelo cliente.",
    },
    {
      question: "Vocês fazem fantoches baseados em pessoas reais?",
      answer:
        "Sim, é possível criar fantoches no estilo Muppets inspirados em pessoas reais, desde que respeitem direitos de imagem e sejam para uso pessoal ou autorizado.",
    },
    {
      question: "Que tipos de fantoches vocês produzem?",
      answer:
        "Produzimos fantoches de luva, vara, boca articulada, corpo inteiro e modelos para ventríloquos — todos feitos à mão, com acabamento profissional.",
    },
    {
      question: "Quais os tamanhos dos fantoches que posso adquirir?",
      answer:
        "**Fantoches personalizados:** Trabalhamos com dois tamanhos: Meio corpo (aproximadamente 60 cm) e Corpo inteiro (aproximadamente 1 metro).\n\n**Zucco IA Collection:** Somente meio corpo com aproximadamente 40 centímetros",
    },
    {
      question: "Quais materiais são usados?",
      answer:
        "Utilizamos espuma, tecidos antialérgicos, feltro, impressões em 3D e todos os materiais de alta durabilidade, garantindo conforto e fácil manipulação necessários para produção do personagem.",
    },
    {
      question: "O fantoche é articulado?",
      answer:
        "Utilizamos espuma, tecidos antialérgicos, feltro, impressões em 3D e todos os materiais de alta durabilidade, garantindo conforto e fácil manipulação necessários para produção do personagem.",
    },
    {
      question: "Posso pedir um fantoche igual a um já existente no portfólio?",
      answer:
        "Não. Cada fantoche é único e personalizado para cada cliente. Podemos criar um modelo parecido, com variações de cor, roupa e expressão facial, mas nunca idêntico.",
    },
    {
      question: "Vocês fazem fantoches com logotipo da minha marca?",
      answer:
        "Sim! Criamos personagens que representam sua marca, incorporando cores, logotipo e estilo visual personalizado.",
    },
    {
      question: "Quanto tempo leva para o fantoche ficar pronto?",
      answer:
        "O prazo de produção varia conforme a complexidade do personagem e a fila de encomendas no momento do pedido.",
    },
    {
      question: "Vocês enviam para todo o Brasil?",
      answer:
        "Sim! Fazemos envio para todos os estados, com rastreamento. O valor do frete é calculado de acordo com o CEP e o tamanho da embalagem.",
    },
    {
      question: "Posso acompanhar o andamento da produção?",
      answer:
        "Somente para encomenda de fantoches personalizados. Não sendo possível para o Zucco IA Collection.",
    },
    {
      question: "O que acontece se eu quiser alterar algo durante a produção?",
      answer:
        "**Fantoches Personalizados:** Pequenas alterações são possíveis até a fase de montagem final. Alterações significativas podem gerar custos adicionais e ampliar o prazo de entrega.\n**Fantoches Zucco IA Collection:** pequenas alterações podem ser avaliadas antes do início da produção, por exemplo: cor dos olhos...",
    },
    {
      question: "Vocês fazem mais de um fantoche igual (para equipes, escolas, etc.)?",
      answer: "Sim! Produzimos em pequena escala, mantendo o mesmo padrão de qualidade em todas as peças.",
    },
    {
      question: "Os fantoches são laváveis?",
      answer:
        "Não. A limpeza deve ser feita a seco ou com pano úmido. Evite imersão em água, uso de máquina de lavar, exposição ao sol ou ambientes muito quentes.",
    },
    {
      question: "Os fantoches vêm com hastes para manipulação?",
      answer: "Sim, nossos fantoches são com hastes para manipulação removíveis.",
    },
    {
      question: "Os fantoches da Zucco Puppets são entregues vestidos?",
      answer:
        "**Fantoches personalizados**: caso o cliente solicite, serão orçados e entregues com as roupas solicitadas.\n\n**Zucco IA Collection**: Não serão fornecidas roupas personalizadas, serão entregues somente com uma camiseta de manga curta da Zucco Puppets.",
    },
    {
      question: "Posso comprar roupas ou acessórios separados para o fantoche?",
      answer:
        "Sim, A Zucco fornece para os fantoches personalizados roupas extras, óculos, chapéus e outros acessórios personalizados sob encomenda. Esses itens são produzidos apenas durante a confecção do personagem, não de forma avulsa. O cliente pode adquirir no comércio, de forma particular, roupas e acessórios para troca a qualquer momento.",
    },
    {
      question: "Posso usar o fantoche em vídeos e comerciais?",
      answer: "Sim! Todos os modelos são feitos para uso profissional.",
    },
    {
      question: "Vocês fazem reparos ou restaurações de fantoches antigos?",
      answer: "Não. Trabalhamos apenas com criações novas.",
    },
    {
      question: "Vocês criam fantoches com corpo inteiro?",
      answer: "Sim. Produzimos personagens de corpo completo, ideais para eventos, apresentações e ações promocionais.",
    },
    {
      question: "Posso escolher a expressão facial do fantoche (sorridente, bravo, etc.)?",
      answer:
        "Sim. Cada detalhe é definido junto com o cliente — olhos, sobrancelhas, boca e cabelo. A expressão costuma ser neutra e fixa, não podendo ser alterada após a finalização.",
    },
    {
      question: "Vocês trabalham com prazos urgentes?",
      answer: "Sim, dependendo da agenda de produção. Pedidos com urgência têm custo adicional.",
    },
    {
      question: "Como é feito o pagamento?",
      answer:
        "**Fantoches Personalizados:** Aceitamos PIX e depósito bancário. **Zucco IA Collection:** Aceitamos PIX, cartão de crédito ou débito.",
    },
    {
      question: "O que torna os fantoches personalizados diferentes dos modelos comuns?",
      answer:
        "O cliente tem a possibilidade de criar o seu próprio personagem conforme sua imaginação e necessidade, a partir daí a Zucco Puppets se encarrega de produzi-lo. Cada peça é feita à mão e acabamento impecável. Seu fantoche se torna exclusivo e com personalidade única, criado para contar a sua história.",
    },
  ];
  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos fantoches e processos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i} className={i > 0 ? "mt-2" : ""}>
                      {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return <strong key={j}>{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
