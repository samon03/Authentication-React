import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);    
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
       e.preventDefault();

       try {
          setMessage('');
          setError('');
          setLoading(true);
          await resetPassword(emailRef.current.value);
          setMessage('Please checkout your inbox');
       } catch {
           return setError('Failed to login');
       }

       setLoading(false);
    }

    return (
        <>
            <Card className="p-3">
                <h2 className="text-center mb-4"> Reset Password </h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
               <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mb-3" type="submit">
                            Reset  
                        </Button>
                    </Form>
                    <div className="w-100 text-center">
                        <Link to="/login">Login</Link>
                    </div>
               </Card.Body>
            </Card>  
        </>
    )
}
