import React from 'react'
import Main from './pages/Main'
import List from './pages/List'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import ItemDetails from './components/ItemDetails'
function App() {
  return (
    <div className='text-center'>
      <header className='flex flex-wrap justify-center content-center mb-5 h-16 bg-gray-100'>
        <NavLink to='/'><h1 className='mr-5'>Home</h1></NavLink>
        <NavLink to='/info'><h1>About us</h1></NavLink>
      </header>
      <Routes>
        <Route path='/info' element={<Main/>}/>
        <Route path='/' element={<List/>}/>
        <Route path="/:id" element={<ItemDetails/>} />
      </Routes>
    </div>
  )
}

export default App