import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import BannerInLeft from '../left-banner/BannerInLeft';
import Path from '../Path/Path';
import '../../Styles/global.css'

export default function AddressBook() {

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
                                            Address Book Entries
                                        </div>
                                        <div className='border rounded-1 row'>
                                            <div className='col-md-9'>
                                                <div className='card-body'>
                                                    <p className='m-0 text-black-50'>Adam</p>
                                                    <p className='m-0 text-black-50'>Osama</p>
                                                    <p className='m-0 text-black-50'>6th October City</p>
                                                    <p className='m-0 text-black-50'>
                                                        city, district
                                                        <br />
                                                        number
                                                        <br />
                                                        11, area number 8, flat number 104, floor number 2, building number
                                                        <br />
                                                        17
                                                    </p>
                                                    <p className='m-0 text-black-50'>6th October City 15555</p>
                                                    <p className='m-0 text-black-50'>ALjiza</p>
                                                    <p className='m-0 text-black-50'>Egypt</p>
                                                </div>
                                            </div>
                                            <div className='col-md-3 d-flex justify-content-between align-items-center border-start'>
                                                <Link to='/add-address-book' className='btn btn-dark fw-bold rounded-5 py-1 px-4 border-0'>Edit</Link>
                                                <Link to='/add-address-book' className='btn btn-danger fw-bold rounded-5 py-1 px-4 border-0' title='Delete'>Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center m-3 mt-0'>
                                        <button type="submit" className="secondery-amazone-btn">Back</button>
                                        <button type="submit" className="main-amazone-btn">Add Address</button>
                                    </div>
                                </div>

                                <div className='card mt-3'>
                                    <div className='card-body'>
                                        <Formik
                                            initialValues={{
                                                firstName: '',
                                                lastName: '',
                                                company: '',
                                                address1: '',
                                                address2: '',
                                                city: '',
                                                postCode: '',
                                                region: '',
                                                defaultAddress: ''
                                            }}
                                            validationSchema={Yup.object({
                                                firstName: Yup.string().required('Required'),
                                                lastName: Yup.string().required('Required'),
                                                company: Yup.string().required('Required'),
                                                address1: Yup.string().required('Required'),
                                                city: Yup.string().required('Required'),
                                                postCode: Yup.string().required('Required'),
                                                region: Yup.string().required('Required'),
                                                defaultAddress: Yup.string().required('Required')
                                            })}
                                            onSubmit={(values) => {
                                                console.log(values);
                                            }}
                                        >
                                            <Form>
                                                <div className='fw-bold mb-3'>Add Address</div>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <div className='mb-2 row'>
                                                            <label className='fw-bold text-black col-md-3'>
                                                                <span className='text-danger fw-bold'>* </span>First Name
                                                            </label>
                                                            <div className='col-md-9'>
                                                                <Field type='text' className='form-control' id='firstName' name='firstName' placeholder='First Name' />
                                                                <ErrorMessage name='firstName' component='div' className='text-danger' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='mb-2 row'>
                                                            <label className='col-form-label fw-bold text-black col-md-3'>
                                                                <span className='text-danger fw-bold'>* </span>Last Name
                                                            </label>
                                                            <div className='col-md-9'>
                                                                <Field type='text' className='form-control' id='lastName' name='lastName' placeholder='Last Name' />
                                                                <ErrorMessage name='lastName' component='div' className='text-danger' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='mb-2 row'>
                                                            <label className='col-form-label fw-bold text-black col-md-3'>
                                                                Company
                                                            </label>
                                                            <div className='col-md-9'>
                                                                <Field type='text' className='form-control' id='lastName' name='lastName' placeholder='Company' />
                                                                <ErrorMessage name='Company' component='div' className='text-danger' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='mb-2 row'>
                                                            <label className='col-form-label fw-bold text-black col-md-3'>
                                                                <span className='text-danger fw-bold'>*</span> Address 1
                                                            </label>
                                                            <div className='col-md-9'>
                                                                <Field type='text' className='form-control' id='lastName' name='Address-1' placeholder='Address 1' />
                                                                <ErrorMessage name='Company' component='div' className='text-danger' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='mb-2 row'>
                                                            <label className='col-form-label fw-bold text-black col-md-3'>
                                                                Address 2
                                                            </label>
                                                            <div className='col-md-9'>
                                                                <Field type='text' className='form-control' id='Address-2' name='Address-2' placeholder='Address 2' />
                                                                <ErrorMessage name='Company' component='div' className='text-danger' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='mb-2 row'>
                                                            <label className='col-form-label fw-bold text-black col-md-3'>
                                                                <span className='text-danger fw-bold'>*</span> City
                                                            </label>
                                                            <div className='col-md-9'>
                                                                <Field type='text' className='form-control' id='City' name='City' placeholder='City' />
                                                                <ErrorMessage name='Company' component='div' className='text-danger' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='mb-2 row'>
                                                            <label className='col-form-label fw-bold text-black col-md-3'>
                                                                <span className='text-danger fw-bold'>*</span> Post Code
                                                            </label>
                                                            <div className='col-md-9'>
                                                                <Field type='text' className='form-control' id='Post-Code' name='Post-Code' placeholder='Post Code' />
                                                                <ErrorMessage name='Company' component='div' className='text-danger' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='mb-2 row'>
                                                            <label className='col-form-label fw-bold text-black col-md-3'>
                                                                <span className='text-danger fw-bold'>*</span> Country
                                                            </label>
                                                            <div className='col-md-9'>
                                                                <Field type='text' className='form-control' id='Post-Code' name='Post-Code' placeholder='Country' />
                                                                <ErrorMessage name='Company' component='div' className='text-danger' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className='mb-2 row'>
                                                            <label className='col-form-label fw-bold text-black col-md-3'>
                                                                <span className='text-danger fw-bold'>*</span> Region / State
                                                            </label>
                                                            <div className='col-md-9'>
                                                                <Field type='text' className='form-control' id='Post-Code' name='Post-Code' placeholder='Region / State' />
                                                                <ErrorMessage name='Company' component='div' className='text-danger' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Repeat for other fields */}
                                                    <div className='col-md-12'>
                                                        <div className='mb-2 row'>
                                                            <label className='col-form-label fw-bold text-black col-md-3'>
                                                                <span className='text-danger fw-bold'>* </span>Default Address
                                                            </label>
                                                            <div className='col-md-8 d-flex align-items-center'>
                                                                <div className='form-check me-3'>
                                                                    <Field className='form-check-input' type='radio' id='defaultYes' name='defaultAddress' value='yes' />
                                                                    <label className='form-check-label' htmlFor='defaultYes'>Yes</label>
                                                                </div>
                                                                <div className='form-check'>
                                                                    <Field className='form-check-input' type='radio' id='defaultNo' name='defaultAddress' value='no' />
                                                                    <label className='form-check-label' htmlFor='defaultNo'>No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='d-flex justify-content-between align-items-center my-3'>
                                                    <button type="submit" className="secondery-amazone-btn">Back</button>
                                                    <button type="submit" className="main-amazone-btn">Continue</button>
                                                </div>
                                            </Form>
                                        </Formik>
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
