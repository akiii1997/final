import React from 'react'
import '../pages/css/entryform.css'
import { useState } from 'react'
import { ReactComponent as Insert } from '../assets/imgs/insert.svg'
import { ReactComponent as Update } from '../assets/imgs/update.svg'
import { ReactComponent as Delete } from '../assets/imgs/delete.svg'



export default function Entryform() {

    const [active, activeSet] = useState(0);

    const setActive = (i) => {
        activeSet(i)
    }

    const data = [
        { name: 'kidnapping', details: 'kinapped and fucked up', Address: 'horana', date: '2019' },
        { name: 'Murder', details: 'kinapped and murdered', Address: 'kaluthara', date: '2020' },
        { name: 'Robbed', details: 'kinapped and Robbed', Address: 'Colombo', date: '2021' },
        { name: 'kidnapping', details: 'kinapped and fucked up', Address: 'horana', date: '2019' },
        { name: 'Murder', details: 'kinapped and murdered', Address: 'kaluthara', date: '2020' },
        { name: 'Robbed', details: 'kinapped and Robbed', Address: 'Colombo', date: '2021' },
        { name: 'kidnapping', details: 'kinapped and fucked up', Address: 'horana', date: '2019' },
        { name: 'Murder', details: 'kinapped and murdered', Address: 'kaluthara', date: '2020' },
        { name: 'Robbed', details: 'kinapped and Robbed', Address: 'Colombo', date: '2021' },
        { name: 'kidnapping', details: 'kinapped and fucked up', Address: 'horana', date: '2019' },
        { name: 'Murder', details: 'kinapped and murdered', Address: 'kaluthara', date: '2020' },
        { name: 'Robbed', details: 'kinapped and Robbed', Address: 'Colombo', date: '2021' }

    ]

    const menu = [
        {
            name: "Insert entry", img: <Insert id="menu_icon" />
        },
        {
            name: "Update entry", img: <Update id="menu_icon" />
        },
        {
            name: "Delete entry", img: <Delete id="menu_icon" />
        }
    ]

    const InsertForm = () => {
        return (
            <>

                <form>
                    <input type="text" name="" id="" placeholder="Name" />
                    <input type="date" name="" id="date" />
                    <textarea name="" id="address" placeholder="Address" />
                    <input type="button" value="Insert" id="submit" />
                </form>

            </>
        )
    }

    const UpdateForm = () => {
        return (
            <>

                <form>
                    <div id="search_base">
                        <input type="text" name="" id="search" placeholder="Search .." />
                    </div>
                    <input type="text" name="" id="" placeholder="Name" />
                    <input type="date" name="" id="date" />
                    <textarea name="" id="address" placeholder="Address" />
                    <input type="button" value="Insert" id="submit" />
                </form>

            </>
        )
    }

    const DeleteList = () => {
        return (
            <>
            <div id="deleteBase">

                <div  id="delete_search">
                    <input type="text" name="" id="" placeholder=" &#128269; Search entry ..."/>
                </div>

                {data.map((item, i) => {
                    return (
                        
                        <div id="deleteItem" key={i}>
                            <div id="delete_name">
                            {item.name} 
                            </div>
                            <div id="delete_address">
                            {item.Address}
                            </div>
                          <div id="delete_des">
                          {item.details} 
                          </div>
                          <div id="delete_button">
                              <Delete id="delete_ico"/>
                          </div>
                            </div>
                    );
                    
                })}
                </div>
            </>
        )
    }


    const NaviUpdate = (i) => {
        setActive(i)
    }





    return (

        <div id="tab_container">

            <div id="tab_menu">
                <ul>
                    {
                        menu.map((item, i) => {
                            return (
                                <li className={active === i ? 'active' : ''} key={i} onClick={e => NaviUpdate(i, item.name)}>{item.img}<span id="menu_item_name">{item.name}</span></li>

                            );
                        })
                    }
                </ul>
            </div>
            <div id="forms">
                <div id="form_items">
                    {
                        active === 0 && <InsertForm />
                    }
                    {
                        active === 1 && <UpdateForm />
                    }
                    {
                        active === 2 && <DeleteList />
                    }
                </div>
            </div>

        </div>

    )
}
