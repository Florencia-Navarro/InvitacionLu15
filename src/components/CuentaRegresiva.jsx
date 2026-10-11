
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { evento } from "../data/evento";

function calcularTiempo() {
  const destino = new Date(
    `${evento.fecha}T${evento.hora}:00`
  ).getTime();

  const diferencia = destino - Date.now();

  if (diferencia <= 0) {
    return null;
  }

  return {
    Días: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    Horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    Minutos: Math.floor((diferencia / (1000 * 60)) % 60),
    Segundos: Math.floor((diferencia / 1000) % 60),
  };
}

function CuentaRegresiva() {
  const [tiempo, setTiempo] = useState(calcularTiempo);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const unidades = tiempo ? Object.entries(tiempo) : [];

  return (
    <section className="relative overflow-hidden bg-[#f4eddf] px-5 py-14 text-center text-[#4b5136] sm:px-8 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl"
      >
        <Sparkles
          size={24}
          strokeWidth={1}
          className="mx-auto mb-5 text-[#a58245]"
        />

        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#8a8f73]">
          Un día inolvidable se acerca
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl">
          Cuenta regresiva
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#6b4426]">
          Cada vez falta menos para compartir una noche llena de
          recuerdos, alegría y momentos especiales.
        </p>

        {tiempo ? (
          <div className="mx-auto mt-9 grid w-full max-w-2xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
            {unidades.map(([unidad, valor], index) => (
              <motion.div
                key={unidad}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative border border-[#a58245]/70 bg-[#e8dcc5] px-2 py-5 sm:py-7"
              >
                <div className="absolute left-2 right-2 top-2 h-px bg-[#a58245]/40" />

                <p className="font-serif text-4xl tabular-nums text-[#4b5136] sm:text-5xl">
                  {String(valor).padStart(2, "0")}
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#6b4426] sm:text-xs">
                  {unidad}
                </p>

                <div className="absolute bottom-2 left-2 right-2 h-px bg-[#a58245]/40" />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-9"
          >
            <Sparkles
              size={30}
              strokeWidth={1}
              className="mx-auto mb-4 text-[#a58245]"
            />

            <p className="font-serif text-3xl sm:text-4xl">
              ¡Llegó el gran día!
            </p>

            <p className="mt-3 text-sm text-[#6b4426]">
              Hoy celebramos los XV de {evento.nombre}.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default CuentaRegresiva;