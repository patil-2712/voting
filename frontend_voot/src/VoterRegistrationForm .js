// src/VoterRegistrationForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './registration.css';


const VoterRegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Voter Registration Data:', data);
        // Send data to backend here
    };



    return (
        <div className='newdiv'>
            <Container className="my-4, demo" >
                <h1 className="text-center">Voter Registration Form</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label><strong>First Name</strong></Form.Label>
                                <Form.Control type="text" {...register('firstName', { required: 'First name is required' })} />
                                {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label><strong>Last Name</strong></Form.Label>
                                <Form.Control type="text" {...register('lastName', { required: 'Last name is required' })} />
                                {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>Date of Birth</strong></Form.Label>
                        <Form.Control type="date" {...register('dob', { required: 'Date of birth is required' })} />
                        {errors.dob && <small className="text-danger">{errors.dob.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>Email</strong></Form.Label>
                        <Form.Control type="email" {...register('email', { required: 'Email is required' })} />
                        {errors.email && <small className="text-danger">{errors.email.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>Mobile No</strong></Form.Label>
                        <Form.Control type="tel" {...register('mobile', { required: 'Mobile number is required' })} />
                        {errors.mobile && <small className="text-danger">{errors.mobile.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>Gender</strong></Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Male"
                                value="male"
                                {...register("gender", { required: "Gender is required" })}
                                inline
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                value="female"
                                {...register("gender", { required: "Gender is required" })}
                                inline
                            />
                            <Form.Check
                                type="radio"
                                label="Other"
                                value="other"
                                {...register("gender", { required: "Gender is required" })}
                                inline
                            />
                        </div>
                        {errors.gender && <small className="text-danger">{errors.gender.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>Address</strong></Form.Label>
                        <Form.Control type="text" {...register('address', { required: 'Address is required' })} />
                        {errors.address && <small className="text-danger">{errors.address.message}</small>}
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label><strong>Village</strong></Form.Label>
                                <Form.Control type="text" {...register('village', { required: 'Village is required' })} />
                                {errors.village && <small className="text-danger">{errors.village.message}</small>}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label><strong>Taluka</strong></Form.Label>
                                <Form.Control type="text" {...register('talula', { required: 'Talula is required' })} />
                                {errors.talula && <small className="text-danger">{errors.talula.message}</small>}
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label><strong>District</strong></Form.Label>
                                <Form.Control type="text" {...register('dist', { required: 'District is required' })} />
                                {errors.dist && <small className="text-danger">{errors.dist.message}</small>}
                                {/* <select {...register('dist', { required: 'District is required' })}>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select> */}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label><strong>State</strong></Form.Label>
                                <Form.Control type="text" {...register('state', { required: 'State is required' })} />
                                {errors.state && <small className="text-danger">{errors.state.message}</small>}
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>Pincode</strong></Form.Label>
                        <Form.Control type="text" {...register('pincode', { required: 'Pincode is required' })} />
                        {errors.pincode && <small className="text-danger">{errors.pincode.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>ID-Sized Photo</strong></Form.Label>
                        <Form.Control type="file" {...register('photo', { required: 'ID-sized photo is required' })} />
                        {errors.photo && <small className="text-danger">{errors.photo.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>KYC Code</strong></Form.Label>
                        <Form.Control type="text" {...register('kycCode', { required: 'KYC code is required' })} />
                        {errors.kycCode && <small className="text-danger">{errors.kycCode.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>KYC Document</strong></Form.Label>
                        <Form.Control type="file" {...register('kycDocument', { required: 'KYC document is required' })} />
                        {errors.kycDocument && <small className="text-danger">{errors.kycDocument.message}</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>Languages Known</strong></Form.Label>
                        <div>
                            <div>
                                <label style={{ marginRight: '20px' }}>
                                    <input
                                        type="checkbox"
                                        value="Marathi"
                                        // onChange={handleCheckboxChange}
                                        style={{ marginRight: '5px' }}
                                    />
                                    Marathi
                                </label>
                                <label style={{ marginRight: '20px' }}>
                                    <input
                                        type="checkbox"
                                        value="Hindi"
                                        // onChange={handleCheckboxChange}
                                        style={{ marginRight: '5px' }}
                                    />
                                    Hindi
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="English"
                                        // onChange={handleCheckboxChange}
                                        style={{ marginRight: '5px' }}
                                    />
                                    English
                                </label>
                            </div>
                        </div>
                    </Form.Group>

                    <div>
                        <input type='checkbox'></input>
                        <strong><label>Accept all terms and condition</label></strong>
                    </div>

                    <Button type="submit" variant="primary" style={{width: '20rem'}}>Register</Button>
                </Form>
            </Container>
        </div>
    )
};

export default VoterRegistrationForm;
