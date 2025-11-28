import React from 'react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'Climatizador Portátil Manual Y-5500',
    price: 1089.90,
    dimensions: '0,50 X 0,97 X 0,31',
    capacity: '40L',
    power: '150W',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3o8pFJpNacmtrg9Mb_q6AMSLGU3fGZjs1edbk7vYjxKSjawEW-r7XEfbrobxdcVbzAXomCy8ZRZokJGdHuwNSM-fJo5lLZxwivJbgImb8kPVvzUr5AN3SzgcuN2ISY7vzU3nmqKOpsdnZI6zSLm2n_ZNil_b10WIp8wUO1KOqd_VyffGkJag-Zq2uaNmdQ4wCjVxy6dOwv80QSsZZWZajZ0IRCNJ7Z4EMBKVm9SWnej0k1AdX-jlRab2A5ffEtI0RDPOmWixizYVb'
  },
  {
    id: 2,
    name: 'Climatizador Portátil Manual Y-12000',
    price: 1779.90,
    dimensions: '0,60 X 1,20 X 0,40',
    capacity: '60L',
    power: '380W',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIEHM9OiRX6H-1a7fkXKz_5zBN6npsU5hWIrqQ9WtCl03M6RQ1grfwkDfeFcHLbK78hHR9ePUxitB5nrdfzD94ryS2WbVePUCPeHXU91FaDVTTTZiZKDqo0njxKkTENMwjScYaqEmQD4dIfeBe0LZlOqQ7bEfJx6RVAocKGi835dSgFAg1VoiFOzfYJu6J89Vjt4S4WXllvxCKSYYVWj_rVyGEoZMVa7-_8EEKmNQTk6hgk6Nkp5tIzr8o8Dq6UqedZHBdYVkXG3Gh'
  },
  {
    id: 3,
    name: 'Climatizador Portátil Manual Y-16000',
    price: 2499.90,
    dimensions: '0,72 X 1,32 X 0,48',
    capacity: '100L',
    power: '480W',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3K9lNEytMm8A04unr4jLca1JpRp4-J03TRDmJMgXpZ9rMKON3p_S-vMIdoT20enRlwzS9aw146ndidTSG04lOCoGH9XotIZgvhBAqwhd6RcZG3RWsXDCFOmpGlt8vb7_vt9AGxIj5VLKBN2FwAW0a13rzR-nQYUzc7M-ILOfyCJQeccoPgVnMe62YMAfPvzoLSRHyT0uh_QLtdQTt1p79sr8w20yCkIaYl4dAOsB6yxSEAKXGHcd6EekflC4yefFqAaimmX_Evylr'
  }
];

const formatPrice = (price: number) => {
  const [int, dec] = price.toFixed(2).split('.');
  return { int, dec };
};

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-cyan-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary dark:text-white">
            Climatizadores em <span className="text-cyan-600 dark:text-cyan-400">alta</span>
          </h2>
          <div className="inline-block bg-cyan-500 h-1 w-24 mt-3 rounded"></div>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {products.map((product, index) => {
              const { int, dec } = formatPrice(product.price);
              // Determine scaling for the "carousel" effect where center is larger
              // In a static grid mapping, we simulate this.
              const isCenter = index === 1;
              const scaleClass = isCenter 
                ? "md:scale-100 md:opacity-100 z-10" 
                : "md:scale-95 md:opacity-90 hover:opacity-100 hover:scale-100 z-0";

              return (
                <div 
                  key={product.id} 
                  className={`bg-white dark:bg-gray-900 rounded-lg shadow-xl flex-none w-full md:w-80 lg:w-96 flex flex-col transition-all duration-300 ease-in-out ${scaleClass}`}
                >
                  <img 
                    alt={product.name} 
                    className="w-full h-64 object-contain p-6" 
                    src={product.image} 
                  />
                  <div className="p-6 text-center flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-primary dark:text-cyan-400 mb-2 line-clamp-2 h-14 flex items-center justify-center">{product.name}</h3>
                    
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1 mt-2">
                      <span className="text-2xl font-semibold text-primary dark:text-cyan-400 mr-1">R$</span>
                      <span className="text-5xl font-bold text-primary dark:text-cyan-400">{int}</span>
                      <span className="text-2xl font-semibold text-primary dark:text-cyan-400">,{dec}</span>
                    </div>
                    
                    <p className="text-red-500 font-semibold text-xs uppercase tracking-wide mb-6">NO PIX OU DINHEIRO</p>
                    
                    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 flex-grow">
                      <p className="border-t border-dashed border-gray-300 dark:border-gray-600 pt-3">
                        <span className="font-medium">Medidas (LXAXP):</span> {product.dimensions}
                      </p>
                      <p className="border-t border-dashed border-gray-300 dark:border-gray-600 pt-3">
                        <span className="font-medium">Litros:</span> {product.capacity}
                      </p>
                      <p className="border-t border-dashed border-gray-300 dark:border-gray-600 pt-3">
                        <span className="font-medium">Potência:</span> {product.power}
                      </p>
                    </div>
                    
                    <button className="w-full mt-auto bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                      COMPRAR
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            <button className="w-3 h-3 bg-primary rounded-full transition-all duration-300 hover:scale-125"></button>
            <button className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300 hover:bg-primary hover:scale-125"></button>
            <button className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300 hover:bg-primary hover:scale-125"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;