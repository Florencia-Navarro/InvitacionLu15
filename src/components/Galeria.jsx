
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import { evento } from "../data/evento";

function Galeria() {
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  const cerrarGaleria = () => setFotoSeleccionada(null);

  const mostrarAnterior = () => {
    setFotoSeleccionada((actual) =>
      actual === 0 ? evento.fotos.length - 1 : actual - 1
    );
  };

  const mostrarSiguiente = () => {
    setFotoSeleccionada((actual) =>
      actual === evento.fotos.length - 1 ? 0 : actual + 1
    );
  };

  useEffect(() => {
    if (fotoSeleccionada === null) return;

    const manejarTeclado = (e) => {
      if (e.key === "Escape") cerrarGaleria();
      if (e.key === "ArrowLeft") mostrarAnterior();
      if (e.key === "ArrowRight") mostrarSiguiente();
    };

    window.addEventListener("keydown", manejarTeclado);

    return () => {
      window.removeEventListener("keydown", manejarTeclado);
    };
  }, [fotoSeleccionada]);

  return (
    <section className="bg-[#e8dcc5] px-5 py-16 text-[#4b5136] sm:px-8 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-10 text-center">
          <Leaf
            size={27}
            strokeWidth={1}
            className="mx-auto mb-4 text-[#6b4426]"
          />

          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#8a8f73]">
            Momentos especiales
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl">
            Un poquito de mí
          </h2>

          

          <Sparkles
            size={20}
            strokeWidth={1}
            className="mx-auto mt-5 text-[#a58245]"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {evento.fotos.map((foto, index) => (
            <motion.button
              key={foto}
              type="button"
              onClick={() => setFotoSeleccionada(index)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Ampliar foto ${index + 1}`}
              className={`overflow-hidden border border-[#cbb9a3] bg-[#cbb9a3] p-1 ${
                index === 1 ? "sm:mt-8" : ""
              }`}
            >
              <img
                src={foto}
                alt={`Recuerdo ${index + 1} de Luisana`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {fotoSeleccionada !== null && (
          <motion.div
            key="visor-foto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cerrarGaleria}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c2118]/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Foto ampliada"
          >
            <button
              type="button"
              onClick={cerrarGaleria}
              aria-label="Cerrar foto"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-[#cbb9a3]/50 text-[#e8dcc5] transition-colors hover:bg-white/10"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                mostrarAnterior();
              }}
              aria-label="Foto anterior"
              className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center text-[#e8dcc5] sm:left-6"
            >
              <ChevronLeft size={30} />
            </button>

            
            <motion.div
                key={fotoSeleccionada}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => {
                    e.currentTarget.dataset.touchStartX = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                    const inicio = Number(e.currentTarget.dataset.touchStartX);
                    const final = e.changedTouches[0].clientX;
                    const diferencia = final - inicio;

                    if (Math.abs(diferencia) > 50) {
                    if (diferencia < 0) {
                        mostrarSiguiente();
                    } else {
                        mostrarAnterior();
                    }
                    }
                }}
                className="max-h-[82svh] max-w-[75vw] touch-pan-y border border-[#a58245] bg-[#e8dcc5] p-1"
                >
                <img
                    src={evento.fotos[fotoSeleccionada]}
                    alt={`Recuerdo ${fotoSeleccionada + 1} de Luisana`}
                    className="max-h-[80svh] max-w-full object-contain"
                />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                mostrarSiguiente();
              }}
              aria-label="Foto siguiente"
              className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center text-[#e8dcc5] sm:right-6"
            >
              <ChevronRight size={30} />
            </button>

            <p className="absolute bottom-4 text-xs tracking-[0.2em] text-[#cbb9a3]">
              {fotoSeleccionada + 1} / {evento.fotos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Galeria;