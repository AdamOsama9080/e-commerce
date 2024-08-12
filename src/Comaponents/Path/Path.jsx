import React from 'react'
import { Link } from 'react-router-dom'
import Register from './../Register/Register';

export default function Path() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container-fluid d-flex justify-content-center">
            <div className="d-flex align-items-center">
            {/* Navbar content */}
            <span className="m-2">
                <Link to="Home" className='text-black'><i class="fa-solid fa-house-chimney"></i></Link>
            </span>
            <span className="m-2">
                <Link to="Home" className='text-black'> / <i className="fa-solid fa-angles-right"></i> Account</Link>
            </span>
            <span className="m-2">
                <Link to="Register" className='text-black'> / Register</Link>
            </span>
            </div>
        </div>
        </nav>

    </>
  )
}
