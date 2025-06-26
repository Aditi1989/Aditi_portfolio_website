import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import Education from "./components/Education";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />         {/* Overview */}
        <Education />     {/* Education */}
        <Tech />          {/* Tech Stack */}
        <Experience />    {/* Work Experience */}
        <Works />         {/* Projects */}
        <div className='relative z-0'>
          <Contact />     {/* Contacts */}
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
