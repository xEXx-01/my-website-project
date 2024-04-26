import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'


function App () {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Header />
    </>
  )
}

export default App
