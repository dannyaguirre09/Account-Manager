import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import Env from '../../Util/Env';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button,Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Row,Col
  } from "reactstrap";

function RegisterComponent(props) {

  const { register, errors, handleSubmit } = useForm();
  const [ userName, setUserName ] = useState('');
  const [ userLastName, setUserLastName] = useState('');
  const [ userEmail, setUserEmail ] = useState('');
  const [ userUserName, setUserUserName ] = useState('');
  const [ userPassword, setUserPassword ] = useState('');
  const [ userConfirm, setUserConfirm ] = useState('');

  const login = async () => {
    const url = Env.HOST + '/api/users/authenticationUser'
    await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userUserName, userPassword })
    }).then(res => res.json())
      .then(data => {
          if(data.status === 200){
            localStorage.setItem('auth-token', data.data);              
            props.history.push('/');
          } 
      })
      .catch(error => {
          notifyError(error);            
      });        
  }

  const onSubmit = async() => {
    const url = Env.HOST + '/api/users/addUser'
      await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({userName, userLastName, userEmail, userUserName, userPassword})
      }).then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.status === 200) {                             
              login();                                      
            } else if (data.status === 203) {
              const message = data.message.split(':')[1];
              setUserEmail('');              
              notifyError(message);
            } else if (data.status === 202 ) {
              const message = data.message.split(':')[1];
              setUserUserName('');              
              notifyError(message);
            } else {
              const message = data.message;          
              notifyError(message);
            }
        })
        .catch(error => {
            notifyError(error);           
        });
  }

  const notify = (message) => {
    toast.info(message);
  };

  const notifyError = (message) => {
    toast.error(message);
  };

  return (
    <Fragment>
    <ToastContainer></ToastContainer>
      <div className="content">           
          <Col md='12'>
          <Row style={{marginTop:50}}>
          <Col md='2'></Col>
              <Col md="5">
              <Card>
                <Form onSubmit = {handleSubmit(onSubmit)}>
                  <CardHeader className='text-center'>
                  <h2 className="title">Create an Account</h2>
                  </CardHeader>
                  <CardBody>
                  <Row>                        
                    <Col className="px-md-3" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <input
                          className = 'form-control mb-1'
                          autoComplete="off"
                          value = {userName}
                          name ='userName'  
                          type="text"
                          ref = {register({
                            required : {value: true, message: 'Name is required'},
                            maxLength: {value:50, message:'Name must not be more than 50 characters'}                                  
                          })}                 
                          onChange = {e => setUserName(e.target.value)}               
                        />
                        {
                          errors.userName &&
                          <span className='text-danger text-small d-block '>
                          {errors.userName.message}
                          </span>
                        }
                      </FormGroup>
                    </Col>
                      <Col className="px-md-3" md="6">
                          <FormGroup>
                          <label>Last Name</label>
                          <input
                            autoComplete="off"
                            value={userLastName}
                            className = 'form-control mb-1'
                            name = 'userLastName'  
                            type="text"
                            ref = {register({
                              required: {value: true, message: 'Last Name is required'},
                              maxLength: {value: 50, message:'Last Name must not be more than 50 characters'}
                            })}
                            onChange = {e => setUserLastName(e.target.value)}               
                          />
                          {
                            errors.userLastName &&
                            <span className='text-danger text-small d-block '>
                            {errors.userLastName.message}
                            </span>
                          }
                          </FormGroup>
                      </Col>
                    </Row>                            
                      <Row>                        
                        <Col className="px-md-3" md="12">
                            <FormGroup>
                            <label>Email</label>
                            <input  
                              autoComplete="off"
                              value = {userEmail}
                              className = 'form-control mb-1'
                              name = 'userEmail'
                              type="email"
                              ref = {register({
                                required: {value: true, message:'Email is required'},
                                maxLength: {value:100, message:'Email must not be more than 100 characters'}
                              })}
                              onChange = {e => setUserEmail(e.target.value)}               
                            />
                            {
                              errors.userEmail &&
                              <span className='text-danger text-small d-block '>
                              {errors.userEmail.message}
                              </span>
                            }
                            </FormGroup>
                        </Col>
                      </Row>    
                      <Row>                        
                        <Col className="px-md-3" md="8">
                            <FormGroup>
                            <label>Username</label>
                            <input  
                              autoComplete="off"
                              value={userUserName}
                              className = 'form-control mb-1'
                              name = 'userUserName'
                              type="text"
                              ref = {register({
                                required: {value: true, message:'UserName is required'},
                                maxLength: {value:50, message:'UserName must not be more than 50 characters'},
                                minLength: {value: 5, message: 'Username must not be less than 5 characters'}
                              })}
                              onChange = {e => setUserUserName(e.target.value)}               
                            />
                            {
                              errors.userUserName &&
                              <span className='text-danger text-small d-block '>
                              {errors.userUserName.message}
                              </span>
                            }
                            </FormGroup>
                        </Col>
                      </Row>
                      <Row>                        
                        <Col className="px-md-3" md="6">
                            <FormGroup>
                            <label>Password</label>
                            <input  
                              value = {userPassword}
                              className = 'form-control mb-1'
                              name = 'userPassword'
                              type="password"
                              ref = {register({
                                required: {value: true, message:'Password is required'},
                                maxLength: {value:50, message:'Password must not be more than 50 characters'},
                                minLength: {value:8, message: 'Password must not be less than 8 characters'}
                              })}
                              onChange = {e => setUserPassword(e.target.value)}               
                            />
                            {
                              errors.userPassword &&
                              <span className='text-danger text-small d-block '>
                              {errors.userPassword.message}
                              </span>
                            }
                            </FormGroup>
                        </Col>
                        <Col className="px-md-3" md="6">
                            <FormGroup>
                            <label>Confirm Password</label>
                            <input  
                              value = {userConfirm}
                              className = 'form-control mb-1'                              
                              name = 'userConfirm'
                              type="password"
                              ref = {register({
                                validate: value => value === userPassword
                              })}
                              onChange = {e => setUserConfirm(e.target.value)}               
                            />
                            {
                              errors.userConfirm &&
                              <span className='text-danger text-small d-block '>
                              'Password do not match'
                              </span>
                            }
                            </FormGroup>
                        </Col>
                      </Row>          
                      <Row>
                        <Col className="px-md-3"  md="12">
                            <Link className="text-white" to={"/login"} >I already have an account</Link>                                
                        </Col>
                      </Row>                          
                  </CardBody>
                  <CardFooter>
                    <Row >
                      <Col className="px-md-3" md="12">
                        <FormGroup>
                            <Button className="btn-fill btn-block " color="success" type="submit">
                            Register
                        </Button>
                        </FormGroup>
                      </Col>
                  </Row>
                  </CardFooter>
                </Form>
              </Card>
              </Col>
              <Col md="3" >
                  <Card className="card-user" style={{height:542}} >
                  <CardBody>
                  <CardText />
                  <div className="author">
                      <div className="block block-one" />
                      <div className="block block-two" />
                      <div className="block block-three" />
                      <div className="block block-four" />                        
                      <img
                          alt="..."
                          width='195'                            
                          height = '195'
                          src={require("../../assets/img/icon.png")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                      <p className="description">Ceo/Co-Founder</p>
                  </div>
                  <div className="card-description">
                      Account manager is a system to manage your accounts.
                  </div>
                  </CardBody>
              </Card>
              </Col>
          </Row>
          </Col>
      </div>
    </Fragment>
  );

};

export default withRouter(RegisterComponent);