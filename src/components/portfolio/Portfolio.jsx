import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Nilame Vacation Website",
    img: "/nilame.png",
    alt: "nilame vacation",
    desc: "Developed a responsive multi-page website about Kandy city using HTML and CSS, featuring sections on destinations, hotels, and contact information.",
  },
  {
    id: 2,
    title: "Movie App",
    img: "/movie.png",
    alt: "movie website",
    desc: "Fetched and displayed real-world movie data from an API using React. Implemented search functionality and responsive design for mobile devices.",
  },
  {
    id: 3,
    title: "Coffee Shop Website",
    img: "/coffee.png",
    alt: "coffee shop website",
    desc: "Built a responsive single-page coffee shop website using HTML, CSS, and JavaScript. Implemented interactive features to enhance user engagement.",
  },
  {
    id: 4,
    title: "Next Website",
    img: "/Next.png",
    alt: "next website",
    desc: "Simple website using HTML, CSS, and JavaScript",
  },
];

// Single project display component
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.alt} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Portfolio component
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
