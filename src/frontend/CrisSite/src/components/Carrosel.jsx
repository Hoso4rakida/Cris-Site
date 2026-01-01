import banner1 from "./assets/image1.webp";
import banner2 from "./assets/image2.webp";
import banner3 from "./assets/image3.webp";

function Carrosel() {
  const imagens = [banner1, banner2, banner3];

  return (
    <main className="pt-20">
      {/* MOLDURA: Centralizada, esconde o que vaza, e define a largura */}
      <div className="mx-auto w-[90%] overflow-hidden relative border border-stone-200">
        
        {/* O TREM: flex para alinhar, animate-scroll para mover, e largura total */}
        <div className="flex w-[200%] animate-scroll">
          
          {/* Duplicamos o array para o efeito infinito */}
          {[...imagens, ...imagens].map((img, index) => (
            <div 
              key={index}
              style={{ backgroundImage: `url(${img})` }}
              className="w-full h-[500px] bg-cover bg-center flex-shrink-0 shadow-[inset_0_35px_60px_rgba(0,0,0,0.6)]"
            />
          ))}
          
        </div>
      </div>
    </main>
  );
}

export default Carrosel;