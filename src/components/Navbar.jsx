import React from 'react';

// Logo SVG Component
const Logo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="#B7A8FF" strokeWidth="1.5" />
        <path d="M14 32V16L24 26L34 16V32" stroke="#B7A8FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Navbar = ({ scrollY, activeSection, scrollToSection }) => {
    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-opacity-95 backdrop-blur-lg shadow-lg' : 'bg-opacity-0'}`}
            style={{ backgroundColor: scrollY > 50 ? '#11121A' : 'transparent' }}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
                    <Logo />
                    <span className="text-xl font-bold" style={{ color: '#B7A8FF' }}>María Reyes</span>
                </div>
                <div className="hidden md:flex gap-8">
                    {['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`transition-all duration-300 font-medium ${activeSection === item ? 'text-purple-300' : 'text-gray-400 hover:text-purple-300'}`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;