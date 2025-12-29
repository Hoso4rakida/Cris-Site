import React, { useState } from 'react';
import { Menu, X, Sofa } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); //Controla o estado do menu mobile

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Catálogo', href: '#' },
    { name: 'Sobre', href: '#' },
    { name: 'Contato', href: '#' }
  ];

  return (
    <nav className="rounded-none bg-white dark:bg-stone-950 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/*Parte da logo do site */}
          <div className="flex gap-2">
            <Sofa className="text-amber-600" size={28} />
            <span className="text-xl font-bold text-stone-800 dark:text-white tracking-tight">
              Cris Arquitetura
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 dark:text-stone-300 hover:text-amber-700 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 dark:text-stone-300 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Aberto */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-stone-900 border-t border-stone-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-amber-50 hover:text-amber-700 rounded-md"
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