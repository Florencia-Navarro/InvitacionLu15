
import { motion } from "framer-motion";
import { Sparkles, Leaf } from "lucide-react";
import { evento } from "../data/evento";

function Portada({ onAbrir }) {
  return (
    <section className="flex min-h-[100svh] items-center justify-center bg-[#e8dcc5] px-4 py-5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md border border-[#8a8f73] p-2"
      >
        <div className="relative flex min-h-[82svh] flex-col items-center justify-center border border-[#cbb9a3] px-4 py-8 text-center sm:px-8 sm:py-10">
          <Sparkles
            size={18}
            strokeWidth={1}
            className="absolute right-5 top-5 text-[#a58245]"
          />

          <Sparkles
            size={15}
            strokeWidth={1}
            className="absolute bottom-5 left-5 text-[#a58245]"
          />

          <div className="mb-5 flex items-center justify-center gap-3 text-[#6b4426]">
            <Leaf size={20} strokeWidth={1} />
            <span className="h-px w-8 bg-[#8a8f73]" />
            <Sparkles size={15} strokeWidth={1} />
            <span className="h-px w-8 bg-[#8a8f73]" />
            <Leaf size={20} strokeWidth={1} />
          </div>

          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#6b4426] sm:text-xs sm:tracking-[0.3em]">
            Una ocasión especial
          </p>

          <h1 className="text-6xl text-[#4b5136] sm:text-7xl">
            Mis XV
          </h1>

          {/* Foto de Luisana */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="my-5 border border-[#a58245] p-1"
            >
                <img
                    src={evento.fotoPortada}
                    alt={`Foto de ${evento.nombre}`}
                    className="h-52 w-40 border border-[#cbb9a3] object-cover sm:h-60 sm:w-44"
                />
            </motion.div>

          <p className="max-w-full break-words font-serif text-3xl italic text-[#6b4426] sm:text-4xl">
            {evento.nombre}
          </p>

          <div className="my-4 h-px w-16 bg-[#a58245]" />

          <p className="max-w-xs text-xs leading-6 text-[#4b5136] sm:text-sm sm:leading-7">
            Una noche mágica, mil recuerdos por crear.
          </p>

          <motion.button
            onClick={onAbrir}
            whileTap={{ scale: 0.97 }}
            className="mt-6 min-h-12 w-full max-w-xs border border-[#4b5136] px-5 py-3 text-xs uppercase tracking-[0.16em] text-[#4b5136] transition-colors hover:bg-[#4b5136] hover:text-[#e8dcc5]"
          >
            Abrir invitación
          </motion.button>

          <p className="mt-5 text-[9px] tracking-[0.12em] text-[#8a8f73] sm:text-xs sm:tracking-[0.2em]">
            ✦ UN MOMENTO PARA RECORDAR ✦
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Portada;