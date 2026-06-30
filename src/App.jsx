import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserLayout from "../layout/UserLayout"

import Home from "../pages/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route element={<UserLayout/>}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
