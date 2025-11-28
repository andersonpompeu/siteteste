import React from 'react';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = '5544999999999'; // Substitua pelo número real
    const message = 'Olá! Gostaria de mais informações sobre os serviços da Climatec.';

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group flex items-center gap-2 px-4 py-3"
            aria-label="Fale conosco no WhatsApp"
        >
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>

            {/* Icon and Text */}
            <span className="material-icons-outlined text-2xl relative z-10">whatsapp</span>
            <span className="font-semibold text-sm relative z-10">Orçamento Grátis</span>
        </button>
    );
};

export default WhatsAppButton;
