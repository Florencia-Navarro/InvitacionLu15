import { motion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";
import CuentaRegresiva from "./CuentaRegresiva";
import DetallesEvento from "./DetallesEvento";
import Regalos from "./Regalos";
import Confirmacion from "./Confirmacion";
import Galeria from "./Galeria";
import Musica from "./Musica";
import Cierre from "./Cierre";

function Presentacion() {
return ( <div className="w-full overflow-hidden">

    <Musica />

  {/* Sección de bienvenida */}
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="flex min-h-[75svh] flex-col items-center justify-center px-6 py-16 text-center"
  >
    <Leaf
      size={30}
      strokeWidth={1}
      className="mb-6 text-[#6b4426]"
    />

    <p className="mb-4 text-xs uppercase tracking-[0.2em] leading-6 text-[#8a8f73]">
      Hay momentos que merecen celebrarse
    </p>

    <h2 className="text-5xl leading-tight sm:text-6xl">
      ¡Mis quince años!
    </h2>

    <Sparkles
      size={22}
      strokeWidth={1}
      className="my-6 text-[#a58245]"
    />

    <p className="max-w-sm text-sm leading-8">
      Quiero compartir con vos una noche llena de alegría,
      magia y recuerdos que quedarán para siempre.
    </p>

    <p className="mt-6 font-serif text-2xl italic text-[#6b4426]">
      ¡Te espero!
    </p>
  </motion.section>

  {/* Sección independiente de cuenta regresiva */}
  <section className="w-full border-t border-[#cbb9a3] py-12 sm:py-16">

    <CuentaRegresiva />

    <DetallesEvento />

    <Galeria />

    <Regalos />

    <Confirmacion />

    <Cierre />

  </section>

</div>


);
}

export default Presentacion;
