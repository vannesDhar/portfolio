import { easeInOut, motion, useAnimation, useInView} from "framer-motion";
import { useEffect, useRef } from "react";
import skills from "./skills.js";

export default function Skills() {
    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, {   
        threshold: 0.1,
        triggerOnce: true,
    });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }else{
            controls.start("hidden");
        }
    }, [inView, controls]);

    const containerVariants = {
        hidden: {
          transition: {
            duration: 0.8,
            ease: easeInOut
          },
        },
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      };
      
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      };
      

  return (
    <div>
      <motion.div
        className="skills-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {skills.map((item, i) => {
          const Icon = item.icon
          return(

            <motion.div
            key={i}
            className="skills-item"
            variants={itemVariants}
          > 
            <div className="skills-sub-cont">
              <Icon style={{ fontSize: '40px', color: '#000000' }} />
              {item.name}
            </div>
          </motion.div> 
          )
      })}
      </motion.div>
    </div>
  );
}
