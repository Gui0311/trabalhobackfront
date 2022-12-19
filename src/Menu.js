import React from 'react'
import { Link } from 'react-router-dom'

import "./menus.css"


export default function Menu() {
    return (
        <header>
            <nav>
                <ul>
                   
                    <li><Link class="itemMenu" to="/pessoas"> Assistir Depois </Link></li>
                </ul>
                <div class="logo"></div>
            </nav>
           
        </header>
    )
}
 
