import React from 'react'
import "./sb-admin-2.min.css"
import Dashboard from './Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portal from './Portal'
import Login from './Login'
import Button from "./Button"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="button" element={<Button/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App






















 

  