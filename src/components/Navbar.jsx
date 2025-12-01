import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Logo SVG Component
const Logo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="#B7A8FF" strokeWidth="1.5" />
        <path d="M14 32V16L24 26L34 16V32" stroke="#B7A8FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Navbar = ({ scrollY, activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'sobre-mi', label: 'Sobre mí' },
        { id: 'habilidades', label: 'Habilidades' },
        { id: 'proyectos', label: 'Proyectos' },
        { id: 'contacto', label: 'Contacto' }
    ];

    const handleMenuClick = (id) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-opacity-95 backdrop-blur-lg shadow-lg' : 'bg-opacity-0'}`}
                style={{ backgroundColor: scrollY > 50 ? '#11121A' : 'transparent' }}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleMenuClick('inicio')}>
                        <Logo />
                        <span className="text-xl font-bold" style={{ color: '#B7A8FF' }}>Maria Jesus Reyes G.</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`transition-all duration-300 font-medium ${activeSection === item.id ? 'text-purple-300' : 'text-gray-400 hover:text-purple-300'}`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ color: '#B7A8FF' }}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 md:hidden"
                    style={{ backgroundColor: 'rgba(14, 14, 18, 0.98)', paddingTop: '80px' }}
                >
                    <div className="flex flex-col items-center gap-8 p-8">
                        {menuItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => handleMenuClick(item.id)}
                                className="text-2xl font-semibold transition-all duration-300 hover:scale-110"
                                style={{
                                    color: activeSection === item.id ? '#B7A8FF' : '#E5E5E5',
                                    animation: `fadeInUp 0.3s ease-out ${index * 0.1}s forwards`,
                                    opacity: 0
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;