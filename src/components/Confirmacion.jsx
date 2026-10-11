import { motion } from "framer-motion";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import { evento } from "../data/evento";

function Confirmacion() {
const mensaje = `¡Hola! 💚 Quiero confirmar mi asistencia a los XV de ${evento.nombre}, el 7 de noviembre de 2026. En total seremos n°_____personas.`;

const enlaceWhatsApp = `https://wa.me/${evento.whatsappLink}?text=${encodeURIComponent(mensaje)}`;

return ( <section className="bg-[#4b5136] px-5 py-16 text-center text-[#e8dcc5] sm:px-8 sm:py-20">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.7 }}
className="mx-auto max-w-md"
> <Sparkles
       size={25}
       strokeWidth={1}
       className="mx-auto mb-5 text-[#cbb9a3]"
     />


    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#cbb9a3]">
      ¡Quiero compartirlo con vos!
    </p>

    <h2 className="font-serif text-4xl sm:text-5xl">
      ¿Me acompañás?
    </h2>

    <Heart
      size={20}
      strokeWidth={1}
      className="mx-auto my-5 text-[#a58245]"
    />

    <p className="text-sm leading-7 text-[#e8dcc5]/90">
      Tu presencia hará que esta noche sea aún más especial.
      Me encantaría contar con vos para celebrar este momento.
    </p>

    <p className="mt-4 text-sm leading-7 text-[#cbb9a3]">
      Confirmá tu asistencia por WhatsApp.
    </p>

    <motion.a
      href={enlaceWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.98 }}
      className="mt-7 flex min-h-14 w-full items-center justify-center gap-3 bg-[#e8dcc5] px-5 py-4 text-sm font-medium text-[#4b5136] transition-colors hover:bg-[#cbb9a3]"
    >
      <MessageCircle size={21} />
      Confirmar por WhatsApp
    </motion.a>

    <p className="mt-5 text-xs leading-6 text-[#cbb9a3]">
      ¡Gracias por ser parte de este día tan importante para mí!
    </p>
  </motion.div>
</section>


);
}

export default Confirmacion;
