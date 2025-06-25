import profilePic from "../assets/profilePic.jpg"
import resumeIcon from "../assets/resume_icon.png"
import { useState, useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
export default function Profile(){
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end','end start']

    })
    const lg = useTransform(scrollYProgress, [0, 1], [0 ,-90])
    
    const pr = useTransform(scrollYProgress, [0, 1], [0 ,190])
    const md = useTransform(scrollYProgress, [0, 1], [0 ,-50])
    return(
        <div ref={container} id="profile-cont">

            <motion.div style={{y:pr}} id="profile-Data-Cont">
                
                <div className="outer-circle">
                    <div className="inner-circle">
                        <img src= {profilePic} alt="profile" />
                    </div>
                </div>
                <div>
                    <h1> Hi! </h1>
                    <h1> I'm Vannes</h1>
                    <div className="links">
                        <h4>Hey there! I’m a programmer who’s obsessed with figuring out how tech works. From front-end flair to back-end logic — I’m all in.</h4>
                        <a href="/resume.pdf" download> Resume </a>
                        <a href="https://github.com/vannesDhar" > Github </a>
                        <a href="https://www.linkedin.com/in/vannes-dharmawan-a170892ab/" > LinkedIn </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}