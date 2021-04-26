import React from 'react'
import './styles/navigation.css'
import Logo from '../assets/imgs/logo.svg'


export default function Navigation({show}) {
    return (
      
     <>
     { show && 
       <div id="navigation">
           <div id="left">
               <img id="logo_img" src={Logo} alt=""/>
           </div>
            <div id="right">
               <ul>
                   <li>
                      <a href="/" >Logout</a>
                   </li>
               </ul>
            </div>
        </div> 
}
      </>
    )
}
