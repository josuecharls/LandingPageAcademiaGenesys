import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import logoImg from '../assets/logo.png';

const TikTokIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.5 5.54-3.9 7.03-2.61 1.63-6 1.6-8.52.09-2.52-1.49-4.04-4.2-3.8-7.14.22-3.04 2.1-5.74 4.97-6.84 1.66-.64 3.51-.71 5.23-.29v4.29c-1.3-.23-2.64-.1-3.81.54-1.25.68-2.11 1.95-2.25 3.37-.15 1.54.49 3.09 1.68 4.09 1.18.99 2.84 1.3 4.3.82 2.15-.71 3.58-2.73 3.55-5v-17.8z" />
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
                    {/* Logo */}
                    <a href="#inicio" className="flex items-center gap-3 group">
                        <div className="relative">
                            <img
                                src={logoImg}
                                alt="Academia Genesys"
                                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-genesys-indigo/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-medium tracking-[0.25em] uppercase leading-none text-gray-500">
                                Academia
                            </span>
                            <span className="text-lg font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-genesys-indigo via-genesys-violet to-genesys-cyan leading-tight">
                                GENESYS
                            </span>
                        </div>
                    </a>

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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
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
