import React from 'react'
import { useHistory } from 'react-router-dom'
import '../pages/css/dashboard.css'
import entry from '../assets/imgs/entry.png'
import suspect from '../assets/imgs/handcupp.jpg'



export default function Dashboard() {

    
const history = useHistory();


const entrymanagement = ()=>{
    history.push('entryform')
    
}
const suspectmanagement = ()=>{
    history.push('suspect')
}
    return (
        <div id="dash_container">
          <div id="dash_items_dashboard">
              <div id="dash_card" onClick={entrymanagement}>
                  <img src={entry} id="card_img_2" alt=""/>
                  <div id="card_title">Entry Management System</div>
                  </div>
              <div id="dash_card"onClick={suspectmanagement} >
              <img src={suspect} id="card_img" alt=""/>
              <div id="card_title">Suspect Management System</div>
          </div>
          </div>
        </div>
    )

    


}
