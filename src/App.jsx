import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Contact from './components/Contact'

function App() {

  return (
    <div className='flex flex-col'>
      <NavBar />  
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default App
