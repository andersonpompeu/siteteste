import React from 'react';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = '5544999999999'; // Substitua pelo número real
    const message = 'Olá! Gostaria de mais informações sobre os serviços da Climatec.';

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
            {/* Pulse animation layer */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

            {/* Main button */}
            <button
                onClick={handleClick}
                className="relative bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 px-4 py-2 h-12"
                aria-label="Solicitar orçamento grátis no WhatsApp"
            >
                <span className="material-icons-outlined text-xl">whatsapp</span>
                <span className="font-semibold text-xs uppercase tracking-wide whitespace-nowrap">Orçamento Grátis</span>
            </button>
        </div>
    );
};

export default WhatsAppButton;
