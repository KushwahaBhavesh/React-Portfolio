import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import './App.css'
import Scrollup from './Component/ScrollUp/Scrollup'
import Skill from './Component/Skill/Skill'
import Project from './Component/Project/Project'
import ParallelEffect from './Component/ParallelEffect/ParallelEffect'
import Bio from './Component/Bio/Bio'
import Contact from './Component/contact/Contact'
import Footer from './Component/Footer/Footer'
import WorkExperience from './Component/WorkExperience/WorkExperience'



function App() {
  return <>
    
      <Navbar />
      <Scrollup />
      <div className='container'>

        <Hero />
        <Bio />
        <Skill />
        <WorkExperience />
        <Project />
      </div>
      <ParallelEffect />
      <Contact />
      <Footer />
    
  </>
}

export default App
