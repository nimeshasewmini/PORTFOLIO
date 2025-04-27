import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <motion.h2 variants={textVariants} initial="initial" animate="animate" className="welcome">
          {/* Welcome! */}
        </motion.h2>

        <motion.h1 variants={textVariants} initial="initial" animate="animate">
        Web Developer <br />
          
          {/* Front-End Developer */}
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="intro-text"
        >
          <br></br>
          <pre>
            
          </pre>
          I'm <span className="highlight">Nimesha Sewmini </span>from the University of Vavuniya
        </motion.p>

        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="buttons"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="btn primary-btn"
          >
            <a href="#Portfolio">See the Latest Works</a>
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="btn secondary-btn"
          >
            <a href="#Contact">Contact me</a>
          </motion.button>
        </motion.div>

        <motion.img
          variants={textVariants}
          initial="initial"
          animate="animate"
          src="scroll.png"
          alt="scroll"
          className="scroll-icon"
        />
      </div>
      <div className="hero-image">
        <img src="/hero.png" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
