import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="bg-gray-950 p-4 flex justify-between items-center">
      {/* Left Side Icon */}
      <div className="text-white">
        <Link to="/">
      <svg className="h-10 w-18 text-white-600"  viewBox="0 0 24 24"  fill="none"
      stroke="currentColor"  strokeWidth="2.2"  strokeLinecap="round"
      strokeLinejoin="round">  <path d="M9 19.5A2.5 4.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
      </Link>
      </div>
     

      {/* Middle Buttons */}
      <div className="flex justify-center space-x-6">
        <Link to="/books">
        <button className="text-white font-semibold border-b-2 border-transparent hover:border-white">Books
        </button>
        </Link>
        <Link to="/addBook">
        <button className="text-white font-semibold border-b-2 border-transparent hover:border-white">Add Book
        </button>
        </Link>
       <Link to="/about">
       <button className="text-white font-semibold border-b-2 border-transparent hover:border-white">About Us
       </button>
       </Link>
      </div>
      <button className="text-white bg-blue-700 px-4 py-2 rounded  border-b-2 border-transparent hover:border-white">Log In</button>
    </header>
  )
}

export default Nav