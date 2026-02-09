import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header
        />
      <About
        />
      <Skills
        />
      <Contact
        />
    </>
  )
}

export default App
