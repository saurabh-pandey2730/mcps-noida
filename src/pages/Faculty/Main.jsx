import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './DashBoard'
import Sidebar from './Sidebar'

export default function Main() {
  return (
    <div className='d-flex justify-content-'>
      <Sidebar/>
      <Routes>
        <Route path='/h' element={<Dashboard/>} />
      
      </Routes>
    </div>
  )
}
