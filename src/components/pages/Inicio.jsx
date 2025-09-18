import { motion as Motion } from 'framer-motion';

export default function Inicio() {
  return (
    <Motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Bienvenida Talento LAB</h2>
    </Motion.div>
  );
}

