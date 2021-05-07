import React from 'react'
import '../pages/css/entryform.css'
import { useState, useRef } from 'react'

import { ReactComponent as Insert } from '../assets/imgs/insert.svg'
import { ReactComponent as Update } from '../assets/imgs/update.svg'
import { ReactComponent as Delete } from '../assets/imgs/delete.svg'



export default function Suspect() {

    const [active, activeSet] = useState(0);
    const [formData, setFormData] = useState({
        "name": ''
    });



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
            name: "Insert suspect", img: <Insert id="menu_icon" />
        },
        {
            name: "Update suspect", img: <Update id="menu_icon" />
        },
        {
            name: "Delete suspect", img: <Delete id="menu_icon" />
        }
    ]

    // hold until api

    const InsertData = () => {
        console.log(formData)
    }
    //


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
                        active === 0 && <>
                            <form>
                                <input type="text" name="ename" id="" placeholder="Name"

                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }

                                />
                                <input type="date" name="edate" id="date"

                                    onChange={(e) =>
                                        setFormData({ ...formData, date: e.target.value })
                                    }
                                />
                                <textarea name="eaddress" id="address" placeholder="Address"

                                    onChange={(e) =>
                                        setFormData({ ...formData, address: e.target.value })
                                    }
                                />
                                <textarea name="edes" id="address" placeholder="Details"

onChange={(e) =>
    setFormData({ ...formData, description: e.target.value })
}
/>
                                <input type="button" value="Insert" id="submit" onClick={InsertData} />
                            </form>
                        </>
                    }
                    {
                        active === 1 &&
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
                    }
                    {
                        active === 2 &&
                        <>
                            <>
                                <div id="deleteBase">

                                    <div id="delete_search">
                                        <input type="text" name="" id="" placeholder=" &#128269; Search entry ..." />
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
                                                    <Delete id="delete_ico" />
                                                </div>
                                            </div>
                                        );

                                    })}
                                </div>
                            </>

                        </>
                    }
                </div>
            </div>

        </div>

    )
}
