import { Header_Buttons } from "../components/Header_Buttons";
import { Layout } from "../components/layout/Layout";
import { motion } from "framer-motion";

export const ComponentsLearning = () => {
  return (
    <motion.div
      className="conocer-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        style={{
          flex: 1,
          background: "transparent",
          backdropFilter: "blur(10px)",
          padding: "1rem",
          width: "80vw",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          style={{ position: "relative", bottom: "1.2rem" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Aprende con InsideOut
        </motion.h1>

        <motion.p
          style={{ position: "relative", bottom: "1.8rem" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Descubre tutoriales prácticos y consejos fáciles para dominar tu
          computadora y resolver problemas comunes.
        </motion.p>

        <Header_Buttons />
      </motion.div>
    </motion.div>
  );
};
