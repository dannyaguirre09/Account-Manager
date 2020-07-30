import React from 'react'
import RegisterComponent from '../../components/Authentication/RegisterComponent'
import { withRouter } from 'react-router';

class Register extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RegisterComponent></RegisterComponent>
            </React.Fragment>
        );
    };
};

export default withRouter(Register)