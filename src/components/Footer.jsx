import React from 'react';

// Logo SVG Component
const Logo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="#B7A8FF" strokeWidth="1.5" />
        <path d="M14 32V16L24 26L34 16V32" stroke="#B7A8FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="py-8 px-6 text-center border-t" style={{ borderColor: 'rgba(183, 168, 255, 0.1)' }}>
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-4">
                    <Logo />
                </div>
                <p className="mb-2" style={{ color: '#C6C6C6' }}>
                    © 2024 María Reyes. Todos los derechos reservados.
                </p>
                <p className="text-sm" style={{ color: '#6A5ACD' }}>
                    Diseñado con pasión por la tecnología y el diseño.
                </p>
            </div>
        </footer>
    );
};

export default Footer;