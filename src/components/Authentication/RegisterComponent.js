import React from 'react'
import { withRouter } from 'react-router';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Label
  } from "reactstrap";

class RegisterComponent extends React.Component {
    render() {
    return (
      <>
        <div className="content">           
            <Col md='12'>
            <Row style={{marginTop:50}}>
            <Col md='2'></Col>
                <Col md="5">
                <Card>
                    <CardHeader className='text-center'>
                    <h2 className="title">Create an Account</h2>
                    </CardHeader>
                    <CardBody>
                    <Form>
                    <Row>                        
                            <Col className="px-md-3" md="6">
                                <FormGroup>
                                <label>First Name</label>
                                <Input  
                                    placeholder="Enter a first name"
                                    type="text"
                                />
                                </FormGroup>
                            </Col>
                            <Col className="px-md-3" md="6">
                                <FormGroup>
                                <label>Last Name</label>
                                <Input  
                                    placeholder="Enter a  last name"
                                    type="text"
                                />
                                </FormGroup>
                            </Col>
                        </Row>                            
                        <Row>                        
                            <Col className="px-md-3" md="12">
                                <FormGroup>
                                <label>Email</label>
                                <Input  
                                    placeholder="Enter a email"
                                    type="email"
                                />
                                </FormGroup>
                            </Col>
                        </Row>    
                        <Row>                        
                            <Col className="px-md-3" md="8">
                                <FormGroup>
                                <label>Username</label>
                                <Input  
                                    placeholder="Enter a username"
                                    type="text"
                                />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>                        
                            <Col className="px-md-3" md="6">
                                <FormGroup>
                                <label>Password</label>
                                <Input  
                                    placeholder="Enter a password"
                                    type="password"
                                />
                                </FormGroup>
                            </Col>
                            <Col className="px-md-3" md="6">
                                <FormGroup>
                                <label>Confirm Password</label>
                                <Input  
                                    placeholder="Confirm Password"
                                    type="password"
                                />
                                </FormGroup>
                            </Col>
                        </Row>          
                        <Row>
                            <Col className="px-md-3"  md="12">
                                    <Label style={{color:'white'}} href='#'>I already have an account</Label>
                            </Col>
                        </Row>        
                    </Form>
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
      </>
    );
  };
};

export default withRouter(RegisterComponent);