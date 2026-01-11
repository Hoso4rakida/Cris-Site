import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio"; // Sugestão: renomear Catalogo para Portfolio
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight, Ruler, ClipboardCheck, PenTool } from "lucide-react";
import banner from "./assets/image1.webp";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-50 transition-colors duration-500">
      <Navbar />
      
      <main>
        {/* Banner Principal - Foco em Concepção e Consultoria */}
        <section 
          style={{ backgroundImage: `url(${banner})` }} 
          className="relative w-full h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
          
          <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mb-6 animate-fade-in">
              Arquitetura que traduz sua essência em espaços
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
              Projetos arquitetônicos, interiores e consultoria técnica com foco em bem-estar e funcionalidade.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2">
              Agende uma Reunião
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

        {/* Seção Sobre - Foco na Expertise Técnica */}
        <section id="sobre" className="py-20 px-6 bg-white dark:bg-stone-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cris Arquitetura & Interiores
              </h2>
              <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
                Acreditamos que a arquitetura vai além do desenho; é sobre entender pessoas e otimizar a forma como elas vivem. Com mais de 10 anos de atuação, desenvolvemos soluções técnicas e estéticas que valorizam o seu patrimônio e priorizam o conforto.
              </p>
            </div>

            {/* Diferenciais de Arquiteto */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center text-amber-600 mb-4"><PenTool size={48} /></div>
                <h3 className="text-2xl font-bold mb-3">Projeto Autoral</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Soluções exclusivas desenvolvidas do zero, respeitando seu orçamento e estilo de vida.
                </p>
              </div>
              
              <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center text-amber-600 mb-4"><ClipboardCheck size={48} /></div>
                <h3 className="text-2xl font-bold mb-3">Gestão de Obras</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Acompanhamento técnico para garantir que o executado seja fiel ao projetado.
                </p>
              </div>
              
              <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center text-amber-600 mb-4"><Ruler size={48} /></div>
                <h3 className="text-2xl font-bold mb-3">Detalhamento Técnico</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Plantas precisas e especificações de materiais que evitam desperdícios na obra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfólio - Onde ficava o catálogo */}
        <section id="portfolio" className="bg-stone-50 dark:bg-stone-900">
          <div className="py-10 text-center">
             <h2 className="text-3xl font-bold">Portfólio de Projetos</h2>
             <p className="text-stone-500">Conheça algumas de nossas criações recentes</p>
          </div>
          <Portfolio /> 
        </section>

        {/* Como Funciona o Processo Criativo */}
        <section className="py-20 px-6 bg-white dark:bg-stone-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Nossa Metodologia
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-2 border-amber-600">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Briefing</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Entendemos suas necessidades, rotina e expectativas para o espaço.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-2 border-amber-600">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Estudo Preliminar</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Apresentação de conceitos, layout e visualização 3D realista.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-2 border-amber-600">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Executivo</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Desenvolvimento técnico completo para guia de fornecedores e obra.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-2 border-amber-600">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Acompanhamento</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Visitas técnicas periódicas para garantir a qualidade da execução.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Chamada para Ação */}
        <section className="py-20 px-6 bg-stone-900 text-white border-y border-amber-600/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos construir sua ideia juntos?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-light">
              Desde uma pequena reforma até grandes construções residenciais e comerciais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Phone size={20} />
                Agendar Consultoria
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Mail size={20} />
                Solicitar Proposta
              </button>
            </div>
          </div>
        </section>

        {/* Seção de Contato e Footer (Mesma estrutura, apenas textos ajustados) */}
        {/* ... (Manter o restante do seu código de contato aqui, apenas trocando "Móveis Planejados" por "Arquitetura & Interiores" no footer) */}
        
        <footer className="bg-stone-950 text-white py-8 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-stone-400 italic">
              "Arquitetura é a arte que abriga a vida."
            </p>
            <p className="text-stone-500 text-sm mt-4">
              © 2026 Cris Arquitetura & Interiores. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;