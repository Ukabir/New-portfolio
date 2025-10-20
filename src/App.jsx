import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  const location = useLocation()
  const paths = ['/', '/projects', '/contact'].includes(window.location.pathname)
   useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          color: { value: "#00bcd4" },
          line_linked: { enable: true, distance: 150, color: "#00bcd4", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2 },
        },
        interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
      });
    }
  }, []);
  return (
    <>
      {paths && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {paths && <Footer />}
    </>
  )
}

export default App
