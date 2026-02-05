import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';

function App() {
  // 1. estado para controlar el menú desde aquí
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // lógica para detectar sección activa
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'certificaciones', 'contacto'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Cuando el menú se abre: Congela el scroll del cuerpo
      document.body.style.overflow = 'hidden';
    } else {
      // Cuando el menú se cierra: Reactiva el scroll
      document.body.style.overflow = 'unset';
    }

    // Limpieza de seguridad (por si el componente se desmonta)
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // 2. función de scroll (con compensanción de altura)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headeroffset = 10; // altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headeroffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // cierra el meny automáticamente al hacer clicj
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-gray-100" style={{
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#0E0E12',
      color: '#E5E5E5'
    }}>
      <Navbar
        scrollY={scrollY}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <WhatsAppBtn hide={isMenuOpen} />
    </div>
  );
};

export default App;