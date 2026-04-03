import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import logoImg from '../assets/logo.png';

const TikTokIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.5 5.54-3.9 7.03-2.61 1.63-6 1.6-8.52.09-2.52-1.49-4.04-4.2-3.8-7.14.22-3.04 2.1-5.74 4.97-6.84 1.66-.64 3.51-.71 5.23-.29v4.29c-1.3-.23-2.64-.1-3.81.54-1.25.68-2.11 1.95-2.25 3.37-.15 1.54.49 3.09 1.68 4.09 1.18.99 2.84 1.3 4.3.82 2.15-.71 3.58-2.73 3.55-5v-17.8z" />
    </svg>
);

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
                            
                            {/* Redes Sociales */}
                            <div className="flex gap-4 mt-6">
                                <a href="https://www.facebook.com/academiasgenesys" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-genesys-indigo/5 border border-genesys-indigo/10 flex items-center justify-center text-genesys-indigo hover:bg-genesys-indigo hover:-translate-y-1 hover:text-white transition-all duration-300">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://www.instagram.com/academiasgenesys/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-genesys-indigo/5 border border-genesys-indigo/10 flex items-center justify-center text-genesys-indigo hover:bg-genesys-indigo hover:-translate-y-1 hover:text-white transition-all duration-300">
                                    <Instagram size={18} />
                                </a>
                                <a href="https://www.tiktok.com/@academiasgenesys" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-genesys-indigo/5 border border-genesys-indigo/10 flex items-center justify-center text-genesys-indigo hover:bg-genesys-indigo hover:-translate-y-1 hover:text-white transition-all duration-300">
                                    <TikTokIcon size={18} />
                                </a>
                            </div>
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
