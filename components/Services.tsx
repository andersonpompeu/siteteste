import React from 'react';
import { ServiceItem } from '../types';
import serviceAssistance from '../assets/images/service-assistance.png';
import serviceMaintenance from '../assets/images/service-maintenance.png';
import serviceInstallation from '../assets/images/service-installation.png';
import serviceRental from '../assets/images/service-rental.png';

const services: ServiceItem[] = [
  {
    icon: 'support_agent',
    title: 'ASSISTÊNCIA',
    buttonText: 'Fale conosco',
    image: serviceAssistance
  },
  {
    icon: 'build',
    title: 'MANUTENÇÃO',
    buttonText: 'Agende agora',
    image: serviceMaintenance
  },
  {
    icon: 'plumbing',
    title: 'INSTALAÇÃO',
    buttonText: 'Agende agora',
    image: serviceInstallation
  },
  {
    icon: 'event_seat',
    title: 'LOCAÇÃO',
    buttonText: 'Alugue para seu evento',
    image: serviceRental
  },
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
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 h-96">
              {/* Image Background */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-end p-6 z-10">
                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 mx-auto w-fit">
                    <span className="material-icons-outlined text-4xl text-white">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <button className="bg-primary hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;