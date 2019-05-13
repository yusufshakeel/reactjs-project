import React from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";

class MySignUp extends React.Component {

    render() {

        return (
            <div id="signup" className="my-5 pt-5">
                <Container>
                    <Row>
                        <Col md={{span: 4, offset: 4}} lg={{span: 4, offset: 4}}>
                            <h1 className="text-center">Sign Up</h1>
                            <p className="text-center">Create your account</p>

                            <Form>
                                <Form.Group controlId="signup-email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="signup-password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required/>
                                </Form.Group>

                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="I agree to the terms and conditions." required/>
                                </Form.Group>

                                <Button variant="primary" type="submit">Create Account</Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }

}

export default MySignUp;
