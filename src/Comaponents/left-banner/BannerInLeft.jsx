import React, { useState } from 'react'
import airpodImg from '../../images/left-banner-336x449.jpg';
import { Link } from 'react-router-dom';

export default function BannerInLeft() {
    const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className='col-md-3'>
    {/* Content for the first column */}
    <div className='card my-4'>
      <div className='card-body shadow'>
        <div className='card-title fw-bold fs-5'>Account</div>
        <ul className='list-unstyled'>
          {['login', 'register', 'forgetten password', 'my account', 'address book', 'wish list', 'order history', 'downloads', 'recurring payments', 'reward points', 'returns', 'transactions', 'newsletter', 'logout'].map((item, index) => (
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
      <div className='card-body shadow p-0  border-4'>
        <img className='w-100 border-4' src={airpodImg} alt="airpodImg" />
        <div className='my-4 position-absolute top-0' style={{left: '10%'}}>
          <div className='card-title  fs-6 text-uppercase text-white text-center'>flat 15% off</div>
          <div className='card-title fw-bold fs-5 text-white text-center text-uppercase'>mobile accessories</div>
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

  )
}
