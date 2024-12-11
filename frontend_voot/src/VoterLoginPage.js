// src/VoterLoginPage.jsx
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { AbortedDeferredError } from './../node_modules/@remix-run/router/utils';

const VoterLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Simple form validation
        if (!email || !password) {
            setError("Please enter both email and password.");
            setSuccess('');
            return;
        }

        // Simulate a login action
        if (email === "voter@example.com" && password === "password123") {
            setSuccess("Login successful!");
            setError('');
        } else {
            setError("Invalid email or password.");
            setSuccess('');
        }
    };

    return (
        <Container className="my-5" style={{ maxWidth: '400px' }}>
            <h3 className="text-center">Voter Login</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Login
                </Button>

                <p>Dont have an accout..?
                    <a href='/VoterRegistrationForm'>Registration Now</a>
                </p>

                <a href='/Forgot_pass'>Forgot Password</a>

            </Form>
        </Container>
    );
};

export default VoterLoginPage;
