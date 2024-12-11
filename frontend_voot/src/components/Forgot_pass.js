import React, { useState } from 'react';
import './login.css';

const Forgot_pass = () => {
    const [email, setEmail] = useState(''); // State to store the email input

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation to check if the email is not empty
        if (email.trim() === '') {
            alert("Please enter your email address!");
        } else {
            alert("OTP Sent Successfully to " + email);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='login-container bg-dark min-vh-100 shadow p-4'>
                    <div className='text-light container-fluid vh-100 d-flex justify-content-center align-items-center'>
                        <div className='col-md-4 col-sm-6 bg-white text-dark m-10 rounded-4 shadow p-4'>
                            <h1 className='heading text-center p-4'><strong>Forgot Password</strong></h1>
                            <div className='col-md-10 mx-auto d-block'>
                                <label htmlFor="email" className='mt-5 form-label'><strong>Enter Your Email: </strong></label><br />
                                <input
                                    className='col-md-8 form-control'
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Update the email state
                                />
                            </div>
                            <div className="col-md-12 d-flex justify-content-center align-items-center">
                                <button type="submit" className="btn btn-primary mt-5">Send OTP to Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Forgot_pass;
