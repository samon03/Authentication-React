import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
       e.preventDefault();

       if(passwordRef.current.value !== confirmPasswordRef.current.value) {
           return setError('Password not matched');
       }

       try {
          setError('');
          setLoading(true);
          await signup(emailRef.current.value, passwordRef.current.value);
       } catch {
           return setError('Failed to create an account');
       }

       setLoading(false);
    }

    return (
        <>
            <Card className="p-3">
                <h2 className="text-center mb-4"> Login </h2>
                {error && <Alert variant="danger">{error}</Alert>}
               <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Enter Password" required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mb-3" type="submit">
                            Sign Up
                        </Button>
                    </Form>

                    <div className="w-100 text-center">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
               </Card.Body>
            </Card>  
        </>
    )
}
