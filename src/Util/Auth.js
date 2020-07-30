import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const isAuth = () => {
  if (localStorage.getItem('auth-token') !== null) {
      const token = localStorage.getItem('auth-token');            
      return true
  }
  return false;
};


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuth() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { message: 'Access Denied' }
                            }}
                        />

                    )} />
    );
}

export default PrivateRoute;