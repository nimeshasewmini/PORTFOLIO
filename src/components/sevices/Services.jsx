import { useRef } from "react";
import "./services.scss";
import { motion,useInView } from "framer-motion";

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    
};

const Services = () => {

  const ref = useRef()

  const isInView = useInView(ref, {margin:"-100px"})
  return (
    <motion.div 
    className="services" 
    variants={variants} 
    initial="initial" 
    //animate="animate"
    //whileInView="animate"
    ref={ref}
    animate={"animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow
            <br/> and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />  
                <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas
                </h1>
            </div>
            <div className="title"> 
                <h1><motion.b whileHover={{color:"orange"}}>For You </motion.b>Business.
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>  
        <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <h2>NEXT Website</h2>
            <p>Simple website using HTML, CSS, and JavaScript</p>
            <button onClick={() => window.open("https://github.com/nimeshasewmini/NEXT-website", "_blank")}>
                Go
            </button>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <h2>QR-Code</h2>
            <p>Simple QR code generator using python</p>
            <button onClick={() => window.open("https://github.com/nimeshasewmini/QR-Code", "_blank")}>
                Go
            </button>
        </motion.div>


           <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <h2>calculator</h2>
            <p>create calculator using HTML CSS & JS</p>
            <button onClick={() => window.open("https://github.com/nimeshasewmini/calculator", "_blank")}>
                Go
            </button>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <h2>Quiz App</h2>
            <p>MERN</p>
            <button onClick={() => window.open("https://github.com/nimeshasewmini/QuizApp", "_blank")}>
                Go
            </button>
        </motion.div>


        </motion.div>

        </motion.div>
  );
};

export default Services  