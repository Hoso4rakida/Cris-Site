import { useState } from "react";
import { Search, Filter, ArrowUpRight } from "lucide-react";

function Catalogo() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [busca, setBusca] = useState("");

  const categorias = ["Todos", "Cozinha", "Dormitório", "Sala", "Escritório", "Banheiro"];

  // Produtos de exemplo
  const produtos = [
    {
      id: 1,
      nome: "Cozinha Moderna Premium",
      categoria: "Cozinha",
      preco: "A partir de R$ 12.000",
      imagem: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=400&h=300&fit=crop",
      descricao: "Acabamento em laca branca brilhante com bancada de quartzo"
    },
    {
      id: 2,
      nome: "Dormitório Casal Completo",
      categoria: "Dormitório",
      preco: "A partir de R$ 15.000",
      imagem: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop",
      descricao: "Guarda-roupa + criados-mudos + painel TV + cabeceira"
    },
    {
      id: 3,
      nome: "Sala de Estar Integrada",
      categoria: "Sala",
      preco: "A partir de R$ 8.000",
      imagem: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      descricao: "Rack + painel + prateleiras decorativas + nicho"
    },
    {
      id: 4,
      nome: "Home Office Executivo",
      categoria: "Escritório",
      preco: "A partir de R$ 6.000",
      imagem: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
      descricao: "Mesa ampla + estante + armário suspenso + gaveteiro"
    },
    {
      id: 5,
      nome: "Cozinha Clássica Amadeirada",
      categoria: "Cozinha",
      preco: "A partir de R$ 10.000",
      imagem: "https://images.unsplash.com/photo-1565183928294-7d22f6959e2e?w=400&h=300&fit=crop",
      descricao: "Acabamento em madeira natural com detalhes em vidro"
    },
    {
      id: 6,
      nome: "Banheiro Planejado",
      categoria: "Banheiro",
      preco: "A partir de R$ 5.000",
      imagem: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop",
      descricao: "Armário sob pia + bancada + espelheira + nicho box"
    },
    {
      id: 7,
      nome: "Quarto Infantil Planejado",
      categoria: "Dormitório",
      preco: "A partir de R$ 9.000",
      imagem: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop",
      descricao: "Cama com gavetas + guarda-roupa + escrivaninha + prateleiras"
    },
    {
      id: 8,
      nome: "Área Gourmet Completa",
      categoria: "Cozinha",
      preco: "A partir de R$ 18.000",
      imagem: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      descricao: "Bancada + churrasqueira + armários + adega + pia"
    },
    {
      id: 9,
      nome: "Closet Planejado",
      categoria: "Dormitório",
      preco: "A partir de R$ 20.000",
      imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      descricao: "Closet completo com iluminação LED e espelho grande"
    }
  ];

  // Filtrar produtos
  const produtosFiltrados = produtos.filter(produto => {
    const matchCategoria = categoriaAtiva === "Todos" || produto.categoria === categoriaAtiva;
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       produto.descricao.toLowerCase().includes(busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Cabeçalho */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900 dark:text-white">
          Nossos Projetos
        </h2>
        <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          Explore nossa coleção de móveis planejados. Cada projeto é único e totalmente personalizado.
        </p>
      </div>

      {/* Barra de busca e filtros */}
      <div className="mb-10 space-y-6">
        {/* Busca */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
          />
        </div>

        {/* Filtros de categoria */}
        <div className="flex flex-wrap justify-center gap-3">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                categoriaAtiva === cat
                  ? "bg-amber-600 text-white shadow-lg scale-105"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Contador de resultados */}
        <div className="text-center text-stone-600 dark:text-stone-400">
          {produtosFiltrados.length} {produtosFiltrados.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}
        </div>
      </div>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            className="group bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Imagem */}
            <div className="relative h-64 overflow-hidden bg-stone-200 dark:bg-stone-700">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Botão sobre a imagem */}
              <button className="absolute bottom-4 right-4 bg-white text-stone-900 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg">
                <ArrowUpRight size={20} />
              </button>

              {/* Badge da categoria */}
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {produto.categoria}
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {produto.nome}
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm mb-4 line-clamp-2">
                {produto.descricao}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-700">
                <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                  {produto.preco}
                </span>
                <button className="text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors flex items-center gap-1">
                  Ver detalhes
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mensagem se não houver resultados */}
      {produtosFiltrados.length === 0 && (
        <div className="text-center py-16">
          <Filter className="mx-auto mb-4 text-stone-400" size={64} />
          <h3 className="text-2xl font-bold mb-2 text-stone-900 dark:text-white">
            Nenhum projeto encontrado
          </h3>
          <p className="text-stone-600 dark:text-stone-400 mb-6">
            Tente ajustar os filtros ou buscar por outros termos
          </p>
          <button 
            onClick={() => {
              setCategoriaAtiva("Todos");
              setBusca("");
            }}
            className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all"
          >
            Limpar Filtros
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gradient-to-br from-amber-50 to-orange-50 dark:from-stone-800 dark:to-stone-900 rounded-2xl p-8 md:p-12">
        <h3 className="text-3xl font-bold mb-4 text-stone-900 dark:text-white">
          Não encontrou o que procurava?
        </h3>
        <p className="text-lg text-stone-600 dark:text-stone-400 mb-6 max-w-2xl mx-auto">
          Criamos projetos totalmente personalizados para atender suas necessidades específicas.
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 shadow-lg">
          Solicite seu Projeto Personalizado
        </button>
      </div>
    </section>
  );
}

export default Catalogo;