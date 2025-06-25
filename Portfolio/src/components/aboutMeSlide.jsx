import bg1 from "../assets/aboutMe.jpg"
import { useState, useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
export default function aboutMe(){
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end','end start']
    })
    
    const lg = useTransform(scrollYProgress, [0, 1], [0 ,-100])
    return(
        <>
            <div ref={container} className="about-cont">
                <motion.img style= {{y:lg}} className= "about-img" src={bg1} alt="" />
                <motion.p style={{y:lg}} className="about-text">
                Hi! I'm Vannes -- a curious and passionate newbie programmer who’s diving headfirst into the world of code. I may be just getting started, but I’m all in — from front-end stuff to back-end magic, I want to understand how tech works in real life, not just in tutorials.
                Right now, I’m learning by building, breaking things, and figuring it all out one line of code at a time. Whether it's web development, software logic, or just cool tech in general — I’m here for it.
                Let’s build something awesome. 🚀


                </motion.p>
            </div>
        </>

    )
}