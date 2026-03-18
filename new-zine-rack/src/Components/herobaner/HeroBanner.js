import '../../App.css';
import { motion} from 'framer-motion';
import ImageHolder from './ImageHolder';
import IconHolder from './IconHolder';
import { strawberryScene } from './Berries';

function HeroBanner() {
    const currentScene = strawberryScene
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
        <IconHolder icon={currentScene.icon} text={currentScene.text}/>
        <ImageHolder img={currentScene.images[0]}/>
        <ImageHolder img={currentScene.images[1]}/>
        <ImageHolder img={currentScene.images[2]}/>
      <h1>Welcome to Zine Rack</h1>
      <p>Your one-stop shop for indie zines and comics</p>
    </motion.div>
  );
}

export default HeroBanner;