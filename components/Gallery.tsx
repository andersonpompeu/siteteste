import React from 'react';

const Gallery: React.FC = () => {
    const installations = [
        {
            title: 'Instalação Residencial',
            description: 'Split 12.000 BTUs - Sala de Estar',
            category: 'Residencial'
        },
        {
            title: 'Projeto Comercial',
            description: 'Sistema Multi-Split - Escritório',
            category: 'Comercial'
        },
        {
            title: 'Manutenção Preventiva',
            description: 'Limpeza e Higienização Completa',
            category: 'Manutenção'
        },
        {
            title: 'Instalação Industrial',
            description: 'Central de Ar - Galpão 500m²',
            category: 'Industrial'
        },
        {
            title: 'Retrofit Completo',
            description: 'Modernização de Sistema Antigo',
            category: 'Comercial'
        },
        {
            title: 'Instalação Premium',
            description: 'Inverter 24.000 BTUs - Cobertura',
            category: 'Residencial'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        Nossos Trabalhos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Galeria de Instalações
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Confira alguns dos nossos projetos realizados com excelência
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {installations.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-cyan-400 to-blue-500 h-80"
                        >
                            {/* Overlay com gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            {/* Ícone decorativo */}
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                                <span className="material-icons-outlined text-white text-2xl">
                                    {item.category === 'Residencial' ? 'home' :
                                        item.category === 'Comercial' ? 'business' :
                                            item.category === 'Industrial' ? 'factory' : 'build'}
                                </span>
                            </div>

                            {/* Badge de categoria */}
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full">
                                    {item.category}
                                </span>
                            </div>

                            {/* Conteúdo */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-200 mb-4">
                                    {item.description}
                                </p>

                                {/* Botão que aparece no hover */}
                                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100">
                                    <span>Ver Detalhes</span>
                                    <span className="material-icons-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>

                            {/* Efeito de brilho no hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Quer ver seu projeto aqui também?
                    </p>
                    <button className="bg-primary hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                        <span className="material-icons-outlined">camera_alt</span>
                        Solicitar Orçamento
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
