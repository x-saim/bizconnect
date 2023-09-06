import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MyProfile from './pages/MyProfile'
import JobBoard from "./pages/JobBoard";
import Welcome from "./pages/Welcome"
import './index.css'

import { Provider } from 'react-redux'
import store from './redux/store'

const App=()=> {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/my-profile' element={<MyProfile></MyProfile>}/>
          <Route path='/job-board' element={<JobBoard></JobBoard>}/>
          <Route path='/' element={<Welcome></Welcome>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
