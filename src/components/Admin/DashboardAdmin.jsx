import React from 'react'
import { BrowserRouter } from "react-router-dom";
import SideMenu from './SideBar'
import AppRoutes from './AppRoute'

export default function DashboardAdmin() {
  return (
    
 
    <div className="App">
      {/* <AppHeader /> */}
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
         
        <AppRoutes/> 
      </div>
      
    </div>

  
  )
}
