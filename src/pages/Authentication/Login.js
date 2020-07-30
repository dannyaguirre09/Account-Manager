import React from 'react'
import LoginComponent from '../../components/Authentication/LoginComponent'
import { withRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';

class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
            	<ToastContainer></ToastContainer>  
                <LoginComponent></LoginComponent>
            </React.Fragment>
        );
    };
};

export default withRouter(Login)