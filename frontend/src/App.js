import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome"
import './index.css'

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome></Welcome>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
