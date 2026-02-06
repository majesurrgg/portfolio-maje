import React, { useState } from 'react';
import { Send, X } from 'lucide-react'; // Usamos los iconos de tu librería

const WhatsAppBtn = ({ hide }) => {
  const [isOpen, setIsOpen] = useState(false);

  // mis datos configurados
  const phoneNumber = '51955080884';
  const message = 'Hola Maria Jesus, vi tu portafolio y me gustaría contactarte.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // SI hide ES TRUE (Menú abierto), NO RENDERIZAMOS NADA
  if (hide) return null;

  return (
    // esta ventana de whatsapp no permitia clickear los botones, por eso se le agrego pointer-events-none cuando esta cerrada
    // Esto permite que los clics pasen a través de las áreas vacías hacia los botones de abajo (CV, Credenciales).
    <div className="fixed bottom-10 right-5 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3 md:gap-4 transition-all duration-500 animate-in fade-in pointer-events-none">

      {/* 1. VENTANA DEL CHAT (El "Modal") */}
      {/* solo se muestra si isOpen es true */}
      <div
      // CLAVE 2: Agregamos 'pointer-events-auto' para que el chat SÍ capture clics cuando esté abierto.
          className={`rounded-3xl shadow-2xl w-[calc(100vw-2rem)] sm:w-100 overflow-hidden border border-white/20 transition-all duration-300 origin-bottom-right transform pointer-events-auto ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10'
          }`}
        style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
      >
        {/* Encabezado Verde */}
        <div className="bg-[#075E54]/90 p-3 md:p-3 flex items-center justify-between text-white backdrop-blur-sm">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <img
              src="/img/jesusita.jpeg"
              alt="Maria Jesus"
              className="w-10 h-10 md:w-10 md:h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-sm md:text-base">Maria Reyes</h3>
              <p className="text-[10px] md:text-xs text-green-100">Responde en breve</p>
            </div>
          </div>
          <button onClick={toggleChat} className="hover:bg-white/20 p-1 rounded-full transition">
            <X size={20} />
          </button>
        </div>

        {/* Cuerpo del Chat (Fondo tipo WhatsApp) */}
        <div className="p-4 md:p-5 h-60 md:h-64 overflow-y-auto flex flex-col relative">
          <div className="absolute inset-0 bg-[#E5DDD5] opacity-30 -z-10"></div>

          {/* Burbuja de mensaje */}
          <div className="bg-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[85%] text-sm text-gray-800 self-start animate-bounce-in border border-gray-100">
            <p>¡Hola! 👋 <br /> Gracias por visitar mi portafolio.</p>
            <p>¿En qué puedo ayudarte hoy?</p>
            <span className="text-[10px] text-gray-400 block text-right mt-1">17:00</span>
          </div>
        </div>

        {/* Pie de Chat (Botón de acción) */}
        <div className="bg-white/60 p-3 flex items-center backdrop-blur-md border-t border-gray-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#1da851] text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 font-semibold text-sm md:text-base transition-transform hover:scale-[1.02] shadow-md"
          >
            <Send size={18} />
            Iniciar Chat
          </a>
        </div>
      </div>

      {/* 2. EL BOTÓN REDONDO FLOTANTE (Toggle) */}
      <div className="relative group pointer-events-auto">
        {/* CLAVE 3: Agregamos 'pointer-events-auto' al contenedor del botón para que siempre sea clicable */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping duration-1000"></span>
        )}

        <button
          onClick={toggleChat}
          className="relative z-10 flex items-center justify-center w-15 h-15 md:w-18 md:h-18 bg-[#25D366] rounded-full shadow-lg hover:bg-[#1da851] transition-all hover:scale-110 active:scale-95"
          aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        >
          {/* Si está abierto muestra una X, si no, el logo de WhatsApp */}
          {isOpen ? (
            <X className="text-white w-6 h-6 md:w-8 md:h-8" />
          ) : (
            /* Icono SVG de WhatsApp limpio */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 md:w-10 md:h-10 text-white"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zM12.05 20.21c-1.5 0-2.97-.39-4.27-1.11l-.3-.16-3.17.83.84-3.09-.19-.31a8.136 8.136 0 01-1.25-4.38c0-4.48 3.64-8.13 8.12-8.13 4.48 0 8.13 3.64 8.13 8.13 0 4.48-3.64 8.13-8.12 8.13z" />
              <path d="M16.65 14.33c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.07-.25-.13-1.06-.39-2.02-1.24-.75-.66-1.26-1.48-1.41-1.73-.15-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.26-.41.08-.17.04-.31-.02-.43-.06-.13-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44-.14-.01-.3-.01-.46-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.61.19 1.16.16 1.6.1.48-.07 1.49-.61 1.7-1.2.21-.58.21-1.09.15-1.19-.07-.1-.24-.16-.49-.28z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default WhatsAppBtn;