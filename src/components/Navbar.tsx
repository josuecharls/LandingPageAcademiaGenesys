import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import logoImg from '../assets/logo.png';

const TikTokIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.5 5.54-3.9 7.03-2.61 1.63-6 1.6-8.52.09-2.52-1.49-4.04-4.2-3.8-7.14.22-3.04 2.1-5.74 4.97-6.84 1.66-.64 3.51-.71 5.23-.29v4.29c-1.3-.23-2.64-.1-3.81.54-1.25.68-2.11 1.95-2.25 3.37-.15 1.54.49 3.09 1.68 4.09 1.18.99 2.84 1.3 4.3.82 2.15-.71 3.58-2.73 3.55-5v-17.8z" />
    </svg>
);

const WhatsAppIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Niveles', href: '#niveles' },
    { label: 'Planes', href: '#planes' },
    { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Prevenir scroll en el body cuando el menú móvil está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-genesys-night/80 backdrop-blur-2xl border-b border-white/[0.06] py-2'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button + Logo */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 -ml-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>

                            {/* Logo (Mobile: Text Only) */}
                            <a href="#inicio" className="md:hidden flex items-center group">
                                <span className="text-base sm:text-[1.3rem] font-bold font-display uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-genesys-indigo via-genesys-violet to-genesys-cyan">
                                    ACADEMIA GENESYS
                                </span>
                            </a>

                            {/* Logo (Desktop: Image + Stacked Text) */}
                            <a href="#inicio" className="hidden md:flex items-center gap-2 sm:gap-3 group">
                                <div className="relative">
                                    <img
                                        src={logoImg}
                                        alt="Academia Genesys"
                                        className="h-9 w-9 sm:h-10 sm:w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-genesys-indigo/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.25em] uppercase leading-none text-gray-500">
                                        Academia
                                    </span>
                                    <span className="text-base sm:text-lg font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-genesys-indigo via-genesys-violet to-genesys-cyan leading-none -mt-1">
                                        GENESYS
                                    </span>
                                </div>
                            </a>
                        </div>

                        {/* Right Section: Desktop Nav + Mobile WSP */}
                        <div className="flex items-center">
                            {/* Desktop Nav */}
                            <div className="hidden md:flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 rounded-lg group"
                                    >
                                        {link.label}
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-genesys-indigo to-genesys-cyan rounded-full transition-all duration-300 group-hover:w-3/4" />
                                    </a>
                                ))}

                                {/* Redes Sociales Desktop */}
                                <div className="flex items-center gap-3 ml-2 mr-2 border-l border-white/[0.1] pl-6">
                                    <a href="https://www.facebook.com/academiasgenesys" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-genesys-indigo hover:-translate-y-0.5 transition-all duration-300">
                                        <Facebook size={18} />
                                    </a>
                                    <a href="https://www.instagram.com/academiasgenesys/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 hover:-translate-y-0.5 transition-all duration-300">
                                        <Instagram size={18} />
                                    </a>
                                    <a href="https://www.tiktok.com/@academiasgenesys" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                                        <TikTokIcon size={18} />
                                    </a>
                                </div>

                                <a
                                    href="#contacto"
                                    className="ml-4 btn-primary text-sm !py-2.5 !px-6 animate-glow-pulse"
                                >
                                    ¡Inscríbete!
                                </a>
                            </div>

                            {/* Mobile WhatsApp Button */}
                            <a
                                href="https://wa.me/51967203779"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="md:hidden p-2 -mr-2 text-[#25D366] hover:bg-[#25D366]/10 rounded-full transition-all duration-200"
                                aria-label="Contactar por WhatsApp"
                            >
                                <WhatsAppIcon size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-[60] bg-genesys-night/98 backdrop-blur-3xl h-[100dvh] flex flex-col">
                    <div className="flex justify-end p-5">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                            aria-label="Close menu"
                        >
                            <X size={28} />
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-start pt-16 gap-6 pb-8 overflow-y-auto">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-display font-semibold text-gray-300 hover:text-white hover:scale-105 transition-all duration-300"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Redes Sociales Mobile */}
                        <div className="flex items-center gap-6 mt-4 mb-2">
                            <a href="https://www.facebook.com/academiasgenesys" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-genesys-indigo/10 border border-genesys-indigo/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-genesys-indigo/20 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-genesys-indigo/5">
                                <Facebook size={26} />
                            </a>
                            <a href="https://www.instagram.com/academiasgenesys/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-genesys-indigo/10 border border-genesys-indigo/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-pink-500/20 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-pink-500/5">
                                <Instagram size={26} />
                            </a>
                            <a href="https://www.tiktok.com/@academiasgenesys" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-genesys-indigo/10 border border-genesys-indigo/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-white/5">
                                <TikTokIcon size={26} />
                            </a>
                        </div>

                        <a
                            href="#contacto"
                            onClick={() => setIsOpen(false)}
                            className="mt-6 btn-primary text-xl !py-4 !px-12 shadow-xl shadow-genesys-indigo/20"
                        >
                            ¡Inscríbete!
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
