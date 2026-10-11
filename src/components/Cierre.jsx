
import { motion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";
import { evento } from "../data/evento";

function Cierre() {
  return (
    <section className="relative overflow-hidden bg-[#4b5136] px-6 py-20 text-center text-[#e8dcc5] sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-xl"
      >
        <Leaf
          size={30}
          strokeWidth={1}
          className="mx-auto mb-8 rotate-[-25deg] text-[#a58245]"
        />

        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#cbb9a3]">
          Un recuerdo para siempre
        </p>

        <h2 className="font-serif text-3xl leading-relaxed sm:text-4xl">
          Hay momentos que se convierten en recuerdos para toda la vida.
        </h2>

        <p className="mx-auto mt-6 max-w-md text-sm leading-8 text-[#e8dcc5]/85 sm:text-base">
          Gracias por ser parte de uno de los míos y por acompañarme
          en una noche tan especial.
        </p>

        <Sparkles
          size={22}
          strokeWidth={1}
          className="mx-auto mt-8 text-[#a58245]"
        />

        <p className="mt-8 font-serif text-2xl italic text-[#cbb9a3]">
          Con cariño,
        </p>

        <p className="mt-2 font-serif text-4xl text-[#e8dcc5] sm:text-5xl">
          {evento.nombre}
        </p>

        <div className="mx-auto mt-8 h-px w-20 bg-[#a58245]" />

        <p className="mt-6 text-xs tracking-[0.25em] text-[#cbb9a3]">
          MIS XV · 2026
        </p>
      </motion.div>

      <Leaf
        size={90}
        strokeWidth={0.6}
        className="pointer-events-none absolute -bottom-5 -left-5 rotate-45 text-[#8a8f73]/20"
      />

      <Leaf
        size={110}
        strokeWidth={0.6}
        className="pointer-events-none absolute -right-8 -top-5 rotate-[-35deg] text-[#8a8f73]/20"
      />
    </section>
  );
}

export default Cierre;