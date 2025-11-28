import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { icon: 'support_agent', title: 'ASSISTÊNCIA', buttonText: 'Fale conosco' },
  { icon: 'build', title: 'MANUTENÇÃO', buttonText: 'Agende agora' },
  { icon: 'plumbing', title: 'INSTALAÇÃO', buttonText: 'Agende agora' },
  { icon: 'event_seat', title: 'LOCAÇÃO', buttonText: 'Alugue para seu evento' },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary dark:text-white">
          Adquira nossos <span className="text-cyan-600 dark:text-cyan-400">serviços</span>
        </h2>
        <div className="inline-block bg-cyan-500 h-1 w-24 mt-3 rounded mb-12"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-8 text-center flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
              <span className="material-icons-outlined text-5xl text-cyan-500 mb-4">{service.icon}</span>
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-6">{service.title}</h3>
              <button className="mt-auto bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-cyan-700 transition-colors w-full sm:w-auto">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;