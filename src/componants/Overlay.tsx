import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carte from "./Carte";

const Overlay = ({ onClose }: { onClose: () => void }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg"
      >
        <motion.div
          ref={overlayRef}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white relative mx-4 w-full max-w-lg p-6 text-center shadow-xl"
        >
          <Carte />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Overlay;