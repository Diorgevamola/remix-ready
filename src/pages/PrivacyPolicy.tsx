import { Link } from "react-router-dom";
import logoZucco from "@/assets/logo-zucco.png";

const PrivacyPolicy = () => {
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
        <h1 className="text-4xl font-medium text-foreground tracking-tight mb-8">Política de Privacidade</h1>
        <p className="text-sm text-muted-foreground mb-12">Última atualização: Dezembro de 2024</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">1. Introdução</h2>
            <p>
              A Zucco Puppets está comprometida em proteger sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nosso site e serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">2. Informações que Coletamos</h2>
            <p>Coletamos as seguintes informações quando você preenche nosso formulário de contato:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone/WhatsApp</li>
              <li>Nome da empresa (quando aplicável)</li>
              <li>Informações sobre o projeto desejado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">3. Como Usamos suas Informações</h2>
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Responder às suas solicitações de orçamento</li>
              <li>Entrar em contato sobre seu projeto</li>
              <li>Enviar atualizações sobre o andamento do trabalho</li>
              <li>Melhorar nossos serviços e atendimento</li>
              <li>Cumprir obrigações legais e contratuais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar informações apenas:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Com prestadores de serviços essenciais (ex: hospedagem de site)</li>
              <li>Quando exigido por lei ou ordem judicial</li>
              <li>Para proteger nossos direitos legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Criptografia SSL/TLS para transmissão de dados</li>
              <li>Acesso restrito às informações pessoais</li>
              <li>Monitoramento regular de nossos sistemas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
            <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a anonimização ou exclusão de dados</li>
              <li>Revogar seu consentimento a qualquer momento</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">7. Cookies</h2>
            <p>
              Nosso site pode utilizar cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos armazenados em seu dispositivo que nos ajudam a:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Lembrar suas preferências</li>
              <li>Analisar o tráfego do site</li>
              <li>Melhorar a funcionalidade do site</li>
            </ul>
            <p className="mt-4">
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">8. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção maior seja exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">9. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Alterações significativas serão comunicadas através de nosso site. Recomendamos revisar esta página regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-4">10. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <div className="mt-4 p-4 bg-card border border-border rounded-lg">
              <p><strong className="text-foreground">E-mail:</strong> contato@zuccopuppets.com</p>
              <p className="mt-2"><strong className="text-foreground">Endereço:</strong> São Paulo, SP - Brasil</p>
            </div>
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

export default PrivacyPolicy;
