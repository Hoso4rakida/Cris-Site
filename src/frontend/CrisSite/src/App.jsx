import Navbar from "./components/Navbar";
import Catalogo from "./components/Catalogo";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import banner from "./assets/image1.webp";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-50 transition-colors duration-500">
      <Navbar />
      
      <main>
        {/* Banner Principal */}
        <section 
          style={{ backgroundImage: `url(${banner})` }} 
          className="relative w-full h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
          
          <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mb-6 animate-fade-in">
              Transforme Seus Ambientes com Móveis Planejados
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
              Qualidade, design e funcionalidade sob medida para você
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2">
              Solicite seu Orçamento
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

        {/* Seção Sobre */}
        <section id="sobre" className="py-20 px-6 bg-white dark:bg-stone-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre a Cris Arquitetura
              </h2>
              <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
                Somos especialistas em móveis planejados sob medida, transformando 
                ambientes com funcionalidade, beleza e qualidade. Com mais de 10 anos 
                de experiência no mercado, já realizamos centenas de projetos que unem 
                design moderno e acabamento impecável.
              </p>
            </div>

            {/* Diferenciais */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-3">Design Exclusivo</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Projetos personalizados que refletem seu estilo e necessidades únicas
                </p>
              </div>
              
              <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3">Qualidade Premium</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Materiais de primeira linha e acabamento perfeito em cada detalhe
                </p>
              </div>
              
              <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-3">Entrega Garantida</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Prazos cumpridos e instalação profissional com equipe especializada
                </p>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">+10</div>
                <p className="text-stone-600 dark:text-stone-400">Anos de Experiência</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">+500</div>
                <p className="text-stone-600 dark:text-stone-400">Projetos Realizados</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">100%</div>
                <p className="text-stone-600 dark:text-stone-400">Satisfação</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">+300</div>
                <p className="text-stone-600 dark:text-stone-400">Clientes Felizes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Catálogo de Produtos */}
        <section id="catalogo" className="bg-stone-50 dark:bg-stone-900">
          <Catalogo />
        </section>

        {/* Como Funciona */}
        <section className="py-20 px-6 bg-white dark:bg-stone-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Como Funciona
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Consulta</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Entre em contato e agende uma visita gratuita
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Projeto</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Criamos o projeto 3D personalizado para você
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Produção</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Fabricamos seu móvel com materiais premium
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Instalação</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Instalamos com perfeição no prazo combinado
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Chamada para Ação */}
        <section className="py-20 px-6 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar seu espaço?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende uma consulta gratuita e receba um orçamento personalizado sem compromisso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-700 px-8 py-4 rounded-lg font-bold hover:bg-stone-100 transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Phone size={20} />
                Falar no WhatsApp
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Mail size={20} />
                Enviar E-mail
              </button>
            </div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section id="contato" className="py-20 px-6 bg-white dark:bg-stone-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Entre em Contato
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Informações de Contato */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefone</h3>
                    <p className="text-stone-600 dark:text-stone-400">(81) 99999-9999</p>
                    <p className="text-sm text-stone-500 dark:text-stone-500 mt-1">
                      Seg a Sex: 8h às 18h | Sáb: 8h às 12h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg flex-shrink-0">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">E-mail</h3>
                    <p className="text-stone-600 dark:text-stone-400">contato@crisarquitetura.com</p>
                    <p className="text-sm text-stone-500 dark:text-stone-500 mt-1">
                      Respondemos em até 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Localização</h3>
                    <p className="text-stone-600 dark:text-stone-400">
                      Cabo de Santo Agostinho - PE
                    </p>
                    <p className="text-sm text-stone-500 dark:text-stone-500 mt-1">
                      Atendemos toda região metropolitana
                    </p>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="pt-6 border-t border-stone-200 dark:border-stone-700">
                  <h3 className="font-bold text-lg mb-4">Siga-nos nas redes sociais</h3>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="bg-stone-100 dark:bg-stone-700 p-3 rounded-lg hover:bg-amber-600 hover:text-white transition-all"
                    >
                      <Instagram size={24} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-stone-100 dark:bg-stone-700 p-3 rounded-lg hover:bg-amber-600 hover:text-white transition-all"
                    >
                      <Facebook size={24} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-stone-100 dark:bg-stone-700 p-3 rounded-lg hover:bg-amber-600 hover:text-white transition-all"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Formulário de Contato */}
              <form className="space-y-5">
                <div>
                  <label className="block mb-2 font-medium">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Mensagem</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none transition-all"
                    placeholder="Conte-nos sobre seu projeto e suas necessidades..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Enviar Mensagem
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-white py-8 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-stone-400">
              © 2024 Cris Arquitetura - Móveis Planejados. Todos os direitos reservados.
            </p>
            <p className="text-stone-500 text-sm mt-2">
              Cabo de Santo Agostinho - PE
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;