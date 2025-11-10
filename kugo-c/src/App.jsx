import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import ServicePage from './Pages/ServicePage/ServicePage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}> </Route>
        <Route path='/Service' element={<ServicePage/>}> </Route>
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
