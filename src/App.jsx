import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Play from './Play'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />}> 
        </Route>
        <Route path={"/play"} element={<Play />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
