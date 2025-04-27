import { useRef, useState } from "react";
import "./contact.scss";
import { motion, noop, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm('service_oc03yak', 'template_eacgjmq', formRef.current, {
        publicKey: '081HBDMJAi-af5mMJ',
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>armnimeshasewmini.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Vavuniya</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Linkedin</h2>
          <span><a href="https://www.linkedin.com/in/nimesha-sewmini-983706285/">NimeshaSewmini</a></span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay:1, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 3 }}
              d="M15.1007 15.0272L14.5569 14.5107L15.1007 15.0272Z ... [truncated path for brevity]"
            />
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2,duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button type="submit">Submit</button>

          <div className="form-status">
            {success && <span className="success">Message sent successfully!</span>}
            {error && <span className="error">Oops! Something went wrong.</span>}
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
