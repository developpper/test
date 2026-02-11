import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const FloatingBadge = () => (
  <div className="fixed top-10 left-0 right-0 z-50 flex justify-center pointer-events-none">
    <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-xl">
      <h1 className="text-2xl font-black tracking-tighter text-pink-500 uppercase flex items-center gap-2">GLOW<span className="text-gray-800">UP</span> <Sparkles className="w-5 h-5 fill-pink-400" /></h1>
    </motion.div>
  </div>
);