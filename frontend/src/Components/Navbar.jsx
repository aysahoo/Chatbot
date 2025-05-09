import React, { useEffect, useState } from 'react'
import { GalleryVerticalEnd } from 'lucide-react'
import { NavLink } from 'react-router'

const Navbar = () => {

  return (
    <div className="flex items-center justify-between px-6 pt-8 pb-3">
      <div className="text-gray-200">
        {/* Place and temperature */}
        <span>
          Bhubaneswar, India
          {location.temperature !== null && (
            <span className="font-sans font-extralight"> • 30°C</span>
          )}
        </span>
      </div>
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
