import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    // <div>Footer</div>
    <>
    <footer className='py-4 upper-footer'>
      <div className=' container-xxl'>
        <div className='row'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-3 align-items-center text-white'>
              <i class="fa-brands fa-rocketchat fa-xl"></i>
              <span className='fs-4 footer-signup'>Sign Up For New letter</span>
            </div>
          </div>
          <div className='col-7'>
            <div className="input-group mb-3">
              <input type="text" className="form-control ps-4" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <span className="input-group-text text-white button-email-footer" id="basic-addon2">Subscribe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <footer className='py-3 meddle-footer'>
      <div className='container-xxl'>
        <div className=' row'>
          <div className='col-4'>
            <h4 className='text-white'>Contact Us</h4>
            <div className='d-flex flex-column contact-us'>
              <Link className='text-white py-2 mb-1'>Doma store</Link>
              <Link className='text-white py-2 mb-1'>Egypt ,Giza <br/> 6 october city , 11 <sup>th</sup> district</Link>
              <Link className='text-white py-2 mb-1'>+02 011-126-757-50</Link>
              <Link className='text-white py-2 mb-1'>adamosama9080@outlook.com</Link>
              {/* <Link className='text-white py-2 mb-1'></Link> */}
              <div class="wrapper py-2">
                <ul className='ps-0'>
                  <li className="facebook d-flex justify-content-center align-items-center ms-0"><Link to="#"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></Link></li>
                  <li className="twitter d-flex justify-content-center align-items-center"><Link to="#"><i class="fa fa-linkedin-in fa-lg " aria-hidden="true"></i></Link></li>
                  <li className="instagram d-flex justify-content-center align-items-center"><Link to="#"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></Link></li>
                  <li className="google d-flex justify-content-center align-items-center"><Link to="#"><i className="fa fa-github fa-lg" aria-hidden="true"></i></Link></li>
                  <li className="whatsapp d-flex justify-content-center align-items-center"><Link to="#"><i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white'>Information</h4>
            <div className='d-flex flex-column information'>
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Poilcy</Link>
              <Link className='text-white py-2 mb-1'>Terms of Services</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
              {/* <Link className='text-white py-2 mb-1'></Link> */}
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white'>Accounts</h4>
            <div className='d-flex flex-column accounts'>
              <Link className='text-white py-2 mb-1' to='/'>Search</Link>
              <Link className='text-white py-2 mb-1' to='/'>About Us</Link>
              <Link className='text-white py-2 mb-1' to='/'>Faq</Link>
              <Link className='text-white py-2 mb-1' to='/'>Conatcts</Link>
              <Link className='text-white py-2 mb-1' to='/'>Size Charts</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white'>Quick Links</h4>
            <div className='quick-links d-flex flex-column'>
              <Link className='text-white mb-1 py-2' to='/'>Labtops</Link>
              <Link className='text-white mb-1 py-2' to='/'>Headphones</Link>
              <Link className='text-white mb-1 py-2' to='/'>Mobiles</Link>
              <Link className='text-white mb-1 py-2' to='/'>Watches</Link>
              <Link className='text-white mb-1 py-2' to='/'>Tablets</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <footer className='py-4 lower-footer'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='text-center text-white'>
              <p>
                This website was developed by Adam Osama, a full-stack web developer, using fake APIs.
              </p>
              <p>
                &copy; {new Date().getFullYear()} Adam. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
