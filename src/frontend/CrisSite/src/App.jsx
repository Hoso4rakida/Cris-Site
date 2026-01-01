import Navbar from "./components/Navbar";
import banner from "./assets/image1.webp";

function App() {
  return (
    // transition-colors faz o fundo mudar suavemente quando você clica no botão da Navbar
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-50 transition-colors duration-500">
      <Navbar />
      
      <main className="pt-16"> {/* Ajustado o pt-20 para pt-16 (tamanho padrão da h-16 da sua navbar) */}
        
        {/* BANNER: Adicionei 'relative' e 'overflow-hidden' */}
        <div 
          style={{ backgroundImage: `url(${banner})` }} 
          className="relative w-full h-[300px] md:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
        >
          {/* O FILTRO ESCURO: Agora ele fica preso dentro da div do banner */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* CONTEÚDO DO BANNER */}
          <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-6xl font-bold tracking-tight max-w-4xl">
              Bem-vindo à Cris Arquitetura
            </h1>
          </div>
        </div>
        
        {/* TEXTO ABAIXO DO BANNER: Adicionei um container para não ficar batendo nas bordas da tela */}
        <section className="max-w-4xl mx-auto py-12 px-6 text-lg leading-relaxed">
          <p className="mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur optio nam adipisci exercitationem earum velit et natus eligendi recusandae vitae?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tempora repellendus facere. Repellendus reiciendis tenetur ipsum.
          </p>
        </section>

      </main>
    </div>
  );
}

export default App;