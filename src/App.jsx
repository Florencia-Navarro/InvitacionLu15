
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Portada from "./components/Portada";
import Presentacion from "./components/Presentacion";

function App() {
  const [invitacionAbierta, setInvitacionAbierta] = useState(false);

  return (
    <main className="min-h-screen bg-[#e8dcc5] text-[#4b5136]">
      <AnimatePresence mode="wait">
        {invitacionAbierta ? (
          <Presentacion key="presentacion" />
        ) : (
          <div key="portada">
            <Portada onAbrir={() => setInvitacionAbierta(true)} />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;