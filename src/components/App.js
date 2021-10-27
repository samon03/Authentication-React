import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../Contexts/AuthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

function App() {
  return (
        <Container className="d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh"}}>
            <div className="w-100" style={{maxWidth: "400px"}}>
                <Router>
                   <AuthProvider>
                      <Switch>
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                        <Route path="/update-profile" component={UpdateProfile} />
                      </Switch>
                    </AuthProvider>
                </Router>
            </div>
        </Container>
    
    
  );
}

export default App;
