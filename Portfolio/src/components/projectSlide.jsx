import { useState, useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import projectsData from "./projects.js"

export default function Projects(){
    const [index, setIndex] = useState(0);
    const [projectIndex, setProjectIndex] = useState(0);
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end','end start']
    })
    
    const sm = useTransform(scrollYProgress, [0, 1], [0 ,-175])

    const lg = useTransform(scrollYProgress, [0, 1], [0 ,-275])
    const projects = projectsData;

    const next = ()=> 
        setIndex((index + 1) % projects[projectIndex].images.length);
    const prev = ()=> 
        setIndex((index - 1 + (projects[projectIndex].images.length)) % projects[projectIndex].images.length) 

    function setProject(index){
        setIndex(0)
        setProjectIndex(index)
    }

    return(
        <div ref={container} className="project-cont">
            <motion.div style={{y:lg}} className="project-img">
                <motion.h1 style={{y:lg}} className="project-title">{projects[projectIndex].title}</motion.h1>
                <motion.div style={{y:lg}} className="carousel">
                    <button onClick={prev}>{"<"}</button>
                    <img src={projects[projectIndex].images[index]} alt="" />
                    <button onClick={next}>{">"}</button>
                </motion.div>
                <motion.div style= {{y:sm}}className="carousel-dots">
                    {projects[projectIndex].images.map((_, i) => (
                        <span
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`dot ${i === index ? "active" : ""}`}
                        ></span>
                    ))}
                </motion.div>
                <motion.div style= {{y:sm}}className="project-desc">
                    <span>{projects[projectIndex].description}</span>
                </motion.div>
                <motion.div style={{y:sm}} className="project-func">
                    {projects[projectIndex].functionality.map(item => (  
                        <li >{item}</li>
                    ))}
                </motion.div>
               
            </motion.div>
            <motion.div style= {{y:lg}}className="project-select">
                {projects.map((item, index) => (
                    <button key={index} onClick={()=> setProject(index)}> <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: '100%', height: '100%' , objectFit: 'contain', borderRadius:'65px'}}
                /> </button>
                ))}
            </motion.div>
         
        </div>
    )
}