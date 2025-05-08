import React from 'react'
import { GalleryVerticalEnd, User } from 'lucide-react'

const Navbar = () => {
  return (
  <div className="flex items-center justify-between px-6 pt-6 ">
    <div className="w-8 h-8 flex items-center justify-center text-gray-200">
      <User size={28} />
    </div>
    <h1 className="text-gray-200 text-xl"></h1>
    <div className="w-8 h-8 text-gray-200">
        <GalleryVerticalEnd size={24} />
    </div>
  </div>

  )
}

export default Navbar
