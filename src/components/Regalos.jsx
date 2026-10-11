import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Copy, Check, Sparkles } from "lucide-react";
import { evento } from "../data/evento";

function Regalos() {
const [mostrarAlias, setMostrarAlias] = useState(false);
const [copiado, setCopiado] = useState(false);

async function copiarAlias() {
try {
await navigator.clipboard.writeText(evento.aliasRegalo);
setCopiado(true);
setTimeout(() => setCopiado(false), 2000);
} catch {
setCopiado(false);
}
}

return ( <section className="bg-[#e8dcc5] px-5 py-16 text-center text-[#4b5136] sm:px-8 sm:py-20">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.7 }}
className="mx-auto max-w-md"
> <Gift
       size={30}
       strokeWidth={1.2}
       className="mx-auto mb-5 text-[#a58245]"
     />


    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#8a8f73]">
      Un gesto de cariño
    </p>

    <h2 className="font-serif text-4xl sm:text-5xl">
      Un regalo especial
    </h2>

    <Heart
      size={19}
      strokeWidth={1}
      className="mx-auto my-5 text-[#a58245]"
    />

    <p className="text-sm leading-7">
      Lo más importante para mí es compartir este día con vos.
      Tu presencia es mi mejor regalo.
    </p>

    <p className="mt-4 text-sm leading-7">
      Pero si deseás obsequiarme algo más, te dejo una opción
      para hacerlo con mucho cariño.
    </p>

    <motion.button
      type="button"
      onClick={() => setMostrarAlias(!mostrarAlias)}
      whileTap={{ scale: 0.98 }}
      aria-expanded={mostrarAlias}
      className="mt-7 flex min-h-12 w-full items-center justify-center gap-3 border border-[#4b5136] px-5 py-4 text-xs uppercase tracking-[0.12em] transition-colors hover:bg-[#4b5136] hover:text-[#e8dcc5]"
    >
      <Gift size={18} />
      {mostrarAlias ? "Ocultar datos" : "Ver datos para regalar"}
    </motion.button>

    <AnimatePresence>
      {mostrarAlias && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: 10 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="mt-5 border border-[#cbb9a3] bg-white/30 p-5">
            <Sparkles
              size={20}
              strokeWidth={1}
              className="mx-auto mb-3 text-[#a58245]"
            />

            <p className="text-xs uppercase tracking-[0.2em] text-[#8a8f73]">
              Alias para transferencias
            </p>

            <p className="my-4 break-all font-serif text-2xl">
              {evento.aliasRegalo}
            </p>

            <button
              type="button"
              onClick={copiarAlias}
              className="flex min-h-11 w-full items-center justify-center gap-2 bg-[#4b5136] px-4 py-3 text-sm text-[#e8dcc5] transition-colors hover:bg-[#6b4426]"
            >
              {copiado ? <Check size={17} /> : <Copy size={17} />}
              {copiado ? "¡Alias copiado!" : "Copiar alias"}
            </button>

            <p className="mt-3 text-xs leading-5 text-[#6b4426]">
              ¡Muchas gracias por tu cariño!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
</section>


);
}

export default Regalos;
