import { motion } from "motion/react";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      className="bg-black text-white"
    >
      <Navbar />
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
      <h1 className="text-3xl">Portfolio</h1>
    </motion.div>
  );
}

export default App;
