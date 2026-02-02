import React from 'react';

// Aquí tus datos. Puedes importar las imágenes o usar URLs externas.
// TIP: Para la constancia de Ingem, usa el logo de la empresa si lo tienes, o un icono de maletín.
const certifications = [
  {
    id: 1,
    title: "Constancia de Prestación de Servicios - Soporte TI / Analista TI",
    institution: "Ingem (Corporación Soluciones de Gestión)",
    date: "Enero 2026",
    image: "/img/logo_igm.jpg", // O la ruta a tu logo: /img/ingem-logo.png
    link: "/CERT_PPMJRG.pdf", // Ruta a tu PDF en la carpeta public
    type: "work" // Usaremos esto para destacarlo
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
    link: "https://www.cloudskillsboost.google/public_profiles/TU_PERFIL",
    type: "course"
  },
  {
    id: 4,
    title: "Python Essentials 1 & 2",
    institution: "Cisco Networking Academy",
    date: "2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
    link: "#",
    type: "course"
  },
  {
    id: 5,
    title: "Scrum Certification",
    institution: "Cisco Networking Academy",
    date: "2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
    link: "#",
    type: "course"
  }
];

const Certifications = () => {
  return (
    <section id="certificaciones" className="py-24 px-6" style={{ backgroundColor: 'rgba(17, 18, 26, 0.5)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Título de la Sección */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#B7A8FF' }}>
          Certificaciones y Credenciales
        </h2>
        <p className='py-6'>Estos documentos validan mi experiencia y conocimientos técnicos</p>


        {/* Grid de Cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {certifications.map((item) => (
            <div key={item.id}
              className={`shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-lg overflow-hidden bg-[#112240] flex flex-col `}
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
              <div className='p-6 flex flex-col flex-grow'>
                {item.type === 'work' && (
                  <span className='bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2'>
                    EXPERIENCIA LABORAL
                  </span>
                )}

                <h3 className='text-xl font-bold text-gray-100 mb-2'>{item.title}</h3>
                <p className='text-sm text-gray-400 mb-4'>{item.institution} | {item.date}</p>

                {/* Botón al final */}
                <div className='mt-auto'>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-md transition-colors w-full justify-center'
                  >
                    Ver Credencial
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;