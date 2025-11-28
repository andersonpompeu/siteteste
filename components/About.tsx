import React from 'react';
import aboutTeam from '../src/assets/images/about-team.png';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-primary dark:text-white">
              Sobre a <span className="text-cyan-600 dark:text-cyan-400">empresa</span>
            </h2>
            <div className="inline-block bg-cyan-500 h-1 w-24 mt-3 rounded mb-8 lg:mx-0"></div>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                Há 9 anos no mercado, a Climatec é especialista em soluções completas de climatização.
                Localizada em Maringá, nossa loja física atende clientes de toda a região, enquanto
                nosso canal online leva qualidade e eficiência para todo o Brasil.
              </p>
              <p>
                Oferecemos uma ampla linha de climatizadores comerciais, domésticos e industriais,
                ideais para diferentes necessidades. Além disso, contamos com serviços de manutenção,
                assistência técnica, locação de climatizadores e instalação profissional, garantindo
                conforto e praticidade em todas as etapas.
              </p>
              <p>
                Na Climatec, nosso compromisso é criar ambientes agradáveis e funcionais, com produtos
                de alta performance e atendimento especializado. Transforme o clima do seu espaço com
                quem entende do assunto!
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img src={aboutTeam} alt="Equipe Climatec" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl">Equipe Especializada</p>
                <p className="text-sm opacity-90">Prontos para atender você</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;