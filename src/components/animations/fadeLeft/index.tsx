import { motion } from "framer-motion";

interface IChild {
  children: React.ReactNode;
}

export const FadeLeft = ({ children }: IChild) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 1 % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
