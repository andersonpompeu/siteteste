import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

const QuoteForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        service: 'installation',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Criar mensagem para WhatsApp
        const message = `
*Novo Orçamento - Climatec*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Serviço:* ${formData.service === 'installation' ? 'Instalação' : formData.service === 'maintenance' ? 'Manutenção' : 'Compra de Produto'}

*Mensagem:*
${formData.message}
    `.trim();

        const whatsappUrl = `https://wa.me/5544999999999?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
                <span className="material-icons-outlined text-4xl text-primary">request_quote</span>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Solicitar Orçamento
                </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
                Preencha o formulário e receba um orçamento personalizado sem compromisso
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Nome Completo *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                        placeholder="Seu nome"
                    />
                </div>

                {/* Email e Telefone */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                            placeholder="seu@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Telefone *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                            placeholder="(44) 99999-9999"
                        />
                    </div>
                </div>

                {/* Serviço */}
                <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Serviço Desejado *
                    </label>
                    <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                    >
                        <option value="installation">Instalação de Ar Condicionado</option>
                        <option value="maintenance">Manutenção Preventiva/Corretiva</option>
                        <option value="purchase">Compra de Produto</option>
                        <option value="other">Outro</option>
                    </select>
                </div>

                {/* Mensagem */}
                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Descreva suas necessidades..."
                    />
                </div>

                {/* Botão Submit */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <span className="material-icons-outlined">whatsapp</span>
                    Enviar via WhatsApp
                </button>

                {submitted && (
                    <div className="p-4 bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded-lg text-center animate-fade-in">
                        <p className="text-green-800 dark:text-green-200 font-semibold">
                            ✓ Redirecionando para WhatsApp...
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default QuoteForm;
