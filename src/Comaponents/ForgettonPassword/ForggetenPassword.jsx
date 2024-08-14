import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../Colors';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BannerInLeft from '../left-banner/BannerInLeft';
import Path from '../Path/Path';
import '../../Styles/global.css'

export default function ForggetenPassword() {
  const [isHovered, setIsHovered] = useState(false);
  const [islinkHovered, setIslinkHovered] = useState(false);
  const [isContinousHovered, setIsContinousHovered] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email address does not appear to be valid!'),
  })
  return (
    // <div>ForggetenPassword</div>
    <>
      <Path></Path>
      <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
        <div className='container'>

          <div className='row'>
            <BannerInLeft></BannerInLeft>
            <div className='col-md-9'>
              <div className='row'>
                <div className='col-md-12 fw-bold m-0 mt-4 '>Forgot Your Password?</div>
                <p className='col-md-12 '>Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.</p>
                <div className='col-md-12 my-1'>
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
                          <div className='row align-items-center'>
                            <label htmlFor='email' className='col-form-label fw-bold text-black col-md-2'>
                              <span className='text-danger'>*</span> Email Address
                            </label>
                            <div className='col-md-10'>
                              <Field
                                type='email'
                                className='form-control'
                                id='email'
                                name='email'
                                placeholder='E-Mail Address'
                                onChange={(e) => {
                                  setFieldValue('email', e.target.value);
                                  console.log('Email:', e.target.value);
                                }}
                              />
                              <ErrorMessage name='email' component='div' className='text-danger' />
                            </div>
                          </div>
                        </div>


                        <div className='row mt-3'>
                          <div className='d-flex justify-content-between align-items-center'>
                            <span  className="secondery-amazone-btn fw-bold">Back</span>
                            <span className='main-amazone-btn fw-bold'>Continue</span>
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
    </>

  )
}
