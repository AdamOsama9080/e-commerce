import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { colors } from '../../Colors';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BannerInLeft from '../left-banner/BannerInLeft';
import Path from '../Path/Path';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email address does not appear to be valid!'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password must be between 8 and 50 characters!'),
  captcha: Yup.string()
    .required('Captcha is required!'),
});

export default function Register() {
  const [isHovered, setIsHovered] = useState(false);
  const [islinkHovered, setIslinkHovered] = useState(false);

  return (
    <>
      <Path></Path>
      <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
        <div className='container'>

          <div className='row'>
            <BannerInLeft></BannerInLeft>
            <div className='col-md-9'>
              <div className='row'>
                <div className='col-md-12 fw-bold m-0 mt-4 '>Account Login</div>
                <div className='col-md-6 my-1'>
                  <div className='card my-2'>
                    <div className='card-body'>
                      <div className='card-title fw-bold fs-5 text-capitalize'>
                        New Customer

                      </div>

                      <p className='mb-1'>Register Account</p>
                      <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>


                      <div className='row'>
                        <div className='d-flex justify-content-start align-items-center my-2'>
                          <button type="submit" className="btn btn-dark fw-bold rounded-5 py-1 px-4 border-0" style={{ backgroundColor: isHovered ? colors.secondary : "black", color: isHovered ? "black" : "white" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Continue</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 my-1'>
                  <div className='card my-2'>
                    <div className='card-body'>
                      <div className='card-title fw-bold fs-5 text-capitalize'>
                        Returning Customer
                      </div>
                      <p>I am a returning customer</p>


                      <Formik
                        initialValues={{
                          email: '',
                          password: '',
                          captcha: '',
                          policy: false
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                          console.log(JSON.stringify(values, null, 2));
                        }}
                      >
                        {({ setFieldValue }) => (
                          <Form>
                            <div className='col-md-12 my-2'>
                              <label className='col-form-label fw-bold text-black col-md-4'>
                                Email Address
                              </label>
                              <Field
                                type='email'
                                className='form-control'
                                id='email'
                                name='email'
                                placeholder='E-Mail'
                                onChange={(e) => {
                                  setFieldValue('email', e.target.value);
                                  console.log('Email:', e.target.value);
                                }}
                              />
                              <ErrorMessage name='email' component='div' className='text-danger' />
                            </div>

                            <div className='col-md-12 my-2'>
                              <label className='col-form-label fw-bold text-black col-md-4'>
                                Password
                              </label>
                              <Field
                                type='password'
                                className='form-control'
                                id='password'
                                name='password'
                                placeholder='Password'
                                onChange={(e) => {
                                  setFieldValue('password', e.target.value);
                                  console.log('Password:', e.target.value);
                                }}
                              />
                              <ErrorMessage name='password' component='div' className='text-danger' />
                            </div>

                            <div className='row'>
                              <div className='d-flex justify-content-between'>
                                <button type="submit" className="btn btn-dark fw-bold rounded-5 py-1 px-4 border-0" style={{ backgroundColor: isHovered ? colors.secondary : "black", color: isHovered ? "black" : "white" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Log in</button>
                                <Link className='text-decoration-none text-black-50' >forggeten password</Link>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
