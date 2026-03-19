import React from 'react';
import './HeroBanner.css';
import { motion, AnimatePresence } from 'framer-motion';

const TRANSITION_TIME_OPACITY_S = 1;
const TRANSITION_TIME_ROTATE_S = {MIN: 1.5, MAX: 2.5};

function getRandNumBtwn(min,max){
  return Math.floor(Math.random() * max) + min;
}

function getRandDelay(max_s){
  return Math.random() * max_s;
}

function ImageHolder({ img, className }) {
  return (
    <div className={className ? className : undefined}>
      <AnimatePresence>
        <motion.div
          key={img.src}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: getRandNumBtwn(-6, 6) }}
          transition={{ 
            duration: TRANSITION_TIME_OPACITY_S,
            repeat: Infinity,
            repeatType: "reverse",
            delay: getRandDelay(TRANSITION_TIME_ROTATE_S),
            //rotate: { duration: TRANSITION_TIME_ROTATE_S },
            ease: "easeInOut" 
          }}
          className={className ? className : undefined}
        >
          <img src={img.src} alt={img.alt} className='heroBannerImg'/>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ImageHolder;