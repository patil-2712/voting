import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleLoginClick = async (e) => {
        e.preventDefault();
        if (username === '' || password === '' || password.length < 12) {
            setError('Username and a 12-digit password are required');
            return;
        }
        try {
            setError('');
            // Make a POST request to the backend login endpoint
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.status === 200) {


                localStorage.setItem('user', JSON.stringify(data));
                navigate('/Home'); // Navigate to the Home page after successful login
            } else {
                // Handle login error
                alert("Please Enter Valid Username and Password..!")
                setError(data.error || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again later..!');
        }
    };

    return (
        <>


            <div className="container-fluid bg-dark vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-4 col-sm-6 bg-white text-dark rounded-4 shadow p-4">
                    <div className="row">
                        <div className="col-md-9 d-block mx-auto my-3">
                            <h1 className="text-center mb-5 "><strong> Login Page</strong></h1>
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="username"><strong>Username:</strong></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Enter Your username"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password"><strong>Password:</strong></label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Enter password (12 characters)"
                                        value={password}
                                        minLength={12}
                                        maxLength={12}
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <button type="submit" className="btn btn-primary btn-block col-md-12 mt-3" onClick={handleLoginClick}>
                                    <strong>Login</strong>
                                </button>
                            </form>
                            <div className=" mt-3 ">
                                <p className='text-center'><strong> Dont have an accout..?<br/>
                                    <a href='/Register' className='container custom-right'> Registration Now</a></strong>
									<strong><a href='/Forgot_pass'>Forgot Password</a></strong>
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;









