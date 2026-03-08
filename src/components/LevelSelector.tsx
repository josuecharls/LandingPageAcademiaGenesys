import { BookOpen, GraduationCap, Award, Building2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { levelLabels, levelDescriptions, type Level } from '../data/pricing';

const levelIcons: Record<Level, React.ReactNode> = {
    primaria: <BookOpen size={28} />,
    secundaria: <GraduationCap size={28} />,
    preuniversitario: <Award size={28} />,
    universitario: <Building2 size={28} />,
};

const levelGradients: Record<Level, { icon: string; glow: string; border: string }> = {
    primaria: {
        icon: 'from-emerald-400 to-teal-400',
        glow: 'shadow-emerald-500/20',
        border: 'hover:border-emerald-500/30',
    },
    secundaria: {
        icon: 'from-blue-400 to-indigo-400',
        glow: 'shadow-blue-500/20',
        border: 'hover:border-blue-500/30',
    },
    preuniversitario: {
        icon: 'from-violet-400 to-purple-400',
        glow: 'shadow-violet-500/20',
        border: 'hover:border-violet-500/30',
    },
    universitario: {
        icon: 'from-amber-400 to-orange-400',
        glow: 'shadow-amber-500/20',
        border: 'hover:border-amber-500/30',
    },
};

export default function LevelSelector() {
    const { selectedLevel, setSelectedLevel } = useStore();

    const handleSelect = (level: Level) => {
        setSelectedLevel(level);
        setTimeout(() => {
            document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    };

    return (
        <section id="niveles" className="py-20 sm:py-28 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-genesys-night via-genesys-deep to-genesys-night" />
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
            }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-sm font-semibold tracking-wider text-genesys-indigo uppercase mb-3">
                        Niveles de Estudio
                    </span>
                    <h2 className="section-title mb-4 text-white">
                        ¿En qué nivel se encuentra{' '}
                        <span className="gradient-text">tu hijo?</span>
                    </h2>
                    <p className="section-subtitle">
                        Selecciona el nivel educativo para ver los planes y precios
                        disponibles.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {(Object.keys(levelLabels) as Level[]).map((level) => {
                        const gradients = levelGradients[level];
                        const isSelected = selectedLevel === level;

                        return (
                            <button
                                key={level}
                                onClick={() => handleSelect(level)}
                                className={`relative group p-6 rounded-2xl border transition-all duration-500 text-left
                                    bg-white/[0.02] backdrop-blur-sm
                                    ${isSelected
                                        ? `border-genesys-indigo/50 bg-genesys-indigo/[0.08] shadow-xl ${gradients.glow} scale-[1.02]`
                                        : `border-white/[0.06] ${gradients.border} hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20`
                                    }
                                `}
                            >
                                {/* Selected indicator */}
                                {isSelected && (
                                    <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-gradient-to-r from-genesys-indigo to-genesys-violet rounded-full flex items-center justify-center shadow-lg animate-glow-pulse">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients.icon} bg-opacity-10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${gradients.glow}`}>
                                    <div className="text-white">
                                        {levelIcons[level]}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1 font-display">
                                    {levelLabels[level]}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {levelDescriptions[level]}
                                </p>

                                {/* Bottom glow line on selected */}
                                {isSelected && (
                                    <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-genesys-indigo to-transparent rounded-full" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
