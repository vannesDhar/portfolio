import { useState, useEffect, useRef } from "react";
import { useInView, useScroll, useTransform, useSpring, motion } from "framer-motion";
import Header from "./components/Header";
import Profile from "./components/profileSlide";
import Project from "./components/projectSlide";
import Skills from "./components/skillsSlide";
import AboutMe from "./components/aboutMeSlide";
import './App.css';
import graph1 from "./assets/graph1.png";
import graph2 from "./assets/graph2.png";
import graph3 from "./assets/graph3.png";
import graph4 from "./assets/graph4.png";
import graph5 from "./assets/graph5.png";
import graph6 from "./assets/graph6.png";
import graph7 from "./assets/graph7.png";

export default function App() {
  const images = [graph1, graph2, graph3, graph4, graph5, graph6, graph7];
  const [onSection, setOnSection] = useState("profile");

  // Refs for each section
  const profileRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "end start"]
  });


  const lgRaw = useTransform(scrollYProgress, [0, 1], [0, -50]); 
  const lg = useSpring(lgRaw, {
    damping: 20,
    stiffness: 100,
    mass: 0.5
  });

   const mgRaw = useTransform(scrollYProgress, [0, 1], [0, 250]); 
  const mg = useSpring(mgRaw, {
    damping: 20,
    stiffness: 100,
    mass: 0.5
  });

  // Section tracking for header
  const profileInView = useInView(profileRef, { amount: 0.5 });
  const projectInView = useInView(projectRef, { amount: 0.5 });
  const skillsInView = useInView(skillsRef, { amount: 0.5 });
  const aboutInView = useInView(aboutRef, { amount: 0.5 });

  useEffect(() => {
    if (profileInView) {
      setOnSection("profile");
    } else if (projectInView) {
      setOnSection("projects");
    } else if (skillsInView) {
      setOnSection("skills");
    } else if (aboutInView) {
      setOnSection("about Me");
    }
  }, [profileInView, projectInView, skillsInView, aboutInView]);

  return (
    
    <main>
      <div className="svg-cont">
        {images.map((item, index) => (
          <img key={index} src={item} className={`svg-${index}`} alt={`graph-${index}`} />
        ))}
      </div>

      <Header onView={onSection} />

      <div className="profile-main-cont" ref={profileRef}>
        <Profile />
      </div>

      <motion.div style={{ y: lg }} className="proj-main-cont" ref={projectRef}>
        <Project />
      </motion.div>

      <motion.div style={{ y: mg }} className="skills-main-cont" ref={skillsRef}>
        <Skills />
      </motion.div>

      <div className="about-main-cont" ref={aboutRef}>
        <AboutMe />
      </div>
    </main>
  );
}
