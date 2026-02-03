import { useEffect, useRef } from "react";

const PdfViewerModal = ({ isOpen, onClose, pdfUrl }) => {
    const modalRef = useRef(null);

    // ESC + bloqueo de scroll
    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";
        modalRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 flex"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Visualizador de certificado PDF"
        >
            {/* Modal */}
            <div
                ref={modalRef}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
                className="
          w-full h-full
          md:max-w-5xl md:h-[85vh] md:mx-auto md:my-auto
          bg-[#11121A]
          rounded-none md:rounded-2xl
          border md:border-[rgba(183,168,255,0.2)]
          flex flex-col
          outline-none
        "
            >
                {/* Header fijo */}
                <div className="
          flex justify-between items-center
          px-4 py-3
          border-b border-[rgba(183,168,255,0.15)]
          sticky top-0 z-10
          bg-[#11121A]
        ">
                    <h3 className="text-[#B7A8FF] font-semibold text-sm md:text-base">
                        Certificado
                    </h3>

                    <div className="flex gap-2">
                        <a
                            href={pdfUrl}
                            download
                            className=" text-xs md:text-sm px-3 py-1.5 rounded-full bg-[rgba(183,168,255,0.15)]
                            text-[#B7A8FF]
                            hover:bg-[rgba(183,168,255,0.25)]
                            focus:outline-none focus:ring-2 focus:ring-[#B7A8FF]"
                        >
                            Descargar
                        </a>

                        <button
                            onClick={onClose}
                            aria-label="Cerrar visor de PDF"
                            className="
                text-xs md:text-sm
                px-3 py-1.5
                rounded-full
                text-gray-300
                hover:text-white
                focus:outline-none focus:ring-2 focus:ring-gray-400
              "
                        >
                            Cerrar
                        </button>
                    </div>
                </div>

                {/* PDF ocupa todo el espacio */}
                <div className="flex-1 overflow-hidden">
                    <iframe
                        src={pdfUrl}
                        title="PDF Viewer"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default PdfViewerModal;
