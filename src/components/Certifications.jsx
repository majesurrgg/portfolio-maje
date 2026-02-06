import React, { useState } from 'react';
import PdfViewerModal from "./PdfViewerModal";

// Aquí tus datos. Puedes importar las imágenes o usar URLs externas.
// TIP: Para la constancia de Ingem, usa el logo de la empresa si lo tienes, o un icono de maletín.

const certifications = [
  {
    id: 1,
    title: "Constancia de Prestación de Servicios - Soporte TI / Analista TI",
    institution: "Ingem (Corporación Soluciones de Gestión)",
    date: "Enero 2026",
    image: "/img/logo_igm.jpg", 
    link: "/docs/#", 
    type: "work"
  },
  {
    id: 2,
    title: "Bachiller en Ingeniería de Sistemas",
    institution: "Universidad Tecnológica del Perú",
    date: "Diciembre 2025",
    image: "/img/logo_utp.png",
    link: "#", // Pon aquí el link cuando lo tengas
    type: "degree"
  },
  {
    id: 3,
    title: "Google Cloud Computing Foundation",
    institution: "Google Cloud",
    date: "2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png",
    link: "/docs/FCCG-CERT.pdf",
    type: "course"
  },
  {
    id: 4,
    title: "Python Essentials 1 & 2",
    institution: "Cisco Networking Academy",
    date: "2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
    link: "/docs/FunPython-CERT.pdf",
    type: "course"
  },
  {
    id: 5,
    title: "Scrum Certification",
    institution: "Cisco Networking Academy",
    date: "2024",
    image: "/img/logo_scrumstudy.svg",
    link: "/docs/SCRUM-CERT.pdf",
    type: "course"
  }
];

const Certifications = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  
  return (
    <section id="certificaciones" className="py-24 px-6" style={{ backgroundColor: 'rgba(17, 18, 26, 0.5)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Título de la Sección */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#B7A8FF' }}>
          Certificaciones y Credenciales
        </h2>
        {/* validation phrase*/}
        <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8 text-center" style={{ color: '#C6C6C6' }}>
          Estos documentos validan mi experiencia y formación en el campo de la tecnología.
        </p>

        {/* className="rounded-3xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
            style={{ backgroundColor: '#11121A', border: '1px solid rgba(183, 168, 255, 0.1)' }} */}

        {/* grid de cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {certifications.map((item) => (
            <div key={item.id}
              className="hover:scale-105 duration-500 rounded-3xl overflow-hidden flex flex-col"
              style={{ backgroundColor: '#11121A', border: '1px solid rgba(183, 168, 255, 0.1)' }}

            >
              {/* Encabezado de la Card con Imagen */}
              <div className='h-40 bg-white flex justify-center items-center p-4'>
                <img
                  src={item.image}
                  alt={`${item.institution} logo`}
                  className='max-h-full max-w-full object-contain'
                />
              </div>

              {/* Cuerpo de la Card */}
              <div className='p-6 flex flex-col grow'>
                {item.type === 'work' && (
                  <span className='bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2'>
                    EXPERIENCIA LABORAL
                  </span>
                )}

                <h3 className='text-xl font-bold text-gray-100 mb-2'>{item.title}</h3>
                <p className='text-sm text-gray-400 mb-4'>{item.institution} | {item.date}</p>

                {/* Botón al final */}

                <div className='mt-auto'>
                  <button
                    onClick={() => setSelectedPdf(item.link)}
                    className="group border-2 px-6 py-3 my-2 flex items-center rounded-full transition-colors w-full justify-center
                    bg-[rgba(183,168,255,0.1)]
                    text-[#B7A8FF]
                    border-[rgba(183,168,255,0.2)]
                    hover:bg-[rgba(183,168,255,0.2)]
                    hover:border-[rgba(183,168,255,0.3)]"
                  >
                    Ver Credencial
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <PdfViewerModal
          isOpen={!!selectedPdf}
          pdfUrl={selectedPdf}
          onClose={() => setSelectedPdf(null)}
        />

      </div>
    </section>
  );


};

export default Certifications;

