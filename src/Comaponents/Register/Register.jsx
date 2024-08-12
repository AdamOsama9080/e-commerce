import React, { useState, useRef } from 'react'
import Path from '../Path/Path'
import { Link } from 'react-router-dom'
import airpodImg from '../../images/left-banner-336x449.jpg';
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  // State to track hover status
  const [hoverIndex, setHoverIndex] = useState(null);

  // Function to handle mouse enter
  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  // Ref to handle ReCAPTCHA
  // const recaptchaRef = useRef(null);
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      {/* <Path></Path> */}
      <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
        <div className='container'>
          <div className='row'>
            {/* Column 1: 2 units wide */}
            <div className='col-md-3'>
              {/* Content for the first column */}
              <div className='card my-4'>
                <div className='card-body shadow'>
                  <div className='card-title fw-bold fs-5'>Account</div>
                  <ul className='list-unstyled'>
                    {['login', 'register', 'forgetten password', 'my account', 'address book', 'wish list', 'order history', 'downloads', 'recurring payments', 'reward points', 'returns', 'transactions', 'newsletter'].map((item, index) => (
                      <li key={index}>
                        <Link
                          className='text-capitalize fs-6 user-select-none'
                          style={{
                            color: hoverIndex === index ? 'black' : 'rgba(0, 0, 0, 0.5)',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='card my-4 p-0'>
                <div className='card-body shadow p-0 position-relative border-4'>
                  <img className='w-100 border-4' src={airpodImg} alt="airpodImg" />

                  <div className='my-4 position-absolute top-0' style={{ left: '10%' }}>
                    <div className='card-title  fs-5 text-uppercase text-white text-center'>flat 15% off</div>
                    <div className='card-title fw-bold fs-3 text-white text-center text-uppercase'>mobile accessories</div>
                  </div>

                </div>
              </div>

              <div className='card my-4'>
                <div className='card-body shadow'>
                  <div className='card-title fw-bold fs-5'>information</div>
                  <ul className='list-unstyled'>
                    {['about us', 'delivery information', 'privacy policy', 'terms & conditions', 'contact us', 'store map'].map((item, index) => (
                      <li key={index}>
                        <Link
                          className='text-capitalize fs-6 user-select-none'
                          style={{
                            color: hoverIndex === index ? 'black' : 'rgba(0, 0, 0, 0.5)',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2: 10 units wide */}
            <div className='col-md-9'>
              {/* Content for the second column */}
              <div className='card my-4'>
                <div className='card-body'>
                  <div className='card-title fw-bold fs-5 text-capitalize'>
                    register account
                  </div>
                  <p>If you already have an account with us, please login at the <Link className='text-decoration-none text-black'>login page</Link>.</p>

                  <div className='card border-1'>
                    <div className='card-body'>
                      <div className='card-title fw-bold fs-5 '>Your Personal Details</div>
                      <form>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div className='mb-2 row'>
                              <label className='col-form-label fw-bold text-black col-md-4'>
                                <span className='text-danger fw-bold'>* </span>First Name
                              </label>
                              <div className='col-md-8'>
                                <input type='text' className='form-control' placeholder='First Name' />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <div className='mb-2 row'>
                              <label className='col-form-label fw-bold text-black col-md-4'>
                                <span className='text-danger fw-bold'>* </span>Last Name
                              </label>
                              <div className='col-md-8'>
                                <input type='text' className='form-control' placeholder='Last Name' />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <div className='mb-2 row'>
                              <label className='col-form-label fw-bold text-black col-md-4'>
                                <span className='text-danger fw-bold'>* </span>Email Address
                              </label>
                              <div className='col-md-8'>
                                <input type='email' className='form-control' placeholder='E-Mail' />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <div className='mb-2 row'>
                              <label className='col-form-label fw-bold text-black col-md-4'>
                                <span className='text-danger fw-bold'>* </span>Telephone
                              </label>
                              <div className='col-md-8'>
                                <input type='tel' className='form-control' placeholder='Telephone' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  
                  <div className='card border-1 my-3'>
                    <div className='card-body'>
                      <div className='card-title fw-bold fs-5 text-capitalize '>newsletter</div>
                      <form>
                        <div className='row'>
                          {/* Subscription Option */}
                          <div className='col-md-12'>
                            <div className='mb-2 row'>
                              <label className='col-form-label fw-bold text-black col-md-4'>
                                <span className='text-danger fw-bold'>* </span>Subscribe
                              </label>
                              <div className='col-md-8 d-flex align-items-center'>
                                <div className='form-check me-3'>
                                  <input
                                    className='form-check-input'
                                    type='radio'
                                    id='subscribeYes'
                                    name='subscribe'
                                    value='yes'
                                  />
                                  <label className='form-check-label' htmlFor='subscribeYes'>
                                    Yes
                                  </label>
                                </div>
                                <div className='form-check'>
                                  <input
                                    className='form-check-input'
                                    type='radio'
                                    id='subscribeNo'
                                    name='subscribe'
                                    value='no'
                                  />
                                  <label className='form-check-label' htmlFor='subscribeNo'>
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className='card border-1 my-3'>
                    <div className='card-body'>
                      <div className='card-title fw-bold fs-5'>Captcha</div>
                      <form>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div className='mb-2 row'>
                              <div className='col-md-12'>
                                <div className='d-flex justify-content-center'>
                                  <ReCAPTCHA className=''
                                    sitekey="6LdCxyQqAAAAAOhK0DTSrDS1JeTT_EKXCE2J_q3_"
                                    // ref={recaptchaRef}
                                    onChange={onChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='d-flex justify-content-end align-items-center'>
                      <p className='mb-0'>I have read and agree to the <Link className='text-decoration-none fw-bold text-black-50'>Privacy Policy</Link></p>
                      <input type="checkbox" className="form-check-input mx-3" />
                      <button type="submit" className="btn btn-dark fw-bold rounded-5 py-1 px-4">continue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
