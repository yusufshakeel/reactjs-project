import React from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";

class MySignUp extends React.Component {

    render() {

        return (
            <div id="login" className="my-5 pt-5">
                <Container>
                    <Row>
                        <Col md={{span: 4, offset: 4}} lg={{span: 4, offset: 4}}>
                            <h1 className="text-center">Log In</h1>

                            <Form>
                                <Form.Group controlId="login-email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required/>
                                </Form.Group>

                                <Form.Group controlId="login-password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required/>
                                </Form.Group>

                                <Button variant="primary" type="submit">Log In</Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }

}

export default MySignUp;
