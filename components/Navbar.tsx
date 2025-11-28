import React, { useState } from 'react';
import { Screen } from '../types';

interface NavbarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentScreen, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNav = (screen: Screen) => {
    onNavigate(screen);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const getLinkClass = (screen: Screen) => {
    return currentScreen === screen
      ? "text-primary border-b-2 border-primary pb-1 cursor-pointer font-semibold"
      : "hover:text-primary dark:hover:text-cyan-400 transition-colors cursor-pointer";
  };

  const getMobileLinkClass = (screen: Screen) => {
    return currentScreen === screen
      ? "text-primary font-semibold cursor-pointer pl-2 border-l-4 border-primary"
      : "hover:text-primary dark:hover:text-cyan-400 transition-colors cursor-pointer pl-3";
  };

  return (
    <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between flex-wrap">
          <a className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('home')}>
            <div className="bg-primary text-white p-2 rounded-full shadow-md">
              <span className="material-icons-outlined">ac_unit</span>
            </div>
            <div>
              <span className="text-xl font-bold text-primary dark:text-cyan-400">CLIMATEC</span>
              <p className="text-xs tracking-wider text-gray-500 dark:text-gray-400">AR CONDICIONADO</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a className={getLinkClass('home')} onClick={() => handleNav('home')}>INÍCIO</a>
            <a className={getLinkClass('products')} onClick={() => handleNav('products')}>PRODUTOS</a>
            <a className={getLinkClass('services')} onClick={() => handleNav('services')}>SERVIÇOS</a>
            <a className="hover:text-primary dark:hover:text-cyan-400 transition-colors cursor-pointer" onClick={scrollToContact}>CONTATO</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            <span className="material-icons-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
          </button>

          {/* Mobile Menu Dropdown */}
          <div className={`${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden w-full md:hidden transition-all duration-300 ease-in-out`}>
             <div className="flex flex-col space-y-4 text-sm font-medium py-4 border-t border-gray-100 dark:border-gray-800 mt-4">
              <a className={getMobileLinkClass('home')} onClick={() => handleNav('home')}>INÍCIO</a>
              <a className={getMobileLinkClass('products')} onClick={() => handleNav('products')}>PRODUTOS</a>
              <a className={getMobileLinkClass('services')} onClick={() => handleNav('services')}>SERVIÇOS</a>
              <a className="hover:text-primary dark:hover:text-cyan-400 transition-colors cursor-pointer pl-3" onClick={scrollToContact}>CONTATO</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
