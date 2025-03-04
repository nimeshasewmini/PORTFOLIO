import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <div className="navbar">
        {/*Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span>Nimesha Sewmini</motion.span>

            {/* initial={{opacity:0,scale:0.5}}  
            animate={{opacity:1,scale:1}} 
            transition={{duration:0.5}} */}
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/youtube.png" alt="" /></a>
                <a href="#"><img src="/linkdin.png" alt="" /></a>
                <a href="#"><img src="/medium.png" alt="" /></a>
                <a href="#"><img src="/github.jpg" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
