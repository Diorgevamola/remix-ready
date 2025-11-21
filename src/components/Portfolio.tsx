import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
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
import rosePuppet from "@/assets/imagens_webp/rose_puppet.webp";

const Portfolio = () => {
  const portfolioItems = [
    { title: "Carinhoso", description: "Danone Nutrícia", image: carinhoso },
    { title: "DJ MC", description: "Personagem urbano", image: djMc },
    { title: "Adenia", description: "Papelaria Affthehype", image: dna },
    { title: "Duende", description: "Personagem verde", image: duende },
    { title: "Fada", description: "Fantoche mágico", image: fada },
    { title: "Bíblia", description: "Livro personalizado", image: biblia },
    { title: "Monstro Rosa", description: "Fantoche peludo rosa", image: monstroRosa },
    { title: "Monstrinha Rosa", description: "Coleção Monstrinhos", image: monstroRosa2 },
    { title: "Monstrinho Azul", description: "Coleção Monstrinhos", image: monstroAzul },
    { title: "Monstrinho Amarelo", description: "Coleção Monstrinhos", image: monstroAmarelo },
    { title: "Monstro Verde", description: "Personagem verde", image: monstroVerde },
    { title: "Monstrinho Verde Nariz Azul", description: "Coleção monstrinho", image: monstroVerdeNarizAzul },
    { title: "Monstrinho Amarelo 2", description: "Variação amarela", image: monstroAmarelo2 },
    { title: "Monstro Azul 2", description: "Variação azul", image: monstroAzul2 },
    { title: "Menina Sice", description: "Personagem infantil", image: meninaSice },
    { title: "Baby Yoda", description: "Personagem icônico", image: babyYoda },
    { title: "Alienígena", description: "Ser extraterrestre", image: alienigena },
    { title: "Livro Laranja", description: "Mascote educativo", image: livroLaranja },
    { title: "Esqueleto", description: "Fantoche de Halloween", image: esqueleto },
    { title: "Personagem de Óculos", description: "Com óculos", image: personagemOculos },
    { title: "Boneco Zucco", description: "Mascote oficial", image: bonecoZucco },
    { title: "Monstro Vermelho", description: "Peludo vermelho", image: monstroVermelhoPeludo },
    { title: "Cachorro Detetive", description: "Com lupa", image: cachorroDetetive },
    { title: "Menina Bebê", description: "Infantil delicado", image: meninaBebe },
    { title: "Leão", description: "Rei da selva", image: leao },
    { title: "Nutrão", description: "Mascote educativo", image: nutrao },
    { title: "Homem de Bigode", description: "Personagem adulto", image: homemBigode },
    { title: "Prof. Adalberto", description: "Professor", image: profAdalberto },
    { title: "Guerreiro", description: "Fantoche medieval", image: guerreiro },
    { title: "Monstro Roxo", description: "De suéter", image: monstroRoxoSueter },
    { title: "Cachorro Amarelo", description: "Peludo amarelo", image: cachorroAmarelo },
    { title: "Ovelha Branca", description: "Fofa e peluda", image: ovelhaBranca },
    { title: "Astronauta Verde", description: "Do espaço", image: astronautaVerde },
    { title: "Cientista", description: "Com óculos", image: cientistaOculos },
    { title: "Sarele", description: "Personagem único", image: sarele },
    { title: "Boneco de Gorro", description: "Com gorro vermelho", image: bonecoGorroVermelho },
    { title: "Dente", description: "Mascote dental", image: dente },
    { title: "Rose Puppet", description: "A mulher dos zoi azul", image: rosePuppet },
  ];

  // Split into 4 rows
  const row1 = portfolioItems.slice(0, 10);
  const row2 = portfolioItems.slice(10, 20);
  const row3 = portfolioItems.slice(20, 30);
  const row4 = portfolioItems.slice(30);

  interface PortfolioRowProps {
    items: typeof portfolioItems;
    direction?: 'left' | 'right';
  }

  const PortfolioRow = ({ items, direction = 'left' }: PortfolioRowProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (scrollDirection: 'left' | 'right') => {
      if (scrollRef.current) {
        const scrollAmount = 800;
        const newPosition = scrollDirection === 'left' 
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;
        
        scrollRef.current.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        });
      }
    };

    return (
      <div className="relative overflow-hidden py-2 group">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 hover:bg-black/95 backdrop-blur-sm border border-primary/50 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-xl hover:scale-110"
          aria-label="Scroll left"
          type="button"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 hover:bg-black/95 backdrop-blur-sm border border-primary/50 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-xl hover:scale-110"
          aria-label="Scroll right"
          type="button"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>

        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div 
            className="flex gap-4"
            style={{ width: 'fit-content' }}
          >
            {/* Portfolio items */}
            {items.map((item, index) => (
              <div
                key={index}
                className="group/item relative flex-shrink-0 w-[140px] md:w-[180px] bg-card rounded-xl overflow-hidden border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[2/3] overflow-hidden bg-gradient-to-br from-card to-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-2 space-y-1 bg-black/80 backdrop-blur-sm">
                  <h3 className="text-xs font-bold group-hover/item:text-primary transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 relative overflow-hidden bg-black scroll-mt-20">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm backdrop-blur-sm mb-4">
            <ImageIcon className="w-4 h-4 text-primary" />
            <span className="text-white">Nossos Trabalhos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Portfólio
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos fantoches únicos que já criamos
          </p>
        </div>

        {/* Scrolling Rows */}
        <div className="space-y-0">
          <PortfolioRow items={row1} direction="left" />
          <PortfolioRow items={row2} direction="right" />
          <PortfolioRow items={row3} direction="left" />
          <PortfolioRow items={row4} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
