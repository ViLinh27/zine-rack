import '../../App.css';
import { motion} from 'framer-motion';

function HeroBanner() {
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
      <h1>Welcome to Zine Rack</h1>
      <p>Your one-stop shop for indie zines and comics</p>
    </motion.div>
  );
}

export default HeroBanner;