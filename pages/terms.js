import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Signup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >

          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Here is Terms</h2>
        
 
    </motion.div>
  );
}
