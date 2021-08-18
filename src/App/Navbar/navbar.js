import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const [openNav,setOpenNav] = useState(false)
    return (
        <div className={openNav?"default-navbar open":"default-navbar"}>
            <span className="nav-button" onClick={()=>setOpenNav(!openNav)}>{openNav?"⇩":"⇧"}</span>
            <Link to="/a"><button className="link-to-other-page">Compare Cars</button></Link>
            <button className="link-to-other-page disabled">More Coming Soon...</button>
        </div>
    )
}
