import { Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Gradient separator line */}
            <div className="h-px bg-gradient-to-r from-transparent via-genesys-indigo/40 to-transparent" />

            <div className="bg-gradient-to-b from-genesys-night to-[#060818]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <img src={logoImg} alt="Academia Genesys" className="h-10 w-10 object-contain" />
                                <div>
                                    <span className="text-[10px] font-medium tracking-[0.25em] text-gray-600 uppercase block leading-none">
                                        Academia
                                    </span>
                                    <span className="text-lg font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-genesys-indigo via-genesys-violet to-genesys-cyan leading-tight">
                                        GENESYS
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                Transformamos el futuro académico de cada estudiante con tutorías
                                personalizadas y un acompañamiento cercano.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5 font-display">
                                Navegación
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Inicio', href: '#inicio' },
                                    { label: 'Niveles de Estudio', href: '#niveles' },
                                    { label: 'Planes y Precios', href: '#planes' },
                                    { label: 'Inscripción', href: '#contacto' },
                                ].map(link => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-gray-500 hover:text-genesys-indigo transition-colors duration-300 text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5 font-display">
                                Contacto
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm text-gray-500 group">
                                    <div className="w-9 h-9 rounded-lg bg-genesys-indigo/5 border border-genesys-indigo/10 flex items-center justify-center group-hover:bg-genesys-indigo/10 group-hover:border-genesys-indigo/20 transition-all duration-300">
                                        <Phone size={14} className="text-genesys-indigo" />
                                    </div>
                                    <span className="group-hover:text-gray-400 transition-colors">+51 967 203 007</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-500 group">
                                    <div className="w-9 h-9 rounded-lg bg-genesys-indigo/5 border border-genesys-indigo/10 flex items-center justify-center group-hover:bg-genesys-indigo/10 group-hover:border-genesys-indigo/20 transition-all duration-300">
                                        <Mail size={14} className="text-genesys-indigo" />
                                    </div>
                                    <span className="group-hover:text-gray-400 transition-colors break-all">grupodeestudiosgenesys@gmail.com</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-500 group">
                                    <div className="w-9 h-9 rounded-lg bg-genesys-indigo/5 border border-genesys-indigo/10 flex items-center justify-center group-hover:bg-genesys-indigo/10 group-hover:border-genesys-indigo/20 transition-all duration-300">
                                        <MapPin size={14} className="text-genesys-indigo" />
                                    </div>
                                    <span className="group-hover:text-gray-400 transition-colors">Chiclayo, Perú</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-600">
                            © {new Date().getFullYear()} Academia Genesys. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-600 hover:text-genesys-indigo transition-colors text-xs">
                                Política de Privacidad
                            </a>
                            <a href="#" className="text-gray-600 hover:text-genesys-indigo transition-colors text-xs">
                                Términos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
