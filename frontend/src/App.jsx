import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'
import Navbar from '../components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <a href="/" target="_blank">
          <img src={logo} alt="App Logo" />
        </a>
        <ul>
          <NavLink><li>Home</li></NavLink>
        </ul>
      </div>
     
    </>
  )
}

export default App
