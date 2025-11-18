import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import carinhoso from "@/assets/imagens_webp/carinhoso.webp";
import dente from "@/assets/imagens_webp/dente_site.webp";
import djMc from "@/assets/imagens_webp/dj_mc_site.webp";
import dna from "@/assets/imagens_webp/dna_affi.webp";
import duende from "@/assets/imagens_webp/duende.webp";
import fada from "@/assets/imagens_webp/fada.webp";
import biblia from "@/assets/imagens_webp/biblia.webp";
import monstroRosa from "@/assets/imagens_webp/monstro_rosa.webp";
import monstroRosa2 from "@/assets/imagens_webp/monstro_rosa_2.webp";
import monstroAzul from "@/assets/imagens_webp/monstro_azul.webp";
import monstroAmarelo from "@/assets/imagens_webp/monstro_amarelo.webp";
import monstroVerde from "@/assets/imagens_webp/monstro_verde.webp";
import monstroVerdeNarizAzul from "@/assets/imagens_webp/monstro_verde_nariz_azul.webp";
import monstroAmarelo2 from "@/assets/imagens_webp/monstro_amarelo_2.webp";
import monstroAzul2 from "@/assets/imagens_webp/monstro_azul_2.webp";
import meninaSice from "@/assets/imagens_webp/menina_sice.webp";
import babyYoda from "@/assets/imagens_webp/baby_yoda.webp";
import alienigena from "@/assets/imagens_webp/alienigena.webp";
import livroLaranja from "@/assets/imagens_webp/livro_laranja.webp";
import esqueleto from "@/assets/imagens_webp/esqueleto.webp";
import personagemOculos from "@/assets/imagens_webp/personagem_oculos.webp";
import bonecoZucco from "@/assets/imagens_webp/boneco_zucco.webp";
import monstroVermelhoPeludo from "@/assets/imagens_webp/monstro_vermelho_peludo.webp";
import cachorroDetetive from "@/assets/imagens_webp/cachorro_detetive.webp";
import meninaBebe from "@/assets/imagens_webp/menina_bebe.webp";
import leao from "@/assets/imagens_webp/leao.webp";
import nutrao from "@/assets/imagens_webp/nutrao.webp";
import homemBigode from "@/assets/imagens_webp/homem_bigode.webp";
import profAdalberto from "@/assets/imagens_webp/prof_adalberto.webp";
import guerreiro from "@/assets/imagens_webp/guerreiro.webp";
import monstroRoxoSueter from "@/assets/imagens_webp/monstro_roxo_sueter.webp";
import cachorroAmarelo from "@/assets/imagens_webp/cachorro_amarelo.webp";
import ovelhaBranca from "@/assets/imagens_webp/ovelha_branca.webp";
import astronautaVerde from "@/assets/imagens_webp/astronauta_verde.webp";
import cientistaOculos from "@/assets/imagens_webp/cientista_oculos.webp";
import sarele from "@/assets/imagens_webp/sarele.webp";
import bonecoGorroVermelho from "@/assets/imagens_webp/boneco_gorro_vermelho.webp";
import monstroRosaCabeloPreto from "@/assets/imagens_webp/monstro_rosa_cabelo_preto.webp";
import monstroVerdeOculos from "@/assets/imagens_webp/monstro_verde_oculos.webp";
import golfinhoCinza from "@/assets/imagens_webp/golfinho_cinza.webp";
import personagemTernoRoxo from "@/assets/imagens_webp/personagem_terno_roxo.webp";
import senhorBigodeOculos from "@/assets/imagens_webp/senhor_bigode_oculos.webp";
import personagemMarromLaranja from "@/assets/imagens_webp/personagem_marrom_laranja.webp";
import monstroPeludoAmarelo from "@/assets/imagens_webp/monstro_peludo_amarelo.webp";
import doutorBarbaCinza from "@/assets/imagens_webp/doutor_barba_cinza.webp";
import alienVerdeAntenas from "@/assets/imagens_webp/alien_verde_antenas.webp";
import personagemAmareloSorridente from "@/assets/imagens_webp/personagem_amarelo_sorridente.webp";
import cobraRosaAmarela from "@/assets/imagens_webp/cobra_rosa_amarela.webp";
import pandaChapeuColorido from "@/assets/imagens_webp/panda_chapeu_colorido.webp";
import gatoLaranjaAnimado from "@/assets/imagens_webp/gato_laranja_animado.webp";
import cachorroPanikeka from "@/assets/imagens_webp/cachorro_panikeka.webp";
import personagemRoxoOnca from "@/assets/imagens_webp/personagem_roxo_onca.webp";
import chefUairango from "@/assets/imagens_webp/chef_uairango.webp";
import meninoOculosMacacao from "@/assets/imagens_webp/menino_oculos_macacao.webp";
import personagemRoupaRoxa from "@/assets/imagens_webp/personagem_roupa_roxa.webp";
import mascoteLivroCapacete from "@/assets/imagens_webp/mascote_livro_capacete.webp";
import guitarristaBoaVermelho from "@/assets/imagens_webp/guitarrista_boa_vermelho.webp";
import senhorOculosColeteLaranja from "@/assets/imagens_webp/senhor_oculos_colete_laranja.webp";
import monstroCianoPeludo from "@/assets/imagens_webp/monstro_ciano_peludo.webp";
import personagemAzulOculosLaranja from "@/assets/imagens_webp/personagem_azul_oculos_laranja.webp";
import cientistaCabeloBranco from "@/assets/imagens_webp/cientista_cabelo_branco.webp";
import cozinheiroBob from "@/assets/imagens_webp/cozinheiro_bob.webp";
import meninaTiaraLaranja from "@/assets/imagens_webp/menina_tiara_laranja.webp";
import meninaCamisetaVerde from "@/assets/imagens_webp/menina_camiseta_verde.webp";
import meninoCabeloLaranja from "@/assets/imagens_webp/menino_cabelo_laranja.webp";
import meninaCabeloCastanho from "@/assets/imagens_webp/menina_cabelo_castanho.webp";
import rodrigoFantoches from "@/assets/imagens_webp/rodrigo_fantoches.webp";
import meninoBoneAzul from "@/assets/imagens_webp/menino_bone_azul.webp";

const Portfolio = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const row4Ref = useRef<HTMLDivElement>(null);
  const [disabledAnimations, setDisabledAnimations] = useState<Set<string>>(new Set());

  const scrollRow = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right', rowId: string) => {
    if (ref.current) {
      // Responsive scroll amount - moves exactly one card width + gap
      const viewportWidth = window.innerWidth;
      let scrollAmount: number;
      
      if (viewportWidth < 640) {
        scrollAmount = 140 + 12; // mobile card (140px) + gap (12px)
      } else if (viewportWidth < 768) {
        scrollAmount = 160 + 12; // tablet card (160px) + gap (12px)
      } else if (viewportWidth < 1024) {
        scrollAmount = 180 + 16; // desktop card (180px) + gap (16px)
      } else {
        scrollAmount = 200 + 16; // large desktop card (200px) + gap (16px)
      }
      
      const currentScroll = ref.current.scrollLeft;
      const newScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;

      ref.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const portfolioItems = [
    {
      title: "Carinhoso",
      description: "Fantoche monstro roxo personalizado",
      image: carinhoso,
    },
    {
      title: "DJ MC",
      description: "Personagem urbano com estilo único",
      image: djMc,
    },
    {
      title: "DNA Affi",
      description: "Fantoche amarelo vibrante",
      image: dna,
    },
    {
      title: "Duende",
      description: "Personagem clássico com bigode e chapéu",
      image: duende,
    },
    {
      title: "Fada",
      description: "Fantoche fada com cabelos coloridos",
      image: fada,
    },
    {
      title: "Dente",
      description: "Fantoche educativo personalizado",
      image: dente,
    },
    {
      title: "Bíblia",
      description: "Fantoche livro para projetos religiosos",
      image: biblia,
    },
    {
      title: "Monstrinho Rosa",
      description: "Coleção Monstrinhos com design colorido",
      image: monstroRosa,
    },
    {
      title: "Monstrinho Rosa 2",
      description: "Coleção Monstrinhos - Personagem rosa",
      image: monstroRosa2,
    },
    {
      title: "Monstrinho Azul",
      description: "Coleção Monstrinhos - Personagem azul",
      image: monstroAzul,
    },
    {
      title: "Monstrinho Amarelo",
      description: "Coleção Monstrinhos - Personagem amarelo",
      image: monstroAmarelo,
    },
    {
      title: "Monstrinho Verde",
      description: "Coleção Monstrinhos - Personagem verde",
      image: monstroVerde,
    },
    {
      title: "Monstrinho Verde Especial",
      description: "Coleção Monstrinhos - Design único",
      image: monstroVerdeNarizAzul,
    },
    {
      title: "Monstrinho Amarelo 2",
      description: "Coleção Monstrinhos - Variação amarela",
      image: monstroAmarelo2,
    },
    {
      title: "Monstrinho Azul 2",
      description: "Coleção Monstrinhos - Variação azul",
      image: monstroAzul2,
    },
    {
      title: "Menina Sice",
      description: "Fantoche personalizado para projeto especial",
      image: meninaSice,
    },
    {
      title: "Baby Yoda",
      description: "Personagem icônico de Star Wars",
      image: babyYoda,
    },
    {
      title: "Alienígena",
      description: "Fantoche alien criativo",
      image: alienigena,
    },
    {
      title: "Livro Laranja",
      description: "Fantoche livro educativo animado",
      image: livroLaranja,
    },
    {
      title: "Esqueleto Cantor",
      description: "Personagem esqueleto estiloso com microfone",
      image: esqueleto,
    },
    {
      title: "Personagem Esportivo",
      description: "Fantoche com jaqueta vermelha e óculos",
      image: personagemOculos,
    },
    {
      title: "Boneco Personalizado",
      description: "Fantoche com camiseta Zucco Puppets",
      image: bonecoZucco,
    },
    {
      title: "Monstro Vermelho",
      description: "Monstro peludo vermelho com cabelo colorido",
      image: monstroVermelhoPeludo,
    },
    {
      title: "Cachorro Detetive",
      description: "Cachorro investigador com roupa xadrez",
      image: cachorroDetetive,
    },
    {
      title: "Menina com Bebê",
      description: "Fantoche mãe com bebê no colo",
      image: meninaBebe,
    },
    {
      title: "Leão",
      description: "Fantoche leão com juba dourada",
      image: leao,
    },
    {
      title: "Nutrão",
      description: "Mascote azul com chifres personalizável",
      image: nutrao,
    },
    {
      title: "Homem de Bigode",
      description: "Fantoche realista personalizado",
      image: homemBigode,
    },
    {
      title: "Professor Adalberto",
      description: "Professor amarelo com óculos",
      image: profAdalberto,
    },
    {
      title: "Guerreiro Medieval",
      description: "Personagem com armadura e bigode",
      image: guerreiro,
    },
    {
      title: "Monstro Roxo",
      description: "Monstro peludo com suéter xadrez",
      image: monstroRoxoSueter,
    },
    {
      title: "Cachorro Amarelo",
      description: "Cachorro peludo amarelo vibrante",
      image: cachorroAmarelo,
    },
    {
      title: "Ovelha Branca",
      description: "Ovelha peluda com calça jeans",
      image: ovelhaBranca,
    },
    {
      title: "Astronauta Alien",
      description: "Alien verde com uniforme NASA",
      image: astronautaVerde,
    },
    {
      title: "Cientista Maluco",
      description: "Cientista com cabelo espetado e óculos",
      image: cientistaOculos,
    },
    {
      title: "Sarele",
      description: "Personagem feminina com cabelos cacheados",
      image: sarele,
    },
    {
      title: "Boneco Gorro Vermelho",
      description: "Fantoche bege com gorro e sapatos marrons",
      image: bonecoGorroVermelho,
    },
    {
      title: "Monstro Rosa",
      description: "Monstro rosa peludo com cabelo preto",
      image: monstroRosaCabeloPreto,
    },
    {
      title: "Monstro Verde Professor",
      description: "Monstro verde com óculos e suéter xadrez",
      image: monstroVerdeOculos,
    },
    {
      title: "Golfinho",
      description: "Fantoche golfinho cinza realista",
      image: golfinhoCinza,
    },
    {
      title: "Empresário",
      description: "Personagem com terno roxo elegante",
      image: personagemTernoRoxo,
    },
    {
      title: "Senhor de Óculos",
      description: "Fantoche realista com bigode e óculos",
      image: senhorBigodeOculos,
    },
    {
      title: "Personagem Marrom",
      description: "Fantoche marrom com camiseta laranja",
      image: personagemMarromLaranja,
    },
    {
      title: "Monstro Amarelo Peludo",
      description: "Monstro amarelo peludo com nariz azul",
      image: monstroPeludoAmarelo,
    },
    {
      title: "Doutor",
      description: "Médico com barba cinza e estetoscópio",
      image: doutorBarbaCinza,
    },
    {
      title: "Alien Verde",
      description: "Alien verde peludo com antenas azuis",
      image: alienVerdeAntenas,
    },
    {
      title: "Personagem Amarelo",
      description: "Fantoche amarelo sorridente com corpo preto",
      image: personagemAmareloSorridente,
    },
    {
      title: "Cobra Rosa e Amarela",
      description: "Serpente colorida com cabelo loiro",
      image: cobraRosaAmarela,
    },
    {
      title: "Panda",
      description: "Panda fofo com chapéu colorido de festa",
      image: pandaChapeuColorido,
    },
    {
      title: "Gato Laranja",
      description: "Felino laranja animado e expressivo",
      image: gatoLaranjaAnimado,
    },
    {
      title: "Cachorro Panikeka",
      description: "Cachorro branco com uniforme personalizado",
      image: cachorroPanikeka,
    },
    {
      title: "Personagem Roxo",
      description: "Fantoche roxo com roupa de onça estilosa",
      image: personagemRoxoOnca,
    },
    {
      title: "Chef UaiRango",
      description: "Chef de cozinha com uniforme profissional",
      image: chefUairango,
    },
    {
      title: "Menino de Macacão",
      description: "Garoto com óculos e macacão jeans",
      image: meninoOculosMacacao,
    },
    {
      title: "Personagem Bege",
      description: "Fantoche com roupa roxa e rosa vibrante",
      image: personagemRoupaRoxa,
    },
    {
      title: "Mascote Livro",
      description: "Personagem livro com capacete de construção",
      image: mascoteLivroCapacete,
    },
    {
      title: "Guitarrista Rock",
      description: "Músico com guitarra e visual despojado",
      image: guitarristaBoaVermelho,
    },
    {
      title: "Senhor de Colete",
      description: "Personagem com óculos e colete laranja",
      image: senhorOculosColeteLaranja,
    },
    {
      title: "Monstro Ciano",
      description: "Monstro peludo azul turquesa com chifres",
      image: monstroCianoPeludo,
    },
    {
      title: "Personagem Azul Claro",
      description: "Fantoche azul com óculos laranja estiloso",
      image: personagemAzulOculosLaranja,
    },
    {
      title: "Cientista",
      description: "Cientista com cabelo branco espetado e óculos",
      image: cientistaCabeloBranco,
    },
    {
      title: "Cozinheiro Bob",
      description: "Chef com bigode e uniforme de cozinha",
      image: cozinheiroBob,
    },
    {
      title: "Menina com Tiara",
      description: "Personagem feminina com tiara laranja",
      image: meninaTiaraLaranja,
    },
    {
      title: "Menina de Verde",
      description: "Fantoche com camiseta verde e cabelo cacheado",
      image: meninaCamisetaVerde,
    },
    {
      title: "Menino Ruivo",
      description: "Garoto com cabelo laranja e camisa vermelha",
      image: meninoCabeloLaranja,
    },
    {
      title: "Menina de Macacão",
      description: "Personagem com cabelo castanho e macacão azul",
      image: meninaCabeloCastanho,
    },
    {
      title: "Rodrigo e Fantoches",
      description: "Foto especial com coleção de personagens",
      image: rodrigoFantoches,
    },
    {
      title: "Menino de Boné",
      description: "Garoto com boné azul e roupa amarela",
      image: meninoBoneAzul,
    },
  ];

  // Split items into 4 rows
  const rowSize = Math.ceil(portfolioItems.length / 4);
  const row1 = portfolioItems.slice(0, rowSize);
  const row2 = portfolioItems.slice(rowSize, rowSize * 2);
  const row3 = portfolioItems.slice(rowSize * 2, rowSize * 3);
  const row4 = portfolioItems.slice(rowSize * 3);

  const PortfolioRow = ({
    items,
    rowRef,
    reverse = false,
    rowId,
    isAnimationDisabled = false
  }: {
    items: typeof portfolioItems;
    rowRef: React.RefObject<HTMLDivElement>;
    reverse?: boolean;
    rowId: string;
    isAnimationDisabled?: boolean;
  }) => (
    <div 
      ref={rowRef}
      className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-4 sm:px-0"
      style={{ 
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch' // Smooth scrolling on iOS
      }}
    >
      <div className={`flex gap-3 md:gap-4 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
        {/* Single iteration for better performance */}
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] bg-[image:var(--gradient-card)] rounded-xl overflow-hidden border border-border/50 shadow-[var(--shadow-card)] hover:shadow-[0_20px_60px_-10px_hsl(328_100%_54%/0.3)] transition-all duration-300"
          >
            <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-muted to-muted/50">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-1.5 sm:p-2 md:p-2.5 space-y-0.5">
              <h3 className="text-[10px] sm:text-xs md:text-sm font-bold group-hover:text-primary transition-colors line-clamp-1">
                {item.title}
              </h3>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground line-clamp-1">
                {item.description}
              </p>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Control Buttons */}
      <Button
        onClick={() => scrollRow(rowRef, 'left', rowId)}
        className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/row:opacity-100 transition-opacity z-20 rounded-full w-8 h-8 md:w-10 md:h-10 p-0 bg-primary/80 hover:bg-primary"
        variant="ghost"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </Button>
      <Button
        onClick={() => scrollRow(rowRef, 'right', rowId)}
        className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/row:opacity-100 transition-opacity z-20 rounded-full w-8 h-8 md:w-10 md:h-10 p-0 bg-primary/80 hover:bg-primary"
        variant="ghost"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </Button>
    </div>
  );

  return (
    <section id="portfolio" className="py-12 md:py-16 lg:py-20 relative overflow-hidden scroll-mt-16">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10 mb-4 md:mb-6">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-3 py-1 text-xs backdrop-blur-sm mb-2">
            <ImageIcon className="w-3 h-3 text-secondary" />
            <span>Nossos Trabalhos</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Fantoches Personalizados
            </span>
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Criações exclusivas feitas à mão. Cada projeto é único e personalizado!
          </p>
        </div>
      </div>
      
      {/* Animated Portfolio Rows */}
      <div className="space-y-2 md:space-y-3">
        {/* Row 1 */}
        <div className="relative group/row">
          <PortfolioRow items={row1} rowRef={row1Ref} rowId="row1" />
          <Button
            onClick={() => scrollRow(row1Ref, 'left', 'row1')}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover/row:opacity-100 transition-opacity z-20 rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 shadow-lg"
            variant="secondary"
            size="icon"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
          <Button
            onClick={() => scrollRow(row1Ref, 'right', 'row1')}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover/row:opacity-100 transition-opacity z-20 rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 shadow-lg"
            variant="secondary"
            size="icon"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
        </div>
        
        {/* Row 2 */}
        <div className="relative group/row">
          <PortfolioRow items={row2} reverse rowRef={row2Ref} rowId="row2" />
          <Button
            onClick={() => scrollRow(row2Ref, 'left', 'row2')}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover/row:opacity-100 transition-opacity z-20 rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 shadow-lg"
            variant="secondary"
            size="icon"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
          <Button
            onClick={() => scrollRow(row2Ref, 'right', 'row2')}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover/row:opacity-100 transition-opacity z-20 rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 shadow-lg"
            variant="secondary"
            size="icon"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
        </div>
        
        {/* Row 3 */}
        <div className="relative group/row">
          <PortfolioRow items={row3} rowRef={row3Ref} rowId="row3" />
          <Button
            onClick={() => scrollRow(row3Ref, 'left', 'row3')}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover/row:opacity-100 transition-opacity z-20 rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 shadow-lg"
            variant="secondary"
            size="icon"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
          <Button
            onClick={() => scrollRow(row3Ref, 'right', 'row3')}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover/row:opacity-100 transition-opacity z-20 rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 shadow-lg"
            variant="secondary"
            size="icon"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
        </div>
        
        {/* Row 4 */}
        <div className="relative group/row">
          <PortfolioRow items={row4} reverse rowRef={row4Ref} rowId="row4" />
          <Button
            onClick={() => scrollRow(row4Ref, 'left', 'row4')}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover/row:opacity-100 transition-opacity z-20 rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 shadow-lg"
            variant="secondary"
            size="icon"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
          <Button
            onClick={() => scrollRow(row4Ref, 'right', 'row4')}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover/row:opacity-100 transition-opacity z-20 rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 shadow-lg"
            variant="secondary"
            size="icon"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
        </div>
      </div>
      
      {/* CTA */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mt-6 md:mt-8">
          <p className="text-xs md:text-sm text-muted-foreground mb-4 px-4">
            Pronto para criar seu fantoche personalizado?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
