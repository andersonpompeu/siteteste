import React, { useState } from 'react';

const BTUCalculator: React.FC = () => {
    const [area, setArea] = useState('');
    const [people, setPeople] = useState('2');
    const [sunExposure, setSunExposure] = useState('medium');
    const [electronics, setElectronics] = useState('medium');
    const [result, setResult] = useState<number | null>(null);

    const calculateBTU = () => {
        if (!area || parseFloat(area) <= 0) {
            alert('Por favor, insira uma área válida');
            return;
        }

        const areaNum = parseFloat(area);
        let btu = areaNum * 600; // Base: 600 BTU por m²

        // Ajuste por número de pessoas
        const peopleNum = parseInt(people);
        btu += (peopleNum - 2) * 600;

        // Ajuste por exposição solar
        if (sunExposure === 'high') btu *= 1.15;
        else if (sunExposure === 'low') btu *= 0.95;

        // Ajuste por eletrônicos
        if (electronics === 'high') btu += 1000;
        else if (electronics === 'low') btu -= 500;

        setResult(Math.round(btu));
    };

    const getRecommendation = () => {
        if (!result) return '';

        if (result <= 7500) return '7.000 BTUs';
        if (result <= 9000) return '9.000 BTUs';
        if (result <= 12000) return '12.000 BTUs';
        if (result <= 18000) return '18.000 BTUs';
        if (result <= 24000) return '24.000 BTUs';
        if (result <= 30000) return '30.000 BTUs';
        return '36.000 BTUs ou superior';
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
                <span className="material-icons-outlined text-4xl text-primary">calculate</span>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Calculadora de BTU
                </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
                Descubra qual a capacidade ideal de ar condicionado para o seu ambiente
            </p>

            <div className="space-y-6">
                {/* Área */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Área do ambiente (m²) *
                    </label>
                    <input
                        type="number"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="Ex: 20"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                    />
                </div>

                {/* Pessoas */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Número de pessoas no ambiente
                    </label>
                    <select
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
                    >
                        <option value="1">1 pessoa</option>
                        <option value="2">2 pessoas</option>
                        <option value="3">3 pessoas</option>
                        <option value="4">4 pessoas</option>
                        <option value="5">5+ pessoas</option>
                    </select>
                </div>

                {/* Exposição Solar */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Exposição ao sol
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {['low', 'medium', 'high'].map((level) => (
                            <button
                                key={level}
                                onClick={() => setSunExposure(level)}
                                className={`py-3 px-4 rounded-lg font-medium transition-all ${sunExposure === level
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {level === 'low' ? 'Pouca' : level === 'medium' ? 'Média' : 'Muita'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Eletrônicos */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Quantidade de eletrônicos
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {['low', 'medium', 'high'].map((level) => (
                            <button
                                key={level}
                                onClick={() => setElectronics(level)}
                                className={`py-3 px-4 rounded-lg font-medium transition-all ${electronics === level
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {level === 'low' ? 'Poucos' : level === 'medium' ? 'Médio' : 'Muitos'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Botão Calcular */}
                <button
                    onClick={calculateBTU}
                    className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <span className="material-icons-outlined">calculate</span>
                    Calcular BTU Necessário
                </button>

                {/* Resultado */}
                {result && (
                    <div className="mt-6 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-primary animate-fade-in">
                        <div className="text-center">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                                BTU Calculado
                            </p>
                            <p className="text-4xl font-bold text-primary dark:text-cyan-400 mb-4">
                                {result.toLocaleString()} BTUs
                            </p>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-4">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                                    Recomendação
                                </p>
                                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                                    {getRecommendation()}
                                </p>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                                * Este é um cálculo estimado. Consulte um especialista para uma avaliação precisa.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BTUCalculator;
