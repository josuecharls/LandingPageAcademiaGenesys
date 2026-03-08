import { User, Users, Clock, Calendar, CalendarDays, CalendarRange, Star, Info, TrendingDown } from 'lucide-react';
import { useStore } from '../store/useStore';
import {
    individualPricing,
    grupalPricing,
    calculateIndividualSavings,
    calculateGrupalSavings,
    levelLabels,
    planDurationLabels,
    type Level,
    type PlanDuration,
} from '../data/pricing';

const planIcons: Record<string, React.ReactNode> = {
    diario: <Clock size={22} />,
    semanal: <Calendar size={22} />,
    mensual: <CalendarDays size={22} />,
    anual: <CalendarRange size={22} />,
};

export default function PricingSection() {
    const { selectedLevel, selectedPlanType, setSelectedPlanType, setSelectedPlan } = useStore();

    if (!selectedLevel) {
        return (
            <section id="planes" className="py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-genesys-night to-genesys-deep" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-sm font-semibold tracking-wider text-genesys-indigo uppercase mb-3">
                        Nuestros Planes
                    </span>
                    <h2 className="section-title mb-4 text-white">
                        Planes <span className="gradient-text">a tu medida</span>
                    </h2>
                    <div className="mt-12 glass-card rounded-2xl p-12 max-w-lg mx-auto">
                        <div className="w-16 h-16 bg-genesys-indigo/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                            <Info size={28} className="text-genesys-indigo" />
                        </div>
                        <p className="text-gray-400 text-lg">
                            Selecciona un <strong className="text-white">nivel de estudio</strong> arriba para ver los planes y precios disponibles.
                        </p>
                        <a href="#niveles" className="inline-block mt-6 btn-primary text-sm">
                            Ir a Niveles
                        </a>
                    </div>
                </div>
            </section>
        );
    }

    const handleSelectPlan = (plan: PlanDuration) => {
        setSelectedPlan(plan);
        setTimeout(() => {
            document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    };

    return (
        <section id="planes" className="py-20 sm:py-28 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-genesys-deep via-genesys-night to-genesys-deep" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-genesys-indigo/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-genesys-violet/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block text-sm font-semibold tracking-wider text-genesys-indigo uppercase mb-3">
                        Nuestros Planes
                    </span>
                    <h2 className="section-title mb-4 text-white">
                        Planes para{' '}
                        <span className="gradient-text">{levelLabels[selectedLevel]}</span>
                    </h2>
                    <p className="section-subtitle">
                        Elige entre clases individuales o grupales según tu preferencia.
                    </p>
                </div>

                {/* Toggle Individual / Grupal */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white/[0.04] border border-white/[0.08] rounded-xl p-1.5 gap-1">
                        <button
                            onClick={() => setSelectedPlanType('individual')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-400 ${selectedPlanType === 'individual'
                                ? 'gradient-bg text-white shadow-lg shadow-genesys-indigo/25'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            <User size={18} />
                            Individual
                        </button>
                        <button
                            onClick={() => setSelectedPlanType('grupal')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-400 ${selectedPlanType === 'grupal'
                                ? 'gradient-bg text-white shadow-lg shadow-genesys-indigo/25'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            <Users size={18} />
                            Grupal
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                {selectedPlanType === 'individual'
                    ? renderIndividualPlans(selectedLevel, handleSelectPlan)
                    : renderGrupalPlans(selectedLevel, handleSelectPlan)}
            </div>
        </section>
    );
}

function renderIndividualPlans(level: Level, onSelect: (plan: PlanDuration) => void) {
    const plans = individualPricing[level];
    const durations: PlanDuration[] = ['diario', 'semanal', 'mensual', 'anual'];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {durations.map((d) => {
                const isRecommended = d === 'mensual';
                let price: string;
                let period: string;
                let details: string[] = [];
                let savings: number | null = null;

                if (d === 'diario') {
                    price = `S/ ${plans.diario.pricePerHour}`;
                    period = '/ hora';
                    details = ['Sesión individual', 'Horario flexible', 'Sin compromiso'];
                } else if (d === 'semanal') {
                    price = `S/ ${plans.semanal.price}`;
                    period = '/ semana';
                    details = [
                        `${plans.semanal.daysPerWeek} días por semana`,
                        `${plans.semanal.hours} horas semanales`,
                        'Profesor asignado',
                    ];
                    savings = calculateIndividualSavings(level, 'semanal');
                } else if (d === 'mensual') {
                    price = `S/ ${plans.mensual.price}`;
                    period = '/ mes';
                    details = [
                        `${plans.mensual.days} días al mes`,
                        `${plans.mensual.hours} horas mensuales`,
                        'Seguimiento personalizado',
                    ];
                    savings = calculateIndividualSavings(level, 'mensual');
                } else {
                    price = `S/ ${plans.anual.price}`;
                    period = '/ año';
                    details = [
                        `${plans.anual.hoursPerMonth} hrs/mes × ${plans.anual.months} meses`,
                        'Máximo ahorro',
                        'Acompañamiento continuo',
                    ];
                    savings = calculateIndividualSavings(level, 'anual');
                }

                return (
                    <div
                        key={d}
                        className={`relative rounded-2xl p-6 pt-8 flex flex-col transition-all duration-500
                            ${isRecommended
                                ? 'glass-card border border-genesys-indigo/30 shadow-xl shadow-genesys-indigo/10 scale-[1.02] lg:scale-105 hover:shadow-2xl hover:shadow-genesys-indigo/20'
                                : 'glass-card border border-white/[0.06] hover:border-white/[0.12] hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1'
                            }`}
                    >
                        {isRecommended && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap z-10">
                                <Star size={12} fill="white" /> RECOMENDADO
                            </div>
                        )}

                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isRecommended ? 'bg-genesys-indigo/15 text-genesys-indigo' : 'bg-white/[0.04] text-gray-500'
                                }`}>
                                {planIcons[d]}
                            </div>
                            {savings !== null && savings > 0 && (
                                <div className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-emerald-500/20">
                                    <TrendingDown size={12} /> Ahorras S/ {savings}
                                </div>
                            )}
                        </div>

                        <h3 className="text-lg font-bold text-white mb-1 font-display">
                            {planDurationLabels[d]}
                        </h3>

                        <div className="flex items-baseline gap-1 mb-5">
                            <span className={`text-3xl font-extrabold font-display ${isRecommended ? 'gradient-text' : 'text-white'}`}>
                                {price}
                            </span>
                            <span className="text-sm text-gray-500">{period}</span>
                        </div>

                        <ul className="space-y-3 mb-6 flex-1">
                            {details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                                    <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isRecommended ? 'text-genesys-indigo' : 'text-genesys-cyan/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {detail}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => onSelect(d)}
                            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${isRecommended
                                ? 'btn-primary'
                                : 'bg-white/[0.04] text-gray-300 hover:bg-genesys-indigo/10 hover:text-white border border-white/[0.08] hover:border-genesys-indigo/30 hover:shadow-md hover:shadow-genesys-indigo/10'
                                }`}
                        >
                            Elegir Plan
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

function renderGrupalPlans(level: Level, onSelect: (plan: PlanDuration) => void) {
    const effectiveLevel = (level === 'preuniversitario' ? 'preuniversitario' : level) as Level;
    const plans = grupalPricing[effectiveLevel];
    const durations: ('diario' | 'semanal' | 'mensual')[] = ['diario', 'semanal', 'mensual'];

    return (
        <div>
            <div className="flex items-center justify-center gap-2 mb-8 text-sm text-gray-400 bg-genesys-indigo/5 border border-genesys-indigo/10 rounded-xl p-3 max-w-md mx-auto">
                <Info size={16} className="text-genesys-indigo flex-shrink-0" />
                <span>Precio por alumno. Desde 2 estudiantes. Se pueden agregar más después.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
                {durations.map((d) => {
                    const isRecommended = d === 'mensual';
                    let price: string;
                    let period: string;
                    let details: string[] = [];
                    let savings: number | null = null;

                    if (d === 'diario') {
                        price = `S/ ${plans.diario.pricePerHour}`;
                        period = '/ hora x alumno';
                        details = ['Sesión grupal', 'Mínimo 2 alumnos', 'Sin compromiso'];
                    } else if (d === 'semanal') {
                        price = `S/ ${plans.semanal.pricePerHour * plans.semanal.hours}`;
                        period = '/ semana x alumno';
                        details = [
                            `S/ ${plans.semanal.pricePerHour}/hora × ${plans.semanal.hours} horas`,
                            plans.semanal.note,
                            'Mínimo 2 alumnos',
                        ];
                        savings = calculateGrupalSavings(effectiveLevel, 'semanal');
                    } else {
                        price = `S/ ${plans.mensual.pricePerHour * plans.mensual.hours}`;
                        period = '/ mes x alumno';
                        details = [
                            `S/ ${plans.mensual.pricePerHour}/hora × ${plans.mensual.hours} horas`,
                            plans.mensual.note,
                            'Mínimo 2 alumnos',
                        ];
                        savings = calculateGrupalSavings(effectiveLevel, 'mensual');
                    }

                    return (
                        <div
                            key={d}
                            className={`relative rounded-2xl p-6 pt-8 flex flex-col transition-all duration-500
                                ${isRecommended
                                    ? 'glass-card border border-genesys-indigo/30 shadow-xl shadow-genesys-indigo/10 scale-[1.02] sm:scale-105 hover:shadow-2xl hover:shadow-genesys-indigo/20'
                                    : 'glass-card border border-white/[0.06] hover:border-white/[0.12] hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1'
                                }`}
                        >
                            {isRecommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap z-10">
                                    <Star size={12} fill="white" /> RECOMENDADO
                                </div>
                            )}

                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isRecommended ? 'bg-genesys-indigo/15 text-genesys-indigo' : 'bg-white/[0.04] text-gray-500'
                                    }`}>
                                    {planIcons[d]}
                                </div>
                                {savings !== null && savings > 0 && (
                                    <div className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-emerald-500/20">
                                        <TrendingDown size={12} /> Ahorras S/ {savings}
                                    </div>
                                )}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-1 font-display">
                                {planDurationLabels[d]}
                            </h3>

                            <div className="flex items-baseline gap-1 mb-5">
                                <span className={`text-3xl font-extrabold font-display ${isRecommended ? 'gradient-text' : 'text-white'}`}>
                                    {price}
                                </span>
                                <span className="text-xs text-gray-500">{period}</span>
                            </div>

                            <ul className="space-y-3 mb-6 flex-1">
                                {details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                                        <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isRecommended ? 'text-genesys-indigo' : 'text-genesys-cyan/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => onSelect(d as PlanDuration)}
                                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${isRecommended
                                    ? 'btn-primary'
                                    : 'bg-white/[0.04] text-gray-300 hover:bg-genesys-indigo/10 hover:text-white border border-white/[0.08] hover:border-genesys-indigo/30 hover:shadow-md hover:shadow-genesys-indigo/10'
                                    }`}
                            >
                                Elegir Plan
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
