import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarC() {
  return (
    <div>
    <nav  className="bg-blue-950 flex justify-between" >
    <h5 className="   py-5 px-10 font-bold text-white">BOOKS MANIA</h5>
    <ul className="flex font-semibold py-5 px-10 gap-5 text-white" >
    <li className="  cursor-pointer  hover:text-slate-300 "><NavLink to="/" >Home</NavLink></li>
     <li className="  cursor-pointer  hover:text-slate-300">All Books</li>
     <li className="  cursor-pointer  hover:text-slate-300 "><NavLink to="/addbooks" >Add books</NavLink></li>
    
        
    </ul>
</nav>
</div>
  )
}
