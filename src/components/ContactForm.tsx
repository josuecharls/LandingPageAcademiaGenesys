import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2, CheckCircle, AlertCircle, BookOpen, MessageSquare, Shield, Zap } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useStore } from '../store/useStore';
import { levelLabels, planDurationLabels } from '../data/pricing';
import { submitToGoogleSheets } from '../lib/submitForm';

const formSchema = z.object({
    nombreApoderado: z.string().min(3, 'Ingresa el nombre completo del apoderado'),
    nombreEstudiante: z.string().min(3, 'Ingresa el nombre completo del estudiante'),
    celular: z
        .string()
        .min(9, 'El número debe tener al menos 9 dígitos')
        .max(15, 'Número demasiado largo')
        .regex(/^[0-9+\-\s]+$/, 'Solo números, +, - y espacios'),
});

type FormValues = z.infer<typeof formSchema>;

const benefits = [
    { icon: <MessageSquare size={20} />, title: 'Respuesta en minutos', desc: 'Nos comunicaremos contigo rápidamente' },
    { icon: <Shield size={20} />, title: 'Totalmente personalizado', desc: 'Desde la primera sessión' },
    { icon: <Zap size={20} />, title: 'Horario flexible', desc: 'Nos acomodamos a tu horario' },
];

export default function ContactForm() {
    const { selectedLevel, selectedPlan, selectedPlanType } = useStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        if (!selectedLevel || !selectedPlan) {
            toast.error('Por favor selecciona un nivel y un plan antes de enviar.');
            return;
        }

        setIsSubmitting(true);
        try {
            const success = await submitToGoogleSheets({
                nombreApoderado: data.nombreApoderado,
                nombreEstudiante: data.nombreEstudiante,
                celular: data.celular,
                nivel: levelLabels[selectedLevel],
                plan: planDurationLabels[selectedPlan],
                tipo: selectedPlanType === 'individual' ? 'Individual' : 'Grupal',
            });

            if (success) {
                setSubmitted(true);
                toast.success('¡Formulario enviado! Nos contactaremos contigo pronto.');
                reset();
            } else {
                toast.error('Hubo un error al enviar. Intenta de nuevo.');
            }
        } catch {
            toast.error('Error de conexión. Verifica tu internet e intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const hasPlanSelected = selectedLevel && selectedPlan;

    return (
        <section id="contacto" className="py-20 sm:py-28 relative overflow-hidden">
            <Toaster position="top-center" richColors />

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-genesys-deep via-genesys-night to-[#0d0825]" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-genesys-indigo/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-genesys-violet/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block text-sm font-semibold tracking-wider text-genesys-indigo uppercase mb-3">
                        Formulario de Inscripción
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
                        ¡Empieza <span className="gradient-text">hoy!</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        Completa tus datos y nos pondremos en contacto contigo para coordinar las clases.
                    </p>
                </div>

                {submitted ? (
                    <div className="glass-card rounded-3xl p-10 text-center max-w-lg mx-auto animate-slide-up">
                        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} className="text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 font-display">¡Registro exitoso!</h3>
                        <p className="text-gray-400 mb-6">
                            Hemos recibido tus datos. Un asesor se comunicará contigo pronto para coordinar las clases.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="btn-primary text-sm"
                        >
                            Enviar otro registro
                        </button>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Left: Benefits */}
                        <div className="lg:col-span-2 flex flex-col justify-center">
                            <div className="space-y-6">
                                {benefits.map((b, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-genesys-indigo/10 border border-genesys-indigo/20 flex items-center justify-center flex-shrink-0 text-genesys-indigo group-hover:bg-genesys-indigo/20 transition-all duration-300">
                                            {b.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{b.title}</h4>
                                            <p className="text-sm text-gray-500">{b.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:col-span-3">
                            <div className="glass-card rounded-2xl p-6 sm:p-8">
                                {/* Selected plan display */}
                                {hasPlanSelected ? (
                                    <div className="bg-genesys-indigo/5 border border-genesys-indigo/15 rounded-xl p-4 mb-6 flex items-center gap-4">
                                        <div className="w-11 h-11 bg-genesys-indigo/15 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <BookOpen size={20} className="text-genesys-indigo" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-gray-500 mb-0.5">Plan seleccionado:</p>
                                            <p className="text-white font-semibold text-sm truncate">
                                                {levelLabels[selectedLevel]} — {planDurationLabels[selectedPlan]} ({selectedPlanType === 'individual' ? 'Individual' : 'Grupal'})
                                            </p>
                                        </div>
                                        <a href="#planes" className="text-xs text-genesys-indigo hover:text-genesys-violet transition-colors flex-shrink-0">
                                            Cambiar
                                        </a>
                                    </div>
                                ) : (
                                    <div className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-4 mb-6 flex items-center gap-3">
                                        <AlertCircle size={18} className="text-amber-400 flex-shrink-0" />
                                        <p className="text-sm text-amber-300/80">
                                            Aún no has seleccionado un plan.{' '}
                                            <a href="#niveles" className="underline hover:text-amber-200 font-medium">
                                                Selecciona un nivel y plan
                                            </a>{' '}
                                            primero.
                                        </p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {/* Nombre Apoderado */}
                                        <div>
                                            <label htmlFor="nombreApoderado" className="block text-sm font-medium text-gray-400 mb-2">
                                                Nombre del Apoderado *
                                            </label>
                                            <input
                                                id="nombreApoderado"
                                                type="text"
                                                placeholder="Ej: María García López"
                                                {...register('nombreApoderado')}
                                                className={`w-full px-4 py-3.5 bg-white/[0.03] border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-genesys-indigo/40 focus:border-genesys-indigo/40 transition-all duration-300 ${errors.nombreApoderado ? 'border-red-500/50' : 'border-white/[0.08]'
                                                    }`}
                                            />
                                            {errors.nombreApoderado && (
                                                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                                                    <AlertCircle size={12} /> {errors.nombreApoderado.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Nombre Estudiante */}
                                        <div>
                                            <label htmlFor="nombreEstudiante" className="block text-sm font-medium text-gray-400 mb-2">
                                                Nombre del Estudiante *
                                            </label>
                                            <input
                                                id="nombreEstudiante"
                                                type="text"
                                                placeholder="Ej: Carlos García Pérez"
                                                {...register('nombreEstudiante')}
                                                className={`w-full px-4 py-3.5 bg-white/[0.03] border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-genesys-indigo/40 focus:border-genesys-indigo/40 transition-all duration-300 ${errors.nombreEstudiante ? 'border-red-500/50' : 'border-white/[0.08]'
                                                    }`}
                                            />
                                            {errors.nombreEstudiante && (
                                                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                                                    <AlertCircle size={12} /> {errors.nombreEstudiante.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Celular */}
                                    <div className="max-w-sm">
                                        <label htmlFor="celular" className="block text-sm font-medium text-gray-400 mb-2">
                                            Número de Celular *
                                        </label>
                                        <input
                                            id="celular"
                                            type="tel"
                                            placeholder="Ej: 987 654 321"
                                            {...register('celular')}
                                            className={`w-full px-4 py-3.5 bg-white/[0.03] border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-genesys-indigo/40 focus:border-genesys-indigo/40 transition-all duration-300 ${errors.celular ? 'border-red-500/50' : 'border-white/[0.08]'
                                                }`}
                                        />
                                        {errors.celular && (
                                            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.celular.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !hasPlanSelected}
                                        className="w-full sm:w-auto btn-primary text-base !py-4 !px-12 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" /> Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} /> Enviar Registro
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
