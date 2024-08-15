import React from 'react';
import { Link } from 'react-router-dom';
import BannerInLeft from '../left-banner/BannerInLeft';
import Path from '../Path/Path';
import '../../Styles/global.css';

export default function Wishlists() {
    return (
        <>
            <Path />
            <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
                <div className='container'>
                    <div className='row'>
                        <BannerInLeft />
                        <div className='col-md-9'>
                            <div className='col-md-12'>
                                <div className='card mt-4'>
                                    <div className='card-body'>
                                        <div className='card-title fw-bold'>
                                            My Wish List
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead  className='table-secondary'>
                                                    <tr>
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Product Name</th>
                                                        <th scope="col">Model</th>
                                                        <th scope="col">Stock</th>
                                                        <th scope="col">Unit Price</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                    <tr className=''>
                                                        <td className='text-black-50'>
                                                            <img src="path_to_image" alt="Product" style={{ width: '50px', height: '50px' }} />
                                                        </td>
                                                        <td className='text-black-50'>Product 1</td>
                                                        <td className='text-black-50'>Model 1</td>
                                                        <td className='text-black-50'>In Stock</td>
                                                        <td className='text-black-50'>$100</td>
                                                        <td className='text-black-50 d-flex justify-content-end align-items-center'>
                                                            <button className="btn btn-dark btn-sm rounded-5 px-3" title='Add to cart'><i class="fa-solid fa-cart-shopping text-white"></i></button>
                                                            <button className="btn btn-danger btn-sm ms-2 rounded-5 px-3" title='remove'><i className="fw-bold fa-solid fa-xmark"></i></button>
                                                        </td>
                                                    </tr>
                                                    {/* Repeat for other products */}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='d-flex justify-content-end align-items-center'>
                                            <button className='main-amazone-btn m-0'>Continue</button>
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
