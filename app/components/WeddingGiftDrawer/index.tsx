"use client";

import { FiX } from "react-icons/fi";
import WeddingGift from "../WeddingGift";
import { motion } from "framer-motion";

interface WeddingGiftDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const WeddingGiftDrawer: React.FC<WeddingGiftDrawerProps> = ({ isOpen, onClose }) => {
  const drawerVariants = {
    hidden: { y: "100%", opacity: 0 }, // Start off the screen (hidden)
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" } // Slide up with transition
    },
    exit: {
      y: "100%", 
      opacity: 0, 
      transition: { duration: 0.3, ease: "easeIn" } // Slide back down
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[99] flex items-end justify-center overflow-y-auto touch-pan-y" // Ensure scrollability on mobile
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      exit="exit"
      variants={drawerVariants}
    >
      <div className="w-full max-w-md h-full p-5 bg-black bg-opacity-80 relative overflow-auto">
        <button
          className="text-xl z-20 absolute top-5 right-5 p-2 border border-white rounded-full"
          onClick={onClose}
        >
          <FiX className="text-white" />
        </button>
        <WeddingGift /> {/* The Wedding Gift content */}
      </div>
    </motion.div>
  );
};

export default WeddingGiftDrawer;