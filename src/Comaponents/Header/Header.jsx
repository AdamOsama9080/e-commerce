import React from 'react'
import { Link, NavLink } from 'react-router-dom';
// import ReactFlagsSelect from 'react-flags-select';
import "flag-icons/css/flag-icons.min.css";



export default function Header() {
  return (
    <>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        <header className='header py-3'>
        {/* <span className={`fi-${2}`} /> */}
            <div className='container-xxl'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <p className='text-white mb-0'>
                        Free Shipping over 100L.E & Free return
                        </p>
                    </div>
                    <div className='col-md-4 text-end phone-hotline user-select-none'>
                        <Link className='text-white mb-0' href='#'>
                            Hotline: +20 11 1267 5750
                        </Link>
                    </div>
                    <div className='col-1'>
                        <select className="form-select bg-transparent text-white user-select-none" id="languageSelect">
                            <option value="english" className='text-dark'>English</option>
                            <option value="arabic" className='text-dark'>Arabic</option>
                        </select>
                    </div>
                    <div className='col-1'>
                        <select className="form-select bg-transparent text-white user-select-none" id="paymentselect">
                            <option value="USD" className='text-dark'>USD</option>
                            <option value="ُEGP" className='text-dark'>EGP</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>

        <header className='py-3 header-upper'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-2'>
                        <h2 className=''>
                            <Link to={"Home"} className='text-white' ><span className='letter-logo'>E</span>commErcE</Link>
                        </h2>
                    </div>
                    <div className='col-5'>
                        <div class="input-group">
                            <input type="text" class="form-control px-3" placeholder="Search product here..." aria-label="Search product here..." aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <span class="input-group-text serach-icon" id="basic-addon2"><i class="fa-solid fa-magnifying-glass fs-4"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='header-upper-links d-flex justify-content-between align-items-center user-select-none'>
                            <Link to={'compare'}>
                                <div className='d-flex align-items-center'>
                                        <i className="fa-solid fa-code-compare fs-3 d-inline text-white"></i>
                                        <div className='header-upper-links-items'>
                                            <span className='text-white d-block m-0 items-font'>Products</span>
                                            <span className='text-white d-block m-0 items-font'>Compare</span>
                                        </div>
                                </div>
                            </Link>

                            <div>
                                <Link to={'compare'}>

                                    <div className='d-flex align-items-center user-select-none'>
                                        <i class="fa-regular fa-heart fs-3 d-inline text-white"></i>                                
                                        <div className='header-upper-links-items'>
                                            <span className='text-white d-block m-0 items-font'>Favourit</span>
                                            <span className='text-white d-block m-0 items-font'>wishlist</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to={'compare'}>
                                <div className='d-flex align-items-center user-select-none'>
                                    <i class="fa-regular fa-user fs-3 d-inline text-white"></i>                                    
                                    <div className='header-upper-links-items'>
                                        <span className='text-white d-block m-0 items-font'>Login</span>
                                        <span className='text-white d-block m-0 items-font'>My account</span>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div>
                                <Link to={'compare'}>
                                    <div className='d-flex align-items-center user-select-none'>
                                        <i class="fa-solid fa-cart-shopping  d-inline fs-3"></i> 
                                        <div className='header-upper-links-items'>
                                            <span className='cart-count d-block w-100 text-center text-black bg-white'>0</span>
                                            <span className='text-white d-block m-0 items-font'>$0.00</span>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <header className='lower-header py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='menu-buttom d-flex align-items-center gap-4'>
                            <div className=''>
                                <div className="dropdown menu-dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-transparent d-flex gap-3 align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-brands fa-shopify fa-lg"></i>
                                        <span className='d-inline-block me-5'>Shop Categouries</span>
                                    </button>
                                    <ul className="dropdown-menu bg-black w-100">
                                        <li><Link className="dropdown-item text-white p-3 mb-1" to="/">Action</Link></li>
                                        <li><Link className="dropdown-item text-white p-3 mb-1" to="/">Another action</Link></li>
                                        <li><Link className="dropdown-item text-white p-3 mb-1 border-0" to="/">Something else here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menu-links'>
                                <div className='d-flex align-content-center gap-5'>
                                    <NavLink className="text-white" to='/'>Home</NavLink>
                                    <NavLink className="text-white" to='/'>Our store</NavLink>
                                    <NavLink className="text-white" to='/'>Blogs</NavLink>
                                    <NavLink className="text-white" to='/'>Contacts</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
