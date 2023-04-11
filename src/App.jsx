import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BodyContainer from './components/BodyContainer/BodyContainer'
import Footer from './components/Footer/Footer'
import QASection from './components/QASection/QASection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <BodyContainer/>
    <QASection/>
    <Footer/>
    </>
  )
}

export default App
