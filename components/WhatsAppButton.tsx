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
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
            aria-label="Fale conosco no WhatsApp"
        >
            <span className="material-icons-outlined text-3xl">whatsapp</span>

            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Fale conosco!
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
            </div>

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        </button>
    );
};

export default WhatsAppButton;
