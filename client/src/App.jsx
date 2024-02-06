import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import LoginPage from './components/login'

function App() {

  return (

    <LoginPage/>


    // <>
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/abc' element={<Abc/>}>
    //   </Route>
    // </Routes>
    // </BrowserRouter>
    // </>
  )
}

export default App
