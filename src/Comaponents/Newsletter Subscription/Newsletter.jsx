import React from 'react';
import { Link } from 'react-router-dom';
import BannerInLeft from '../left-banner/BannerInLeft';
import Path from '../Path/Path';
import '../../Styles/global.css';
import { Formik, Form, Field } from 'formik';

export default function Newsletter() {
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
                      Order History
                    </div>

                    <Formik
                      initialValues={{ subscribe: 'no' }}
                      onSubmit={(values) => {
                        console.log('Form submitted with:', values);
                      }}
                    >
                      {({ setFieldValue }) => (
                        <Form>
                          <div className='col-md-12 my-3'>
                            <div className='mb-2 row'>
                              <label className='col-form-label fw-bold text-black col-md-4'>
                                Subscribe
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
                          <div className='d-flex justify-content-between align-items-center'>
                            <button type='reset' className='secondery-amazone-btn m-0'>Back</button>
                            <button type='submit' className='main-amazone-btn m-0'>Continue</button>
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
    </>
  );
}
