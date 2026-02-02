import React from 'react';

const About = () => {
    const caracteristicas = [
        'Proactividad y trabajo en equipo',
        'Organización y claridad',
        'Versátil y Adaptable (desde código hasta el negocio)',
        'Capacidad de explicar temas técnicos',
        'Rápido aprendizaje con guía adecuada',
        'Empatía y responsabilidad',
        'Interés en consultoría TI',
        'Arquitectura empresarial y soluciones cloud'
    ];

    return (
        <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#B7A8FF' }}>
                    Sobre Mí
                </h2>

                {/* impact phrase */}
                <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8 text-center" style={{ color: '#C6C6C6' }}>
                    Hola!, Soy María Jesus, encantada de conocerte. Por favor, echa un vistazo a mi trabajo
                </p>

                <div className="rounded-3xl p-8 md:p-12 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
                    style={{ backgroundColor: '#11121A', border: '1px solid rgba(183, 168, 255, 0.1)' }}>

                    <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#C6C6C6', textAlign: 'justify' }}>
                        <p>
                            Soy egresada de <strong style={{ color: '#B7A8FF' }}>Ingeniería de Sistemas</strong> con experiencia práctica gestionando el área de TI en entornos corporativos. Mi enfoque va más allá del código: asegurar que la tecnología funcione para las personas.
                        </p>

                        <p>
                            Tengo experiencia como <strong style={{ color: '#B7A8FF' }}>líder usuaria en la implementación de un ERP (e-robot)</strong> dentro de una MYPE consultora. Mi función era asegurar que el sistema se adopte correctamente, organizando reuniones, levantando requerimientos, haciendo pruebas, traduciendo errores técnicos a un lenguaje entendible y alineando procesos del negocio con los flujos ya estandarizados del ERP.
                        </p>

                        <p>
                            Antes de eso estuve a cargo del <strong style={{ color: '#B7A8FF' }}>área de TI en Ingem</strong>, como área unipersonal. Ahí desarrollé habilidades de soporte técnico integral, administración de servidores (cPanel), gestión de usuarios corporativos, atención de incidencias y mejora continua.
                        </p>

                        <p>
                            Actualmente, estoy profundizando mis habilidades como <strong style={{ color: '#B7A8FF' }}>Desarrolladora Full Stack y Analista de Datos</strong> para crear herramientas que optimicen procesos reales.
                        </p>

                        <p>
                            A nivel académico he trabajado proyectos de <strong style={{ color: '#B7A8FF' }}>programación (Python, Java)</strong>, <strong style={{ color: '#B7A8FF' }}>front-end (React)</strong>, <strong style={{ color: '#B7A8FF' }}>arquitectura (Cineplanet)</strong>, <strong style={{ color: '#B7A8FF' }}>Data Warehouse</strong>, gestión documental, gestión de proyectos (Scrum y Kanban) y soluciones en la nube con <strong style={{ color: '#B7A8FF' }}>Google Cloud</strong>.
                        </p>
                    </div>

                    <div className="mt-10 p-8 rounded-2xl" style={{ backgroundColor: 'rgba(183, 168, 255, 0.05)', border: '1px solid rgba(183, 168, 255, 0.2)' }}>
                        <h3 className="text-2xl font-bold mb-6" style={{ color: '#B7A8FF' }}>Me caracterizo por</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {caracteristicas.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B7A8FF' }}></div>
                                    <span style={{ color: '#E5E5E5' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;