import React from 'react';
import './HeroBanner.css';
import { motion } from 'framer-motion';

const TRANSITION_TIME_OPACITY_S = 1;
//const TRANSITION_TIME_ROTATE_S = 2;

function ImageHolder({ img, className }) {
  return (
    <div className={className ? className : undefined}>
      <motion.div
        //initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: [-6, 6] }}
        transition={{ 
          duration: TRANSITION_TIME_OPACITY_S, 
          repeat: Infinity,
          repeatType: "reverse",
          //rotate: { duration: TRANSITION_TIME_ROTATE_S },
          ease: "easeInOut" 
        }}
        className={className ? className : undefined}
      >
        <img src={img.src} alt={img.alt} className='heroBannerImg'/>
      </motion.div>
    </div>
  );
}

export default ImageHolder;