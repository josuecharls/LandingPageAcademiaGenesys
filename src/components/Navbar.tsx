import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

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

    return (
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

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden fixed inset-0 top-0 z-50 bg-genesys-night/95 backdrop-blur-2xl">
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 pt-12">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-display font-semibold text-gray-300 hover:text-white hover:gradient-text transition-all duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contacto"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 btn-primary text-lg !py-4 !px-10"
                            >
                                ¡Inscríbete!
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
