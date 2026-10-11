import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Sparkles, ExternalLink } from "lucide-react";
import { evento } from "../data/evento";

function DetallesEvento() {
const detalles = [
{
icono: CalendarDays,
titulo: "¿Cuándo?",
texto: "Sábado 7 de noviembre de 2026",
},
{
icono: Clock,
titulo: "¿A qué hora?",
texto: `${evento.hora} hs`,
},
{
icono: MapPin,
titulo: "¿Dónde?",
texto: evento.salon,
detalle: evento.direccion,
},
];

return ( <section className="bg-[#4b5136] px-5 py-16 text-[#e8dcc5] sm:px-8 sm:py-20">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.7 }}
className="mx-auto max-w-lg"
> <div className="mb-10 text-center"> <Sparkles
         size={24}
         strokeWidth={1}
         className="mx-auto mb-4 text-[#cbb9a3]"
       />


      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#cbb9a3]">
        Un día para recordar
      </p>

      <h2 className="font-serif text-4xl sm:text-5xl">
        Detalles del evento
      </h2>

      <p className="mt-4 text-sm leading-7 text-[#e8dcc5]/80">
        Me encantaría compartir este momento tan especial con vos.
      </p>
    </div>

    <div className="space-y-4">
      {detalles.map((detalle, index) => {
        const Icono = detalle.icono;

        return (
          <motion.div
            key={detalle.titulo}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 border border-[#8a8f73]/60 bg-[#e8dcc5]/5 p-4 sm:p-5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#a58245] text-[#cbb9a3]">
              <Icono size={21} strokeWidth={1.4} />
            </div>

            <div className="min-w-0 pt-1">
              <p className="mb-1 text-xs uppercase tracking-[0.15em] text-[#cbb9a3]">
                {detalle.titulo}
              </p>

              <p className="break-words font-serif text-xl leading-snug sm:text-2xl">
                {detalle.texto}
              </p>

              {detalle.detalle && (
                <p className="mt-2 text-sm leading-6 text-[#e8dcc5]/80">
                  {detalle.detalle}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>

    <div className="mt-6 border border-[#8a8f73]/60 p-5 text-center">
      <Sparkles
        size={20}
        strokeWidth={1}
        className="mx-auto mb-3 text-[#a58245]"
      />

      <p className="font-serif text-2xl">Código de vestimenta</p>

      <p className="mt-2 text-sm tracking-widest text-[#cbb9a3]">
            FORMAL · TOTAL BLACK
      </p>

      <p className="mt-3 text-sm leading-6 text-[#e8dcc5]/80">
        El código de vestimenta es formal y el color elegido para la noche es el negro.
      </p>

    </div>

    <a
      href={evento.maps}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 flex min-h-12 w-full items-center justify-center gap-3 bg-[#e8dcc5] px-5 py-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-[#4b5136] transition-colors hover:bg-[#cbb9a3]"
    >
      <MapPin size={18} />
      Cómo llegar
      <ExternalLink size={15} />
    </a>
  </motion.div>
</section>


);
}

export default DetallesEvento;
