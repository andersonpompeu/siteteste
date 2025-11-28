import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-display">
      <Navbar currentScreen={currentScreen} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {currentScreen === 'home' && (
          <div className="animate-fade-in">
            <Hero />
            <Categories />
            <About />
            <Stats />
            {/* Navigation Action */}
            <div className="py-16 bg-background-light dark:bg-background-dark text-center">
              <h3 className="text-2xl font-bold text-gray-700 dark:text-white mb-6">Encontre o Climatizador Ideal</h3>
              <button 
                onClick={() => navigateTo('products')}
                className="bg-primary text-white text-lg font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-cyan-700 hover:shadow-xl transition-all transform hover:scale-105 flex items-center mx-auto gap-3"
              >
                <span>Ver Produtos em Destaque</span>
                <span className="material-icons-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        )}

        {currentScreen === 'products' && (
          <div className="animate-fade-in">
            <FeaturedProducts />
            {/* Navigation Action */}
            <div className="py-16 bg-white dark:bg-gray-900 text-center border-t border-gray-100 dark:border-gray-800">
               <h3 className="text-2xl font-bold text-gray-700 dark:text-white mb-4">Precisa de Instalação ou Manutenção?</h3>
               <p className="text-gray-500 dark:text-gray-400 mb-8">Nossa equipe técnica está pronta para te atender.</p>
               <button 
                onClick={() => navigateTo('services')}
                className="bg-cyan-500 text-white text-lg font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-cyan-600 hover:shadow-xl transition-all transform hover:scale-105 flex items-center mx-auto gap-3"
              >
                <span>Conheça Nossos Serviços</span>
                <span className="material-icons-outlined">build</span>
              </button>
            </div>
          </div>
        )}

        {currentScreen === 'services' && (
          <div className="animate-fade-in">
            <Services />
            <Testimonials />
            {/* Navigation Action */}
            <div className="py-16 bg-background-light dark:bg-background-dark text-center">
              <button 
                onClick={() => navigateTo('home')}
                className="bg-transparent border-2 border-primary text-primary dark:text-cyan-400 text-lg font-semibold py-3 px-10 rounded-full hover:bg-primary hover:text-white transition-all flex items-center mx-auto gap-3"
              >
                <span className="material-icons-outlined">home</span>
                <span>Voltar ao Início</span>
              </button>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
