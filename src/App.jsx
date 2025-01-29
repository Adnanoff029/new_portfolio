import { motion } from "motion/react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Education from "./Components/Education/Education";
import TechStack from "./Components/Tech_Stack/TechStack";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
      className="bg-black text-white grid grid-cols-7"
    >
      {/* 
        Navbar -> Education, Tech Stack, Projects, Experience, Contact (It should be sticky)
        Header -> Name, Summary
        Education -> List of institutions and their correspondin website and degree names (for 10th, 12th and Btech.)
        Tech Stack -> List of technologies, Soft Skills, Languages (Hindi and English)
        Projects -> List of projects and their corresponding information (Title, Description, Tech Stack, Link (Github and deployed))
        Experience -> List of employers and their corresponding information (as an expandable list) (Company Name, Position, Duration, Description and my work)
        Contact -> Email, Linkedin, Github
        Footer -> Just a made with love by me
        
        */}
      <div className="min-h-[100vh] col-span-1">
        <Navbar />
      </div>
      <div className="overflow-y-scroll col-span-6 m-5 ">
        <Header />
        <Education />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
