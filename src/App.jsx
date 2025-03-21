import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { About } from "./componets/About/About";
import { Contact } from "./componets/Contact/Contact";
import { Experience } from "./componets/Experience/Experience";
import { Hero } from "./componets/Hero/Hero";
import { Navbar } from "./componets/Navbar/Navbar";
import { Projects } from "./componets/Projects/Projects";
import { Footer } from "./componets/Footer/Footer";
import { Header } from "./componets/Header/Header"; 

function App() {
  return (
    <Router>
      <div className={styles.App}>
        
        <Header />  

        
        
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

