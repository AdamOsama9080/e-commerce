import React from 'react';
import { Link } from 'react-router-dom';
import BannerInLeft from '../left-banner/BannerInLeft';
import Path from '../Path/Path';
import '../../Styles/global.css';

export default function Transactions() {
  return (
    // <div>Transactions</div>
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
                  Your Transactions
                  </div>
                  <p className='m-0 text-black-50'>
                  Your current balance is: <span className='fw-bold text-black-50'>$0.00.</span>
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className='table-secondary'>
                        <tr>
                          <th scope="col" style={{ width: '15%' }}>Date Added</th>
                          <th scope="col" style={{ width: '60%' }}>Description</th>
                          <th scope="col" style={{ width: '25%' }}>Amount (USD)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='text-black-50'>8/16/2024</td>
                          <td className='text-black-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam vel illum ad laudantium vitae? Assumenda?</td>
                          <td className='text-black-50'>In Stock</td>
                        </tr>
                        {/* Repeat for other rows */}
                      </tbody>
                    </table>
                  </div>
                  <div className='d-flex justify-content-start align-items-center'>
                      <p className='mb-1 text-black-50'>Showing 0 to 0 of 0 (0 Pages)</p>
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
