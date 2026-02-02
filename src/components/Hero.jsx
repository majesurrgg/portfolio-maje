import React from 'react';
import { Mail, Linkedin, Download, ArrowRight, Contact, MessageCircle } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl text-center">
                <div className="mb-8 opacity-0 animate-fade-in" style={{ animation: 'fadeIn 1s ease-in forwards' }}>
                    <p className="text-lg mb-3" style={{ color: '#B7A8FF' }}>Hola, soy</p>
                    <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent">
                        María Jesus Reyes Gonzales
                    </h1>
                    <div className="space-y-2 mb-6">
                        <p className="text-2xl md:text-3xl font-semibold" style={{ color: '#E5E5E5' }}>
                            Analista TI | Desarrolladora Full Stack | Analista de datos
                        </p>
                        <p className="text-xl" style={{ color: '#C6C6C6' }}>
                            Ingeniería de Sistemas
                        </p>
                    </div>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#C6C6C6' }}>
                        Creo soluciones innovadoras que impulsan la eficiencia y la transformación digital.
                    </p>
                </div>

                <div className="flex gap-4 justify-center flex-wrap mt-10 opacity-0" style={{ animation: 'fadeIn 1s ease-in 0.3s forwards' }}>
                    <button className="group px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{ backgroundColor: '#B7A8FF', color: '#0E0E12' }}>
                        <Download size={15} />
                        Descargar CV
                    </button>
                    <button onClick={() => scrollToSection('contacto')}
                        className="group px-8 py-4 rounded-full font-semibold flex items-center gap-2 border-2 transition-all duration-300 hover:scale-105 hover:bg-opacity-10"
                        style={{ borderColor: '#B7A8FF', color: '#B7A8FF', backgroundColor: 'rgba(183, 168, 255, 0.05)' }}>
                        <Contact size={15} />
                        Contáctame
                    </button>
                </div>

                <div className="mt-16 flex justify-center gap-6">
                    <a href="mailto:majesu.rg@gmail.com" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        style={{ backgroundColor: '#11121A', color: '#B7A8FF' }}>
                        <Mail size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/maria-jesus-reyes-gonzales-b57662216/" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        style={{ backgroundColor: '#11121A', color: '#B7A8FF' }}>
                        <Linkedin size={20} />
                    </a>
                    <a href="https://wa.me/+51955080884" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        style={{ backgroundColor: '#11121A', color: '#B7A8FF' }}>
                        <MessageCircle size={20} />
                    </a>
                </div>
            </div>

            {/* animation css */}
            <style jsx>{`
            @keyframes fadeIn {
            from {
            opacity: 0;
            transform: translateY(20px);
            }
            to {
            opacity: 1;
            transform: translateY(0);
            }
            }
            `}
            </style>
        </section>
    );
};

export default Hero;