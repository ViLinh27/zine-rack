import React from 'react';
//import './HeroBanner.css';
import { motion, AnimatePresence } from 'framer-motion';

const TRANSITION_TIME_OPACITY_S = 0.3;
const TRANSITION_TIME_ROTATE_S = {MIN: 1.5, MAX: 2.5};

function getRandNumBtwn(min,max){
  return Math.floor(Math.random() * max) + min;
}

function getRandDelay(max_s){
  return Math.random() * max_s;
}

function ImageHolder({ img, className }) {
  if (!img || !img.src) {
      return null; // Return null if img or img.src is not provided
    }
  return (
    <div className={className ? className : 'default-class'}>
      <AnimatePresence>
        <motion.div
          key={img.src || 'default-key'}
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          animate={{ opacity: 1, rotate:[-6,6]}}
          transition={{ 
            duration: getRandNumBtwn(TRANSITION_TIME_ROTATE_S.MIN, TRANSITION_TIME_ROTATE_S.MAX),
            repeat: Infinity,
            repeatType: "reverse",
            delay: getRandDelay(TRANSITION_TIME_ROTATE_S),
            ease: "easeInOut" 
          }}
          className={className ? className : 'default-class'}
        >
          <img src={img.src} alt={img.alt}/>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ImageHolder;