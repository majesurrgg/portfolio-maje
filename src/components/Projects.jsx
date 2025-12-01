import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
    const projectsData = [
        {
            title: 'Implementación ERP e-robot',
            desc: 'Líder usuaria en implementación completa de sistema ERP, coordinación de equipos multidisciplinarios y aseguramiento de la adopción del sistema.',
            tags: ['ERP', 'Análisis Funcional', 'Liderazgo']
        },
        {
            title: 'Página Web ONG Yachay Wasi',
            desc: 'Desarrollo de sitio web institucional con diseño responsivo y enfoque en experiencia de usuario para organización sin fines de lucro.',
            tags: ['React', 'Frontend', 'UX/UI']
        },
        {
            title: 'Arquitectura de Cineplanet',
            desc: 'Diseño de arquitectura empresarial para sistema de gestión integral de cines, modelado de procesos de negocio y diseño de soluciones tecnológicas.',
            tags: ['Arquitectura', 'Procesos', 'Modelado']
        },
        {
            title: 'Gestión Documental ISO 27005',
            desc: 'Sistema de gestión documental implementando estándares ISO 27005 para garantizar seguridad de la información.',
            tags: ['ISO 27005', 'Seguridad', 'Documentación']
        },
        {
            title: 'Sistema Cliente-Servidor XML-RPC',
            desc: 'Desarrollo de sistema de comunicación cliente-servidor utilizando protocolo XML-RPC en Java con arquitectura distribuida.',
            tags: ['Java', 'XML-RPC', 'Distribuido']
        },
        {
            title: 'Simulación Bancaria Fullstack',
            desc: 'Aplicación web completa con React y Spring Boot simulando operaciones bancarias con autenticación y transacciones.',
            tags: ['React', 'Spring Boot', 'Fullstack']
        },
        {
            title: 'Data Warehouse Empresarial',
            desc: 'Diseño e implementación de Data Warehouse para análisis multidimensional de ventas, inventarios y comportamiento de clientes.',
            tags: ['DW', 'SQL Server', 'Analytics']
        },
        {
            title: 'Aplicación Python Turtle',
            desc: 'Desarrollo de aplicación gráfica interactiva con Python, implementando algoritmos de dibujo y animaciones con la librería Turtle.',
            tags: ['Python', 'Turtle', 'Graphics']
        }
    ];

    return (
        <section id="proyectos" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#B7A8FF' }}>
                    Proyectos Destacados
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, i) => (
                        <div key={i}
                            className="rounded-3xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
                            style={{ backgroundColor: '#11121A', border: '1px solid rgba(183, 168, 255, 0.1)' }}>

                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold flex-1" style={{ color: '#E5E5E5' }}>
                                    {project.title}
                                </h3>
                                <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    style={{ color: '#B7A8FF' }} />
                            </div>

                            <p className="mb-6 leading-relaxed" style={{ color: '#C6C6C6' }}>
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, j) => (
                                    <span key={j}
                                        className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                                        style={{ backgroundColor: 'rgba(183, 168, 255, 0.1)', color: '#B7A8FF', border: '1px solid rgba(183, 168, 255, 0.2)' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;