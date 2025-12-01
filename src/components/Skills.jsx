import React from 'react';
import { Code, Users, MessageSquare } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            title: 'Tecnología',
            icon: <Code size={28} />,
            items: ['Python', 'Java', 'React', 'SQL Server', 'Google Cloud Platform', 'Power BI', 'Data Warehouse', 'XML-RPC', 'Spring Boot']
        },
        {
            title: 'Consultoría TI',
            icon: <Users size={28} />,
            items: ['Implementación ERP', 'Análisis funcional', 'Levantamiento de requerimientos', 'Documentación técnica', 'UAT y pruebas', 'Gestión de procesos']
        },
        {
            title: 'Habilidades Blandas',
            icon: <MessageSquare size={28} />,
            items: ['Comunicación efectiva', 'Organización', 'Aprendizaje rápido', 'Trabajo en equipo', 'Resolución de problemas', 'Adaptabilidad']
        }
    ];

    return (
        <section id="habilidades" className="py-24 px-6" style={{ backgroundColor: 'rgba(17, 18, 26, 0.5)' }}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#B7A8FF' }}>
                    Habilidades
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {skillsData.map((skill, i) => (
                        <div key={i}
                            className="rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                            style={{ backgroundColor: '#11121A', border: '1px solid rgba(183, 168, 255, 0.1)' }}>

                            <div className="mb-6 transition-all duration-300 group-hover:scale-110" style={{ color: '#B7A8FF' }}>
                                {skill.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-6" style={{ color: '#E5E5E5' }}>
                                {skill.title}
                            </h3>

                            <div className="space-y-3">
                                {skill.items.map((item, j) => (
                                    <div key={j} className="flex items-start gap-3 group/item">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/item:scale-150"
                                            style={{ backgroundColor: '#B7A8FF' }}></div>
                                        <span className="transition-all duration-300 group-hover/item:translate-x-1" style={{ color: '#C6C6C6' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;