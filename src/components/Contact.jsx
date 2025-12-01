import React from 'react';
import { Mail, Linkedin, Download, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-24 px-6" style={{ backgroundColor: 'rgba(17, 18, 26, 0.5)' }}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#B7A8FF' }}>
                    Trabajemos Juntos
                </h2>
                <p className="text-xl mb-12" style={{ color: '#C6C6C6' }}>
                    Estoy abierta a nuevas oportunidades y colaboraciones. ¡Conectemos!
                </p>

                <div className="flex gap-4 justify-center flex-wrap mb-12">
                    <a href="mailto:majesu.rg@gmail.com"
                        className="group px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{ backgroundColor: '#B7A8FF', color: '#0E0E12' }}>
                        <Mail size={20} />
                        Enviar Email
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full font-semibold border-2 flex items-center gap-3 transition-all duration-300 hover:scale-105"
                        style={{ borderColor: '#1F77F0', color: '#1F77F0', backgroundColor: 'rgba(31, 119, 240, 0.05)' }}>
                        <Linkedin size={20} />
                        LinkedIn
                    </a>

                    <a href="/cv.pdf" download
                        className="px-8 py-4 rounded-full font-semibold border-2 flex items-center gap-3 transition-all duration-300 hover:scale-105"
                        style={{ borderColor: '#B7A8FF', color: '#B7A8FF', backgroundColor: 'rgba(183, 168, 255, 0.05)' }}>
                        <Download size={20} />
                        Descargar CV
                    </a>
                </div>

                <div className="rounded-3xl p-8 backdrop-blur-sm" style={{ backgroundColor: '#11121A', border: '1px solid rgba(183, 168, 255, 0.1)' }}>
                    <p className="text-lg" style={{ color: '#C6C6C6' }}>
                        "La tecnología es más poderosa cuando empodera a las personas a resolver problemas reales."
                    </p>
                    <p className="mt-4 font-semibold" style={{ color: '#B7A8FF' }}>— Maria Jesus Reyes G.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;