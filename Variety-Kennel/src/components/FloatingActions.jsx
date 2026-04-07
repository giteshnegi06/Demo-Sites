import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/9215331016?text=Hi, I am interested in your puppies. Please provide more details."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all"
      >
        <MessageCircle size={30} />
      </motion.a>
      
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        href="tel:09729124918"
        className="w-14 h-14 bg-primary text-bg rounded-full flex items-center justify-center shadow-2xl hover:shadow-primary/50 transition-all"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
}
