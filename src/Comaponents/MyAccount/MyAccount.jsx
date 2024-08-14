import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../Colors';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BannerInLeft from '../left-banner/BannerInLeft';
import Path from '../Path/Path';
import '../../Styles/global.css'

export default function MyAccount() {

  return (
    // <div>ForggetenPassword</div>
    <>
      <Path></Path>
      <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
        <div className='container'>
            <div className='row'>
                <BannerInLeft></BannerInLeft>
                <div className='col-md-9'>
                    <div className='col-md-12'>
                        <div className='card my-4'>
                            <div className='card-body'>
                                <div className='card-title fw-bold'>
                                    My Account
                                </div>
                                <ul className='list-unstyled'>
                                    <li><Link to='/my-account' className='li-link-style'>Edit your account information</Link></li>
                                    <li><Link to='/my-account' className='li-link-style'>Change your password</Link></li>                                    
                                    <li><Link to='/my-account' className='li-link-style'>Modify your address book entries</Link></li>
                                    <li><Link to='/my-account' className='li-link-style'>Modify your wish list</Link></li>                                    
                                </ul>

                                <div className='card-title fw-bold'>
                                    My Orders
                                </div>
                                <ul className='list-unstyled'>
                                    <li><Link to='/my-account' className='li-link-style'>View your order history</Link></li>
                                    <li><Link to='/my-account' className='li-link-style'>Downloads</Link></li>
                                    <li><Link to='/my-account' className='li-link-style'>Your Reward Points</Link></li>
                                    <li><Link to='/my-account' className='li-link-style'>View your return requests</Link></li>
                                    <li><Link to='/my-account' className='li-link-style'>Your Transactions</Link></li>
                                    <li><Link to='/my-account' className='li-link-style'>Recurring payments</Link></li>
                                </ul>

                                <div className='card-title fw-bold'>
                                My Affiliate Account
                                </div>
                                <ul className='list-unstyled'>
                                    <li><Link to='/my-account' className='li-link-style'>Register for an affiliate account</Link></li>
                                </ul>

                                <div className='card-title fw-bold'>Newsletter</div>
                                <ul className='list-unstyled'>
                                    <li><Link to='/my-account' className='li-link-style'>Subscribe / unsubscribe to newsletter
                                    </Link></li>
                                </ul>
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
