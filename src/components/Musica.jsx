
import { useRef, useState, useEffect } from "react";
import { Music2, Pause } from "lucide-react";
import { motion } from "framer-motion";

function Musica() {
  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const actualizarEstado = () => setReproduciendo(false);

    audio.addEventListener("ended", actualizarEstado);
    audio.addEventListener("pause", actualizarEstado);

    return () => {
      audio.removeEventListener("ended", actualizarEstado);
      audio.removeEventListener("pause", actualizarEstado);
    };
  }, []);

  const alternarMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setReproduciendo(true);
      } catch (error) {
        console.error("No se pudo reproducir la música:", error);
        setReproduciendo(false);
      }
    } else {
      audio.pause();
      setReproduciendo(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/musica.mp3"
        loop
        preload="none"
      />

      <motion.button
        type="button"
        onClick={alternarMusica}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: reproduciendo ? 360 : 0 }}
        transition={{
          rotate: {
            duration: 6,
            repeat: reproduciendo ? Infinity : 0,
            ease: "linear",
        }}}
        aria-label={reproduciendo ? "Pausar música" : "Reproducir música"}
        title={reproduciendo ? "Pausar música" : "Reproducir música"}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#a58245] bg-[#4b5136] text-[#e8dcc5] shadow-lg transition-colors hover:bg-[#6b4426]"
      >
        {reproduciendo ? (
          <Pause size={20} strokeWidth={1.5} />
        ) : (
          <Music2 size={20} strokeWidth={1.5} />
        )}
      </motion.button>
    </>
  );
}

export default Musica;