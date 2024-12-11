// src/VoterRegistrationForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './registration.css'
// import { useNavigate } from 'react-router-dom';


const VoterRegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [userRegistration, setUserRegistration] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        mobile: "",
        altmonile: "",
        gender: "",
        address: "",
        village: "",
        taluka: "",
        district: "",
        state: "",
        pincode: "",
        photo: "",
        kycvideo: "",
        kycDocument1: "",
        kycDocument2: "",
        languages: "",
        occupation: "",
        income: "",
        terms: false,
        username: "",
        password: "",
    });
    // const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log('Voter Registration Data:', data);
        // Send data to backend here
    };
    const handleInput = (e) => {
        const { name, type, checked, value } = e.target;
        // Update state based on the input type
        setUserRegistration({
            ...userRegistration,
            [name]: type === "checkbox" ? checked : value,
        });
    };



    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
            <div className='newdiv bg-dark'>
                <Container className="my-4, demo" >
                    <h1 className="text-center bg-dark-subtle">Voter Registration Form</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label><strong>First Name</strong></Form.Label>
                                    <Form.Control
                                        value={userRegistration.firstName}
                                        onChange={handleInput}
                                        name='firstName'
                                        type="text" {...register('firstName', { required: 'First name is required' })} />
                                    {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label><strong>Last Name</strong></Form.Label>
                                    <Form.Control
                                        value={userRegistration.lastName}
                                        onChange={handleInput}
                                        name='lastName'
                                        type="text" {...register('lastName', { required: 'Last name is required' })} />
                                    {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>Date of Birth</strong></Form.Label>
                            <Form.Control
                                value={userRegistration.dob}
                                onChange={handleInput}
                                type="date" {...register('dob', { required: 'Date of birth is required' })} />
                            {errors.dob && <small className="text-danger">{errors.dob.message}</small>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>Email</strong></Form.Label>
                            <Form.Control
                                value={userRegistration.email}
                                onChange={handleInput}
                                type="email" {...register('email', { required: 'Email is required' })} />
                            {errors.email && <small className="text-danger">{errors.email.message}</small>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>Mobile No</strong></Form.Label>
                            <Form.Control
                                value={userRegistration.mobile}
                                onChange={handleInput}
                                type="tel" {...register('mobile', { required: 'Mobile number is required' })} />
                            {errors.mobile && <small className="text-danger">{errors.mobile.message}</small>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>Alternate Mobile No</strong></Form.Label>
                            <Form.Control
                                value={userRegistration.altmonile}
                                onChange={handleInput}
                                type="tel" {...register('altmonile', { required: 'Mobile number is required' })} />
                            {errors.mobile && <small className="text-danger">{errors.mobile.message}</small>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>Gender</strong></Form.Label>
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    value="male"
                                    checked={userRegistration.gender === 'male'}
                                    onChange={handleInput}
                                    {...register("gender", { required: "Gender is required" })}
                                    inline
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    value="female"
                                    checked={userRegistration.gender === 'female'}
                                    onChange={handleInput}
                                    {...register("gender", { required: "Gender is required" })}
                                    inline
                                />
                                <Form.Check
                                    type="radio"
                                    label="Other"
                                    value="other"
                                    checked={userRegistration.gender === 'other'}
                                    onChange={handleInput}
                                    {...register("gender", { required: "Gender is required" })}
                                    inline
                                />
                            </div>
                            {errors.gender && <small className="text-danger">{errors.gender.message}</small>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>Address</strong></Form.Label>
                            <Form.Control
                                value={userRegistration.address}
                                onChange={handleInput}
                                type="text" {...register('address', { required: 'Address is required' })} />
                            {errors.address && <small className="text-danger">{errors.address.message}</small>}
                        </Form.Group>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label><strong>Village</strong></Form.Label>
                                    <Form.Control
                                        value={userRegistration.village}
                                        onChange={handleInput}
                                        type="text" {...register('village', { required: 'Village is required' })} />
                                    {errors.village && <small className="text-danger">{errors.village.message}</small>}
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label><strong>Taluka</strong></Form.Label>
                                    <Form.Control
                                        value={userRegistration.taluka}
                                        onChange={handleInput}
                                        type="text" {...register('talula', { required: 'Talula is required' })} />
                                    {errors.talula && <small className="text-danger">{errors.talula.message}</small>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label><strong>District</strong></Form.Label>
                                    <Form.Control
                                        value={userRegistration.district}
                                        onChange={handleInput}
                                        type="text" {...register('district', { required: 'District is required' })} />
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
                                    {/* <Form.Control type="text" {...register('state', { required: 'State is required' })} /> */}
                                    {/* {errors.state && <small className="text-danger">{errors.state.message}</small>} */}

                                    <select
                                        id="states"
                                        name="state"
                                        class="form-select"
                                        value={userRegistration.state}
                                        onChange={handleInput}>
                                        <option value="">Select Your State</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Ladakh">Ladakh</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                    </select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>Pincode</strong></Form.Label>
                            <Form.Control
                                value={userRegistration.pincode}
                                onChange={handleInput}
                                type="text" {...register('pincode', { required: 'Pincode is required' })} />
                            {errors.pincode && <small className="text-danger">{errors.pincode.message}</small>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>ID-Sized Photo</strong></Form.Label>
                            <Form.Control
                                value={userRegistration.photo}
                                onChange={handleInput}
                                type="file" {...register('photo', { required: 'ID-sized photo is required' })} />
                            {errors.photo && <small className="text-danger">{errors.photo.message}</small>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>KYC Video</strong></Form.Label>
                            <Form.Control
                                value={userRegistration.kycvideo}
                                onChange={handleInput}
                                type="file" {...register('kycvideo', { required: 'KYC video is required' })} />
                            {errors.kycCode && <small className="text-danger">{errors.kycCode.message}</small>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>KYC Document No. 1</strong></Form.Label>
                            <Form.Control
                                value={userRegistration.kycDocument1}
                                onChange={handleInput}
                                type="file" {...register('kycDocument1', { required: 'KYC document is required' })} />
                            {errors.kycDocument && <small className="text-danger">{errors.kycDocument.message}</small>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>KYC Document No. 2</strong></Form.Label>
                            <Form.Control
                                value={userRegistration.kycDocument2}
                                onChange={handleInput}
                                type="file" {...register('kycDocument2', { required: 'KYC document is required' })} />
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
                                            name="languages"
                                            onChange={handleInput}
                                            style={{ marginRight: '5px' }}
                                        />
                                        Marathi
                                    </label>
                                    <label style={{ marginRight: '20px' }}>
                                        <input
                                            type="checkbox"
                                            value="Hindi"
                                            name="languages"
                                            onChange={handleInput}
                                            style={{ marginRight: '5px' }}
                                        />
                                        Hindi
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="English"
                                            name="languages"
                                            onChange={handleInput}
                                            style={{ marginRight: '5px' }}
                                        />
                                        English
                                    </label>
                                </div>
                            </div>
                        </Form.Group>

                        {/* <div>
                                <input type='checkbox'
                                value={userRegistration.terms}
                                ></input>
                                <strong><label>Accept all terms and condition</label></strong>
                            </div>
                            <br></br>
                            */}

                           


                        {/* <fieldset className="mb-3 p-2 border border-secondary rounded bg-body-secondary"> */}
                            <div>
                                <input
                                    className="m-1"
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    required
                                    value={userRegistration.terms}
                                    onChange={handleInput}
                                />
                                <label className="mb-4" htmlFor="terms"><strong>Accept all terms and condition</strong></label>
                            </div>
                        {/* </fieldset> */}

                        {userRegistration.terms && (
                            <Container className="d-flex justify-content-center align-items-center ">
                                <div className="w-50">
                                    <Row>
                                        <Col md={10} className="mx-auto">
                                            <Form.Group className="mb-3">
                                                <Form.Label><strong>Username</strong></Form.Label>
                                                <Form.Control 
                                                value={userRegistration.username}
                                                placeholder='Enter your username'
                                                type="text" {...register('username', { required: 'Username is required' })} />
                                                {errors.username && <small className="text-danger">{errors.username.message}</small>}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={10} className="mx-auto">
                                            <Form.Group className="mb-3">
                                                <Form.Label><strong>Password</strong></Form.Label>
                                                <Form.Control 
                                                value={userRegistration.password}
                                                type="password"
                                                placeholder='Enter Your password'
                                                {...register('password', { required: 'Password is required' })} />
                                                {errors.password && <small className="text-danger">{errors.password.message}</small>}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        )}


                        <center>
                            {/* <button className='btn btn-link p-0' onClick={ () => navigate('/Home')}>Forgot Password</button> */}
                            <Button id='button1' type="submit" variant="primary" style={{ width: '15rem' }}>Register Now</Button>
                            <Button id='button2' type="submit" variant="success" style={{ width: '15rem' }}>
                                <a href='/VoterRegistrationForm' style={{ color: 'white' }}>
                                    Reset Form</a>
                            </Button>
                        </center>
                        <br></br>
                        <br></br>
                    </Form>
                </Container>
            </div>
            {/* </form> */}
        </>
    )
};

export default VoterRegistrationForm;
