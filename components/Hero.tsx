import React from 'react';

const Hero: React.FC = () => {
  const categories = [
    { icon: 'fitness_center', label: 'Academias', color: 'primary' },
    { icon: 'desktop_windows', label: 'Escritórios', color: 'cyan-500' },
    { icon: 'shopping_cart', label: 'Supermercados', color: 'primary' },
    { icon: 'celebration', label: 'Eventos', color: 'cyan-500' },
    { icon: 'warehouse', label: 'Galpões', color: 'primary' },
    { icon: 'precision_manufacturing', label: 'Linhas de produção', color: 'cyan-500' },
  ];

  return (
    <section className="hero-bg py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-4">Onde é possível</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-cyan-600 dark:text-cyan-400">instalar climatizadores?</h2>
        <div className="inline-block bg-cyan-500 h-1 w-32 mt-4 rounded"></div>
      </div>

      {/* Navigation Arrows (Visual Only for Hero vibe) */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 z-20 hidden md:block">
        <button className="bg-white/50 dark:bg-gray-800/50 p-2 rounded-full text-primary dark:text-white hover:bg-white dark:hover:bg-gray-700 transition">
          <span className="material-icons-outlined">chevron_left</span>
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 z-20 hidden md:block">
        <button className="bg-white/50 dark:bg-gray-800/50 p-2 rounded-full text-primary dark:text-white hover:bg-white dark:hover:bg-gray-700 transition">
          <span className="material-icons-outlined">chevron_right</span>
        </button>
      </div>

      <div className="container mx-auto px-6 mt-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className={`w-24 h-24 flex items-center justify-center ${cat.color === 'primary' ? 'bg-primary' : 'bg-cyan-500'} text-white rounded-full mb-3 transform transition-transform group-hover:scale-110 duration-300 shadow-lg`}>
                <span className="material-icons-outlined text-4xl">{cat.icon}</span>
              </div>
              <p className={`font-semibold ${cat.color === 'primary' ? 'text-primary dark:text-cyan-400' : 'text-cyan-600 dark:text-cyan-300'}`}>{cat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;