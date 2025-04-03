'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingHuchaMichelin() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center text-center">
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Restaurante Michelin"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            1 Café a la semana = Menú en Estrella Michelin
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl text-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            HUCHA MICHELIN te ayuda a ahorrar 9 € cada semana para que al cabo de un año disfrutes de una experiencia gastronómica inolvidable.
          </motion.p>
          <motion.button
            className="bg-white text-black px-6 py-4 text-lg rounded-2xl shadow-md hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}>
            Empieza tu ahorro hoy
          </motion.button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl px-4">
        <motion.div className="rounded-2xl border p-6 shadow-sm" whileHover={{ scale: 1.02 }}>
          <h3 className="text-xl font-semibold mb-2">Ahorra sin darte cuenta</h3>
          <p className="text-gray-600">Cada semana se descuenta automáticamente 9 €. No necesitas pensar en ello.</p>
        </motion.div>
        <motion.div className="rounded-2xl border p-6 shadow-sm" whileHover={{ scale: 1.02 }}>
          <h3 className="text-xl font-semibold mb-2">Visualiza tu progreso</h3>
          <p className="text-gray-600">Accede a tu panel para ver cuánto llevas ahorrado y cuánto te falta para el premio.</p>
        </motion.div>
        <motion.div className="rounded-2xl border p-6 shadow-sm" whileHover={{ scale: 1.02 }}>
          <h3 className="text-xl font-semibold mb-2">Canjea tu experiencia</h3>
          <p className="text-gray-600">Cuando completes el objetivo, elige el restaurante con estrella Michelin que más te apetezca.</p>
        </motion.div>
      </div>

      <motion.div
        className="mt-24 max-w-xl w-full px-6 text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Apúntate para recibir noticias exclusivas y acceso anticipado</h2>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Tu email gourmet"
            className="border rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition">
            Apuntarme
          </button>
        </form>
      </motion.div>

      <footer className="mt-32 text-sm text-gray-400 mb-12">
        HUCHA MICHELIN © {new Date().getFullYear()} — Una forma diferente de darte un lujo.
      </footer>
    </div>
  );
}