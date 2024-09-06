import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Advantage from './components/Advantage'
import Gallery from './components/Gallery'

function App() {

  return (
    <div className='flex flex-col'>
      <NavBar />  
      <Hero />
      <About />
      <Advantage />
      <Contact />
      <Gallery />
    </div>
  )
}

export default App
