import '../../App.css';
import { motion, useCycle} from 'framer-motion';
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
    <motion.div className="hero-banner"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        yoyo:Infinity,
        duration: 1,
        ease: "easeInOut"
        }}
    >
      <ImageHolder img={currentScene.images[0]}/>
      <ImageHolder img={currentScene.images[1]}/>
      <ImageHolder img={currentScene.images[2]}/>
      <IconHolder icon={currentScene.icon} text={currentScene.text}/>

      <h1>Welcome to Zine Rack</h1>
      <p>Your one-stop shop for indie zines and comics</p>
    </motion.div>
  );
}

export default HeroBanner;