import React from 'react';
import { Link } from 'react-router-dom';
import BannerInLeft from '../left-banner/BannerInLeft';
import Path from '../Path/Path';
import '../../Styles/global.css';


export default function Downloads() {
    return (
        //     // <div>OrderHistory</div>
        <>
            <Path />
            <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
                <div className='container'>
                    <div className='row'>
                        <BannerInLeft />
                        <div className='col-md-9 my-4'>
                            <div className='col-md-12'>

                                <div className='card-title fw-bold'>
                                    Downloads
                                </div>
                                <p className='m-0 text-black-50'>You have not made any previous downloadable orders!</p>
                                <div className='d-flex justify-content-end align-items-center'>
                                    <button className='main-amazone-btn m-0'>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
