import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer"


function App(){
  return(
    <>
    <div className="bg-slate-900 min-h-screen text-white">
          <Navbar/>
          <Hero/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
       
    </div>
    </>
  );
};
export default App;