import React, { useState, useEffect } from "react"; // 1. Importamos o useEffect aqui
import { Menu, X, Sofa, Moon, Sun } from "lucide-react"; // Adicionei ícones de sol e lua
import { use } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // 3. O useEffect observa a mudança do isDark
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setIsDark(savedTheme === 'dark');
  }
}, []);


  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Catálogo", href: "#" },
    { name: "Sobre", href: "#" },
    { name: "Contato", href: "#" },
  ];

  return (
    <nav className="bg-white dark:bg-stone-950 fixed w-full z-50 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex gap-2 items-center">
            <Sofa className="text-amber-600" size={28} />
            <span className="text-xl font-bold text-stone-800 dark:text-white tracking-tight">
              Cris Arquitetura
            </span>
          </div>

          {/* Menu Desktop + Botão de Tema */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 dark:text-stone-300 hover:text-amber-700 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* BOTÃO DE TEMA DESKTOP */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-amber-400 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Botão Menu Mobile (E o de tema também no mobile) */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-stone-600 dark:text-amber-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 dark:text-stone-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Aberto */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-stone-800 hover:text-amber-700 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;