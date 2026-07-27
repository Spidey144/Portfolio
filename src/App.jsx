import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'


function App() {
  return (
    <>
      <Preloader />
      <Home/>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>

    

    
    </>
  )
}

export default App
