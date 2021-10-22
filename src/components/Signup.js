import React, { useRef } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    return (
        <>
            <Card className="p-3">
                <h2 className="text-center mb-4"> Sign Up</h2>
               <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Enter Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" id="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} placeholder="Enter Confirm Password" required />
                        </Form.Group>
                        <Button className="w-100 mb-3" type="submit">
                            Sign Up
                        </Button>
                    </Form>

                    <div className="w-100 text-center">
                        Already have an account? Sign In
                    </div>
               </Card.Body>
            </Card>  
        </>
    )
}
