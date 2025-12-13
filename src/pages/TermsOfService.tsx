import { Link } from "react-router-dom";
import logoZucco from "@/assets/logo-zucco.png";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-muted-foreground antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-card/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoZucco} alt="Zucco Puppets" className="h-8 w-auto" />
            <span className="text-foreground font-medium tracking-tighter text-lg">ZUCCO PUPPETS</span>
          </Link>
          <Link to="/" className="text-sm hover:text-foreground transition-colors">
            Voltar ao início
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-medium text-foreground tracking-tight mb-8">Termos de Uso</h1>
        <p className="text-sm text-muted-foreground mb-12">Última atualização: Dezembro de 2024</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da Zucco Puppets, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">2. Descrição dos Serviços</h2>
            <p>
              A Zucco Puppets oferece serviços de criação e fabricação de fantoches artesanais de alto padrão, incluindo:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Fantoches personalizados para produções audiovisuais</li>
              <li>Mascotes corporativos</li>
              <li>Personagens para teatro e eventos</li>
              <li>Consultoria em design de personagens</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente neste site, incluindo textos, imagens, logotipos, designs e fotografias de fantoches, são de propriedade exclusiva da Zucco Puppets ou de seus clientes (quando aplicável), protegidos por leis de direitos autorais e propriedade intelectual.
            </p>
            <p className="mt-4">
              Os designs de fantoches criados sob encomenda para clientes são transferidos mediante acordo contratual específico, que define os termos de uso e propriedade do personagem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">4. Orçamentos e Contratações</h2>
            <p>
              As solicitações de orçamento feitas através do site não constituem contrato de serviço. Após análise do projeto, enviaremos uma proposta detalhada que, se aceita, resultará em contrato formal com termos específicos para cada projeto.
            </p>
            <p className="mt-4">
              Os prazos de entrega e valores são definidos individualmente para cada projeto e serão especificados no contrato de prestação de serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">5. Uso de Imagens e Portfolio</h2>
            <p>
              A Zucco Puppets reserva-se o direito de utilizar imagens dos fantoches criados em seu portfolio e materiais de divulgação, salvo acordo em contrário estabelecido em contrato.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              A Zucco Puppets não se responsabiliza por:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Danos causados pelo uso inadequado dos fantoches</li>
              <li>Interrupções temporárias no acesso ao site</li>
              <li>Informações incorretas fornecidas por terceiros</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">7. Modificações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor imediatamente após sua publicação no site. O uso continuado do site após alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">8. Legislação Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida no foro da comarca de São Paulo, SP.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">9. Contato</h2>
            <p>
              Para dúvidas sobre estes termos, entre em contato através do e-mail: contato@zuccopuppets.com
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; 2024 Zucco Puppets. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/termos" className="hover:text-foreground transition-colors">Termos</Link>
            <Link to="/privacidade" className="hover:text-foreground transition-colors">Privacidade</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
