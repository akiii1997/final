import React from 'react'
import '../pages/css/entryform.css'
import { useState } from 'react'
import {ReactComponent as Insert} from '../assets/imgs/insert.svg'
import {ReactComponent as Update} from '../assets/imgs/update.svg'
import {ReactComponent as Delete} from '../assets/imgs/delete.svg'


export default function Entryform() {

    const [active, activeSet] = useState(0);

    const setActive = (i) => {
       activeSet(i)
    }

    const menu = [
        {
            name: "Insert entry" , img:<Insert id="menu_icon"/>
        },
        {
            name: "Update entry",img:<Update id="menu_icon"/>
        },
        {
            name: "Delete entry",img:<Delete id="menu_icon"/>
        }
    ]

    return (

        <div id="tab_container">

            <div id="tab_menu">
                <ul>
                    {
                         menu.map((item, i) => {
                            return (
                              <li   className={active === i ? 'active' : ''}  key={i} onClick={e=>setActive(i)}>{item.img}<span id="menu_item_name">{item.name}</span></li>
                              
                            );
                          })
                    }
                </ul>
            </div>
            <div id="forms">

            </div>

        </div>

    )
}
