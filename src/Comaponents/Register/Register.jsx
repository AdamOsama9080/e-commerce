import React, { useState } from 'react';
import Path from '../Path/Path';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { colors } from '../../Colors';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BannerInLeft from '../left-banner/BannerInLeft';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, 'First Name must be at least 1 character')
    .max(32, 'First Name must be at most 32 characters')
    .required('First Name Must be between 1 and 32 characters!'),
  lastName: Yup.string()
    .min(1, 'Last Name must be at least 1 character')
    .max(32, 'Last Name must be at most 32 characters')
    .required('Last Name Must be between 1 and 32 characters!'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email address does not appear to be valid!'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password must be between 8 and 50 characters!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Passwords must match!'),
  phoneNumber: Yup.string()
    .min(10, 'Too Short!')
    .max(10, 'Too Long!')
    .required('telephone number must be 10 number!'),
  captcha: Yup.string()
    .required('Captcha is required!'),
});

export default function Register() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPolicyHovered, setIsPolicyHovered] = useState(false);

  return (
    <>
      <Path></Path>
      <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
        <div className='container'>
          <div className='row'>
            <BannerInLeft></BannerInLeft>
            <div className='col-md-9'>
              <div className='card my-4'>
                <div className='card-body'>
                  <div className='card-title fw-bold fs-5 text-capitalize'>
                    register account
                  </div>
                  <p>If you already have an account with us, please login at the <Link className='text-decoration-none text-black'>login page</Link>.</p>

                  <div className='card border-1'>
                    <div className='card-body'>
                      <div className='card-title fw-bold fs-5 pb-3 border-bottom'>Your Personal Details</div>
                      <Formik
                        initialValues={{
                          firstName: '',
                          lastName: '',
                          email: '',
                          password: '',
                          confirmPassword: '',
                          phoneNumber: '',
                          captcha: '',
                          policy: false
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                          // Log the JSON values of the form fields to the console
                          console.log(JSON.stringify(values, null, 2));

                          // setTimeout(() => {
                          //   alert(JSON.stringify(values, null, 2));
                          //   setSubmitting(false);
                          // }, 400);
                        }}
                      >
                        {({ setFieldValue }) => (
                          <Form>
                            <div className='row'>
                              <div className='col-md-12 my-3'>
                                <div className='mb-2 row'>
                                  <label className='col-form-label fw-bold text-black col-md-4'>
                                    <span className='text-danger fw-bold' htmlFor='firstName'>* </span>First Name
                                  </label>
                                  <div className='col-md-8'>
                                    <Field 
                                      type='text' 
                                      className='form-control' 
                                      id='firstName' 
                                      name='firstName' 
                                      placeholder='First Name' 
                                      onChange={(e) => {
                                        setFieldValue('firstName', e.target.value);
                                        console.log('First Name:', e.target.value);
                                      }}
                                    />
                                    <ErrorMessage name='firstName' component='div' className='text-danger' />
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-12 my-3'>
                                <div className='mb-2 row'>
                                  <label className='col-form-label fw-bold text-black col-md-4'>
                                    <span className='text-danger fw-bold' htmlFor="lastName">* </span>Last Name
                                  </label>
                                  <div className='col-md-8'>
                                    <Field 
                                      type='text' 
                                      className='form-control' 
                                      id='lastName' 
                                      name='lastName' 
                                      placeholder='Last Name' 
                                      onChange={(e) => {
                                        setFieldValue('lastName', e.target.value);
                                        console.log('Last Name:', e.target.value);
                                      }}
                                    />
                                    <ErrorMessage name='lastName' component='div' className='text-danger' />
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-12 my-3'>
                                <div className='mb-2 row'>
                                  <label className='col-form-label fw-bold text-black col-md-4'>
                                    <span className='text-danger fw-bold' htmlFor='email'>* </span>Email Address
                                  </label>
                                  <div className='col-md-8'>
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
                                </div>
                              </div>
                              <div className='col-md-12 my-3'>
                                <div className='mb-2 row'>
                                  <label className='col-form-label fw-bold text-black col-md-4'>
                                    <span className='text-danger fw-bold' htmlFor='phoneNumber'>* </span>Telephone
                                  </label>
                                  <div className='col-md-8'>
                                    <Field 
                                      type='tel' 
                                      className='form-control' 
                                      id='phoneNumber' 
                                      name='phoneNumber' 
                                      placeholder='Telephone' 
                                      onChange={(e) => {
                                        setFieldValue('phoneNumber', e.target.value);
                                        console.log('Telephone:', e.target.value);
                                      }}
                                    />
                                    <ErrorMessage name='phoneNumber' component='div' className='text-danger' />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='card border-1 my-3'>
                              <div className='card-body'>
                                <div className='card-title fw-bold fs-5 pb-3 border-bottom'>Newsletter</div>
                                <div className='row'>
                                  <div className='col-md-12 my-3'>
                                    <div className='mb-2 row'>
                                      <label className='col-form-label fw-bold text-black col-md-4'>
                                        <span className='text-danger fw-bold'>* </span>Subscribe
                                      </label>
                                      <div className='col-md-8 d-flex align-items-center'>
                                        <div className='form-check me-3'>
                                          <Field
                                            className='form-check-input'
                                            type='radio'
                                            id='subscribeYes'
                                            name='subscribe'
                                            value='yes'
                                            onChange={(e) => {
                                              setFieldValue('subscribe', e.target.value);
                                              console.log('Subscribe:', e.target.value);
                                            }}
                                          />
                                          <label className='form-check-label' htmlFor='subscribeYes'>
                                            Yes
                                          </label>
                                        </div>
                                        <div className='form-check'>
                                          <Field
                                            className='form-check-input'
                                            type='radio'
                                            id='subscribeNo'
                                            name='subscribe'
                                            value='no'
                                            defaultChecked
                                            onChange={(e) => {
                                              setFieldValue('subscribe', e.target.value);
                                              console.log('Subscribe:', e.target.value);
                                            }}
                                          />
                                          <label className='form-check-label' htmlFor='subscribeNo'>
                                            No
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className='card border-1 my-3'>
                              <div className='card-body'>
                                <div className='card-title fw-bold fs-5 pb-3 border-bottom'>Password</div>
                                <div className='row'>
                                  <div className='col-md-12 my-3'>
                                    <div className='mb-2 row'>
                                      <label className='col-form-label fw-bold text-black col-md-4'>
                                        <span className='text-danger fw-bold'>* </span>Password
                                      </label>
                                      <div className='col-md-8'>
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
                                    </div>
                                  </div>
                                  <div className='col-md-12 my-3'>
                                    <div className='mb-2 row'>
                                      <label className='col-form-label fw-bold text-black col-md-4'>
                                        <span className='text-danger fw-bold'>* </span>Confirm Password
                                      </label>
                                      <div className='col-md-8'>
                                        <Field 
                                          type='password' 
                                          className='form-control' 
                                          id='confirmPassword' 
                                          name='confirmPassword' 
                                          placeholder='Confirm Password' 
                                          onChange={(e) => {
                                            setFieldValue('confirmPassword', e.target.value);
                                            console.log('Confirm Password:', e.target.value);
                                          }}
                                        />
                                        <ErrorMessage name='confirmPassword' component='div' className='text-danger' />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='card border-1 my-3'>
                              <div className='card-body'>
                                <div className='card-title fw-bold fs-5 pb-3 border-bottom'>Captcha</div>
                                <div className='row'>
                                  <div className='col-md-12 my-3'>
                                    <div className='mb-2 row'>
                                      <div className='col-md-12'>
                                        <div className='d-flex justify-content-center'>
                                          <ReCAPTCHA
                                            sitekey="6LdCxyQqAAAAAOhK0DTSrDS1JeTT_EKXCE2J_q3_"
                                            onChange={(value) => {
                                              setFieldValue('captcha', value);
                                              console.log('Captcha:', value);
                                            }}
                                          />
                                        </div>
                                        <ErrorMessage name='captcha' component='div' className='text-danger' />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='row'>
                            <div className='d-flex justify-content-end align-items-center my-3'>
                              <p className='mb-0'>
                                I have read and agree to the{' '}
                                <Link
                                  className='text-decoration-none fw-bold'
                                  style={{
                                    color: isPolicyHovered ? 'black' : 'rgba(0, 0, 0, 0.5)',
                                  }}
                                  onMouseEnter={() => setIsPolicyHovered(true)}
                                  onMouseLeave={() => setIsPolicyHovered(false)}
                                >
                                  Privacy Policy
                                </Link>
                              </p>
                              <Field 
                                  className='form-check-input mx-2' 
                                  type='checkbox' 
                                  id='policy' 
                                  name='policy'
                                  onChange={(e) => {
                                    setFieldValue('policy', e.target.checked);
                                    console.log('Policy:', e.target.checked);
                                  }} />
                              <button type="submit" className="btn btn-dark fw-bold rounded-5 py-1 px-4 border-0" style={{ backgroundColor: isHovered ? colors.secondary : "black", color: isHovered ? "black" : "white" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>continue</button>
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
            {/* <Path /> */}
          </div>
        </div>
      </div>
    </>
  );
}
