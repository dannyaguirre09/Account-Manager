import React, { Fragment, useState } from 'react'
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Button,Card,CardHeader,CardBody,CardFooter,CardText,FormGroup,Form,Row,Col,Label
  } from "reactstrap";

function LoginComponent  (props) {

    const {register, errors, handleSubmit} = useForm();
    var [userUserName, setUserUserName] = useState('');
    var [userPassword, setUserPassword] = useState('');

    const onSubmit = async (data, e) => {           
      const url = 'http://localhost:4000/api/users/authenticationUser'
      await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({userUserName, userPassword })
      }).then(res => res.json())
        .then(data => {
            if(data.status === 200){
              localStorage.setItem('auth-token', data.data);              
              props.history.push('/');
            } else {        
                const message = data.message.split(':')[1];        
                mensaje(message);
                if(message.trim() === 'Invalid Password') {
                    setUserPassword('');
                } else {
                    setUserPassword('');
                    setUserUserName('');
                }
            }
        })
        .catch(error => {
            mensaje(error);            
        });
    };

    const mensaje = (mensaje) => {
        toast.error(mensaje);
    };

    return (
      <Fragment>
        <div className="content">           
            <Col md='12'>
            <Row style={{marginTop:80}}>
            <Col md='2'></Col>
                <Col md="5">
                <Card>
                    <CardHeader className='text-center'>
                    <h2 className="title">Login</h2>
                    </CardHeader>
                    <Form onSubmit = {handleSubmit(onSubmit)}>
                       
                    <CardBody>
                        <Row>                        
                            <Col className="px-md-5" md="12">
                                <FormGroup>
                                    <Label>Username</Label>
                                    <input  
                                      value = {userUserName}
                                       className = 'form-control'
                                        name = "userUserName"
                                        placeholder="Username"
                                        type="text"                                        
                                        ref = {register( {
                                            required : {value : true, message: 'Username is required' }
                                        })}
                                        onChange = {e => setUserUserName(e.target.value)}
                                    />
                                    <Col md='12'>
                                        {
                                            errors.userUserName &&
                                            <span className='text-danger text-small d-block mb-2'>
                                            {errors.userUserName.message}
                                            </span>
                                        }
                                    </Col>
                                    </FormGroup>
                                </Col>
                            </Row>       
                            <Row>                        
                                <Col className="px-md-5" md="12">
                                    <FormGroup>
                                    <Label>Password</Label>
                                    <input
                                        value = {userPassword}
                                        className='form-control'  
                                        placeholder="Password"
                                        type="password"
                                        name = "userPassword"
                                        onChange = { e => setUserPassword(e.target.value)}
                                        ref = {register( {
                                            required : {value : true, message: 'Password is required' },
                                            maxLength: { value: 15, message:'Password must not be more than 15 characters'},
                                            minLength: { value: 8, message:'Password must not be less than 8 characters'}
                                        })}
                                    />
                                     <Col md='12'>
                                        {
                                            errors.userPassword &&
                                            <span className='text-danger text-small d-block mb-2'>
                                            {errors.userPassword.message}
                                            </span>
                                        }
                                    </Col>
                                    </FormGroup>
                                </Col>
                            </Row>           
                            <Row>
                                <Col className="px-md-5"  md="12">
                                    <  Label  style={{color:'white'}} href='#'>don't have an account?</  Label>
                                </Col>
                            </Row>        
                        
                        </CardBody>
                        <CardFooter>
                            <Row >
                            <Col className="px-md-5" md="12">
                                <FormGroup>
                                    <Button className="btn-fill btn-block " color="info" type="submit">
                                    Login
                                </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                        </CardFooter>
                    </Form>
                </Card>
                </Col>
                <Col md="3">
                  <Card className="card-user">
                    <CardBody>
                    <CardText />
                    <div className="author">
                        <div className="block block-one" />
                        <div className="block block-two" />
                        <div className="block block-three" />
                        <div className="block block-four" />                        
                        <img
                            alt="..."
                            width='220'                            
                            height = '220'
                            src={require("../../assets/img/emilyz.jpg")}
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

export default withRouter(LoginComponent);

/*//Flujo
1 2 1 [siniestros].spInsert_Siniestros idPoliza;idCobertura;idCausa;idSecuencia;FechaNotificacion 

//Campos
1 Id Poliza idPoliza text true false True idPoliza
1 Id Cobert idCobertura text True false True idCobertura
1 Seleccione la causa combobox false true 
1 idSecuencia idSecuencia text True False True 1 
1 Ingrese la fecha de notificacion fechaNotificacion, date False true 
1 id Estado idEstado text False, True 

//Acción
1 [siniestros].sp_Select_Causa_Siniestro cau_codigo;cau_nombre int;stringify

//Campo Acción
4 6 
  asd */