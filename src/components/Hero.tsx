import { Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-genesys-night" />

            {/* Animated geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large gradient orb - top right */}
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-genesys-indigo/20 via-genesys-violet/10 to-transparent rounded-full blur-3xl animate-float-slow" />
                {/* Medium orb - bottom left */}
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-genesys-cyan/15 via-genesys-indigo/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                {/* Small accent orb */}
                <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-genesys-violet/10 rounded-full blur-2xl animate-pulse-slow" />

                {/* Geometric decorations */}
                <div className="hidden lg:block absolute top-1/4 right-[15%] w-64 h-64 border border-genesys-indigo/10 rounded-3xl rotate-12 animate-float-rotate" />
                <div className="hidden lg:block absolute bottom-1/3 right-[10%] w-40 h-40 border border-genesys-violet/10 rounded-2xl -rotate-12 animate-float" style={{ animationDelay: '4s' }} />
                <div className="hidden lg:block absolute top-[60%] right-[20%] w-20 h-20 bg-gradient-to-br from-genesys-indigo/20 to-genesys-cyan/20 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: '2s' }} />

                {/* Dot grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left: Text content */}
                    <div className="animate-slide-up">
                        <div className="inline-flex items-center gap-2 bg-genesys-indigo/10 border border-genesys-indigo/20 rounded-full px-5 py-2 mb-8 shimmer">
                            <Sparkles size={16} className="text-genesys-violet" />
                            <span className="text-sm font-medium text-genesys-accent">
                                Clases personalizadas para cada estudiante
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 font-display">
                            Tu camino al
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-genesys-indigo via-genesys-violet to-genesys-cyan">
                                éxito académico
                            </span>
                            <br />
                            comienza aquí
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
                            En <strong className="text-white font-semibold">Academia Genesys</strong> ofrecemos{' '}
                            tutorías especializadas para todos los niveles. Planes flexibles
                            que se adaptan a tus necesidades.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href="#niveles"
                                className="btn-primary text-base sm:text-lg !py-4 !px-10 shadow-xl shadow-genesys-indigo/20"
                            >
                                Ver Planes
                            </a>
                            <a
                                href="#contacto"
                                className="group flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-all duration-300 py-4 px-2"
                            >
                                Inscríbete ahora
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Stats showcase */}
                    <div className="hidden lg:flex justify-center items-center animate-slide-in-right">
                        <div className="relative">
                            {/* Glowing ring behind stats */}
                            <div className="absolute inset-0 bg-gradient-to-br from-genesys-indigo/20 via-genesys-violet/10 to-genesys-cyan/20 rounded-3xl blur-2xl" />

                            <div className="relative glass-card rounded-3xl p-8 sm:p-10">
                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { value: '30+', label: 'Estudiantes', color: 'from-genesys-indigo to-genesys-violet' },
                                        { value: '2+', label: 'Profesores', color: 'from-genesys-violet to-genesys-purple' },
                                        { value: '100%', label: 'Satisfacción', color: 'from-genesys-cyan to-genesys-light' },
                                        { value: '4', label: 'Niveles', color: 'from-genesys-purple to-genesys-cyan' },
                                    ].map((stat, i) => (
                                        <div key={stat.label} className={`text-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] ${i < 2 ? '' : ''}`}>
                                            <div className={`text-3xl sm:text-4xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2`}>
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile stats */}
                <div className="lg:hidden mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    {[
                        { value: '30+', label: 'Estudiantes' },
                        { value: '2+', label: 'Profesores' },
                        { value: '100%', label: 'Satisfacción' },
                        { value: '4', label: 'Niveles' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center p-4 rounded-xl glass-card">
                            <div className="text-2xl font-bold font-display gradient-text mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#niveles"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-genesys-indigo transition-colors animate-bounce"
            >
                <ChevronDown size={28} />
            </a>
        </section>
    );
}
