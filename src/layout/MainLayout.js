import React from 'react'
import Footer from '../Pages/Footer'
import Headers from '../Pages/HeaderLayout'
import NavBars from '../Pages/NavBars'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


export default function MainLayout() {
  return (
    <div>
        <Headers/>
       
        <NavBars/>

        <Footer/>
       
    </div>
  )
}
