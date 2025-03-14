import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
const items = [
    {
        id:1,
        title:"Project name 1",
        img:"https://images.pexels.com/photos/30921617/pexels-photo-30921617/free-photo-of-young-woman-joyfully-holding-white-flowers-outdoors.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem similique cum ab dicta cumque nemo fuga provident, corporis nostrum accusamus necessitatibus, deserunt libero perferendis nobis nesciunt dolorem culpa est",
    },
    {
        id:2,
        title:"Project name 2",
        img:"https://images.pexels.com/photos/30921617/pexels-photo-30921617/free-photo-of-young-woman-joyfully-holding-white-flowers-outdoors.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem similique cum ab dicta cumque nemo fuga provident, corporis nostrum accusamus necessitatibus, deserunt libero perferendis nobis nesciunt dolorem culpa est",
    },
    {
        id:3,
        title:"Project name 3",
        img:"https://images.pexels.com/photos/30921617/pexels-photo-30921617/free-photo-of-young-woman-joyfully-holding-white-flowers-outdoors.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem similique cum ab dicta cumque nemo fuga provident, corporis nostrum accusamus necessitatibus, deserunt libero perferendis nobis nesciunt dolorem culpa est",
    },
    {
        id:4,
        title:"Project name 4",
        img:"https://images.pexels.com/photos/30921617/pexels-photo-30921617/free-photo-of-young-woman-joyfully-holding-white-flowers-outdoors.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatem similique cum ab dicta cumque nemo fuga provident, corporis nostrum accusamus necessitatibus, deserunt libero perferendis nobis nesciunt dolorem culpa est",
    },
];

const Single = ({ item }) => { 
    const ref = useRef();

    const {scrollYProgress}= useScroll({
        target:ref,
        // offset:["start start", "end start"]
    });

    const y=useTransform(scrollYProgress,[0,1], [-300 ,300]);

    return <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt=""/> 
                        </div>  
                        <motion.div className="textContainer" style={{y}} >
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <button>See Demo</button>
                        </motion.div>
                    </div>
                {/* </div> */}
        </div>
    </section>
}

const Portfolio = () => {

    const ref=useRef()

    const {scrollYProgress}= useScroll({
        target:ref, 
        offset:["end end","start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"> </motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}
export default Portfolio