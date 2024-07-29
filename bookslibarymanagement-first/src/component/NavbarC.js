import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavbarC() {
  return (
    <div>
    <nav  className="bg-blue-950 flex justify-between" >
    <h5 className="   py-5 px-10 font-bold text-white">BOOKS World</h5>
    <ul className="flex font-semibold py-5 px-10 gap-5 text-white" >
    <li className="  cursor-pointer  hover:text-slate-300 "><Link to="/" >Home</Link></li>
     <li className="  cursor-pointer  hover:text-slate-300"><Link to="/allbooks">All Books</Link></li>
     <li className="  cursor-pointer  hover:text-slate-300 "><Link to="/addbooks" >Add books</Link></li>
    
        
    </ul>
</nav>
</div>
  )
}
