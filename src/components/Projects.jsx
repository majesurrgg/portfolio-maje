import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
    const projectsData = [
        {
            title: 'Predicción Desnutrición Infantil AI',
            desc: 'Investigación aplicando modelos de Machine Learning (Stacking Ensemble con XGBoost y Random Forest) para predecir el estado nutricional en niños de Arequipa usando Open Data.',
            tags: ['Python', 'Machine Learning', 'Data Science']
        },
        {
            title: 'Portafolio Personal',
            desc: 'Desarrollo de sitio web personal con diseño moderno, funcionalidades interactivas y optimización de rendimiento.',
            tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite.js', 'Lucide React'],
            inProcess: true
        },
        {
            title: 'Implementación ERP e-robot',
            desc: 'Líder usuaria en implementación completa de sistema ERP, coordinación de equipos multidisciplinarios y aseguramiento de la adopción del sistema.',
            tags: ['ERP', 'Análisis Funcional', 'Liderazgo'],
            inProcess: false
        },
        {
            title: 'Página Web ONG Yachay Wasi',
            desc: 'Desarrollo de sitio web institucional con diseño responsivo y enfoque en experiencia de usuario para organización sin fines de lucro.',
            tags: ['React', 'Frontend', 'UX/UI'],
            inProcess: false
        },
        {
            title: 'Arquitectura de Cineplanet',
            desc: 'Diseño de arquitectura empresarial para sistema de gestión integral de cines, modelado de procesos de negocio y diseño de soluciones tecnológicas.',
            tags: ['Arquitectura', 'Procesos', 'Modelado'],
            inProcess: false
        },
        {
            title: 'Dashboard Power BI progreso de flora y fauna trasladada (Zafranal)',
            desc: 'Creación de dashboard interactivo en Power BI para monitoreo del progreso de flora y fauna trasladada en proyecto minero Zafranal.',
            tags: ['Power BI', 'Analytics', 'Dashboard'],
            inProcess: true
        },
        {
            title: 'Sistema Cliente-Servidor XML-RPC',
            desc: 'Desarrollo de sistema de comunicación cliente-servidor utilizando protocolo XML-RPC en Java con arquitectura distribuida.',
            tags: ['Java', 'XML-RPC', 'Distribuido'],
            inProcess: false
        },
        {
            title: 'Simulación Bancaria Fullstack',
            desc: 'Aplicación web completa con React y Spring Boot simulando operaciones bancarias con autenticación y transacciones.',
            tags: ['React', 'Spring Boot', 'Fullstack'],
            inProcess: true
        },
        {
            title: 'Data Warehouse Empresarial',
            desc: 'Diseño e implementación de Data Warehouse para análisis multidimensional de ventas, inventarios y comportamiento de clientes.',
            tags: ['DW', 'SQL Server', 'Analytics'],
            inProcess: true
        },
        {
            title: 'Dashboard Power BI ventas bicicletería',
            desc: 'Diseño e implementación de dashboard interactivo con Power BI para análisis multidimensional de ventas, inventarios y comportamiento de clientes de una bicicletería.',
            tags: ['Power BI', 'Analytics', 'Dashboard'],
            inProcess: true
        },
        {
            title: 'Aplicación Python Turtle',
            desc: 'Desarrollo de aplicación gráfica interactiva con Python, implementando algoritmos de dibujo y animaciones con la librería Turtle.',
            tags: ['Python', 'Turtle', 'Graphics'],
            inProcess: true
        }
    ];

    return (
        <section id="proyectos" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#B7A8FF' }}>
                    Proyectos Destacados
                </h2>

                {/* grid de cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, i) => (
                        <div key={i}
                            className="rounded-3xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
                            style={{ backgroundColor: '#11121A', border: '1px solid rgba(183, 168, 255, 0.1)' }}>

                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold flex-1" style={{ color: '#E5E5E5' }}>
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-3 ml-4">
                                    {project.inProcess && (
                                        <span className="text-sm font-medium px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', color: '#FFC107', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                            en proceso
                                        </span>
                                    )}
                                    <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        style={{ color: '#B7A8FF' }} />
                                </div>
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