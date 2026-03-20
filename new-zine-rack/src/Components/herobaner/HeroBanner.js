import '../../App.css';
import {useCycle} from 'framer-motion';

import ImageHolder from './ImageHolder';
import IconHolder from './IconHolder';
import { strawberryScene,blueberryScene } from './Berries';

import "./HeroBanner.css";

import { useEffect } from 'react';
function HeroBanner() {
    const [currentScene, setCurrentScene] = useCycle(
      strawberryScene,
      blueberryScene
    );

    const SLIDE_CHANGE_TIME_MS = 5000;

    useEffect(() => {
      const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
      return () => clearTimeout(timeOut)
    }, [currentScene,setCurrentScene]);

  return (
    <>
      {/* <motion.div className="hero-banner"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        yoyo:Infinity,
        duration: 1,
        ease: "easeInOut"
        }}
    > */}
      <div className="hero-banner">
      <ImageHolder img={currentScene.image1} className="berry-image berry-image-_one"/>
      <ImageHolder img={currentScene.images2}  className="berry-image berry-image-_two"/>
      <ImageHolder img={currentScene.images3}  className="berry-image berry-image-_three"/>
      <IconHolder icon={currentScene.icon} text={currentScene.text}/>

      <h1>Welcome to Zine Rack</h1>
      <p>Your one-stop shop for indie zines and comics</p>
      </div>
    </>

  );
}

export default HeroBanner;