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
import BTUCalculator from './components/BTUCalculator';
import QuoteForm from './components/QuoteForm';
import Gallery from './components/Gallery';
import WhatsAppButton from './components/WhatsAppButton';
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
            <Gallery />
            {/* Navigation Actions */}
            <div className="py-16 bg-background-light dark:bg-background-dark">
              <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-gray-700 dark:text-white mb-8 text-center">
                  Ferramentas Úteis
                </h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <button
                    onClick={() => navigateTo('calculator')}
                    className="bg-gradient-to-r from-primary to-cyan-500 text-white text-lg font-semibold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <span className="material-icons-outlined text-3xl">calculate</span>
                    <div className="text-left">
                      <div>Calculadora de BTU</div>
                      <div className="text-sm opacity-90">Encontre o tamanho ideal</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigateTo('quote')}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <span className="material-icons-outlined text-3xl">request_quote</span>
                    <div className="text-left">
                      <div>Solicitar Orçamento</div>
                      <div className="text-sm opacity-90">Sem compromisso</div>
                    </div>
                  </button>
                </div>
              </div>
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
                <span>Conhecer Nossos Serviços</span>
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

        {currentScreen === 'calculator' && (
          <div className="animate-fade-in py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
            <div className="container mx-auto px-4">
              <button
                onClick={() => navigateTo('home')}
                className="mb-8 text-primary dark:text-cyan-400 hover:underline flex items-center gap-2"
              >
                <span className="material-icons-outlined">arrow_back</span>
                Voltar
              </button>
              <BTUCalculator />
            </div>
          </div>
        )}

        {currentScreen === 'quote' && (
          <div className="animate-fade-in py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
            <div className="container mx-auto px-4">
              <button
                onClick={() => navigateTo('home')}
                className="mb-8 text-primary dark:text-cyan-400 hover:underline flex items-center gap-2"
              >
                <span className="material-icons-outlined">arrow_back</span>
                Voltar
              </button>
              <QuoteForm />
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
