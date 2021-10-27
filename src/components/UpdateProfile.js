import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
       e.preventDefault();

       if(passwordRef.current.value !== confirmPasswordRef.current.value) {
           return setError('Password do not matched');
       }

       const promises = [];
       setError('');
       setLoading(true);

       if(emailRef.current.value !== currentUser.email) {
           promises.push(updateEmail(emailRef.current.value));
       }

       if(passwordRef.current.value) {
           promises.push(updatePassword(passwordRef.current.value ));
       }

       Promise.all(promises)
       .then(() => {
           history.push('/');
       }).catch(() => {
           setError('Failed to update');
       }).finally(() => {
           setLoading(false);
       });
    
    }

    return (
        <>
            <Card className="p-3">
                <h2 className="text-center mb-4"> Update Profile </h2>
                {error && <Alert variant="danger">{error}</Alert>}
               <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Enter email" required
                               defaultValue={currentUser.email} />
                        </Form.Group>

                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} 
                                placeholder="Leave blank to keep the same" />
                        </Form.Group>
                        <Form.Group className="mb-3" id="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} 
                                placeholder="Leave blank to keep the same" />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mb-3" type="submit">
                            Update
                        </Button>
                    </Form>

                    <div className="w-100 text-center">
                       <Link to="/">Cancel</Link>
                    </div>
               </Card.Body>
            </Card>  
        </>
    )
}
