import React from 'react'
import { GalleryVerticalEnd, User } from 'lucide-react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
  <div className="flex items-center justify-between px-6 pt-6 pb-3">
    <NavLink to='/profile'>
        <div className="w-8 h-8 flex items-center justify-center text-gray-200">
        <User size={28} />
        </div>
    </NavLink>
    
    <h1 className="text-gray-200 text-xl"></h1>
    <NavLink to='/history'>
    <div className="w-8 h-8 text-gray-200">
        <GalleryVerticalEnd size={24} />
    </div>
    </NavLink>
  </div>

  )
}

export default Navbar
