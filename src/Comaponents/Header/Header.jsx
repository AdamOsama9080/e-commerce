import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
// import ReactFlagsSelect from 'react-flags-select';
import "flag-icons/css/flag-icons.min.css";
import { hover } from '@testing-library/user-event/dist/hover';
import { colors } from '../../Colors';

export default function Header() {
    const [hovered, setHovered] = useState(null);

    const handleMouseEnter = (index) => {
      setHovered(index);
    };
  
    const handleMouseLeave = () => {
      setHovered(null);
    };
  
    const menuItems = [
        { name: 'CameraS & videos', showIcon: true },
        { name: 'Computer & laptop', showIcon: true },
        { name: 'Home Appliances', showIcon: false },
        { name: 'Top Offers', showIcon: false },
        { name: 'Mobiles & tablets', showIcon: false },
        { name: 'Smart Phones', showIcon: false },
        { name: 'Computer & laptop', showIcon: true },
        { name: 'Smart phones', showIcon: false },
        { name: 'Smart Telelvisons', showIcon: false },
        { name: 'Music & Gaming', showIcon: false },
        { name: 'portable speakers', showIcon: false },
        { name: 'headphones', showIcon: false },
      ];
      
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
                                    <ul className='dropdown-menu bg-black w-100'>
                                        {menuItems.map((item, index) => (
                                            <li key={index} style={{backgroundColor:hovered === index ? colors.header: 'transparent',
                                            }}>
                                            <Link
                                                className='text-capitalize p-3 mb-1 d-flex justify-content-between align-items-center'
                                                style={{
                                                color:
                                                    hovered === index ? colors.secondary : 'white',
                                                }}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}
                                                to='/'
                                            >
                                                {item.name}
                                                {item.showIcon && (
                                                    <i className='fa-solid fa-angle-right  px-3'></i>
                                                )}
                                            </Link>
                                            </li>
                                        ))}
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

                            {/* <div className='card flex-row p-3'>
                                <div className='card-body mx-3'>
                                    <h5 className='card-title'>AirBods</h5>
                                    <ul className='list-unstyled'>
                                        <li className='text-capitalize text-black fs-6 py-2 '>Camera & Videos</li>
                                        <li className='text-capitalize text-black fs-6 py-2 '>headohones</li>
                                        <li className='text-capitalize text-black fs-6 py-2 '>i pads </li>
                                        <li className='text-capitalize text-black fs-6 py-2 '>porable speakers</li>
                                        <li className='text-capitalize text-black fs-6 py-2 '>smart phones</li>
                                        <li className='text-capitalize text-black fs-6 py-2 '>mini speakers</li>
                                        <li className='text-capitalize text-black fs-6 py-2 '>wired earbuds</li>
                                    </ul>
                                </div>
                                <div className='card-body mx-3'>
                                    <h5 className='card-title'>AirBods</h5>
                                    <ul className='list-unstyled'>
                                        <li className='text-capitalize text-black fs-6 py-2'>airpodes</li>
                                        <li className='text-capitalize text-black fs-6 py-2'>smartwatches</li>
                                        <li className='text-capitalize text-black fs-6 py-2'>TVs </li>
                                        <li className='text-capitalize text-black fs-6 py-2'>phones </li>
                                        <li className='text-capitalize text-black fs-6 py-2'>speaker</li>
                                        <li className='text-capitalize text-black fs-6 py-2'>head phones</li>
                                        <li className='text-capitalize text-black fs-6 py-2'>smart phones</li>
                                    </ul>
                                </div>
                            </div> */}

                            <div className='card flex-row p-3'>
                                <div className='card-body border-end'>
                                    <img src="./images/logo.png" alt="logo"/>
                                    <p className='text-center fw-bold'>Apple Airpodes </p>
                                    <p className='fw-bold text-center'>122.00$</p>
                                </div>
                                <div className='card-body border-end'>
                                    <img src="./images/logo.png" alt="logo"/>
                                    <p className='text-center fw-bold'>Sony Extra B </p>
                                    <p className='fw-bold text-center'>122.00$</p>
                                </div>
                                <div className='card-body'>
                                    <img src="./images/logo.png" alt="logo"/>
                                    <p className='text-center fw-bold'>Apple IPhone </p>
                                    <p className='fw-bold text-center'>122.00$</p>
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
