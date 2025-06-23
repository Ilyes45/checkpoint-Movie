import React from 'react'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import MovieDescription from './Components/MovieDescription/MovieDescription'

const Hom = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/movie/:id' element={<MovieDescription />} />
      </Routes>
    </div>
  )
}

export default Hom
