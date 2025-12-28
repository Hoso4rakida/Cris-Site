import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* O restante do conteúdo virá aqui depois */}
      <main className="pt-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Bem-vinda ao site!</h1>
      </main>
    </div>
  );
}

export default App;