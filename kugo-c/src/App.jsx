import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import ServicePage from './Pages/ServicePage/ServicePage'
import CooperatePage from './Pages/CooperatePage/CooperatePage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}> </Route>
        <Route path='/Service' element={<ServicePage/>}> </Route>
        <Route path='/Cooperate' element={<CooperatePage/>}> </Route>
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
