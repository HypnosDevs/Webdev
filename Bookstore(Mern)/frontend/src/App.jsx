import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import FooterPage from './components/FooterPage'

export const App = () => {
  const [theme, setTheme] = useState('white');
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterPage />
    </>
    /*<Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/information/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>*/

  )
}

export default App;
