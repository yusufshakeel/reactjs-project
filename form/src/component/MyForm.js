import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const MyForm = (props) => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <h1 className="text-center">My Form - Functional Component</h1>
                </Col>
                <Col sm={12} md={{span: 6, offset: 3}} lg={{span: 4, offset: 4}}>
                    <Form>
                        <Form.Group controlId="userFullName">
                            <Form.Label>Your Name*</Form.Label>
                            <Form.Control type="text" maxLength="255" placeholder="Enter your name" required/>
                        </Form.Group>
                        <Form.Group controlId="userEmail">
                            <Form.Label>Your Email*</Form.Label>
                            <Form.Control type="email" maxLength="255" placeholder="Enter your email address" required/>
                        </Form.Group>
                        <Form.Group controlId="userPhone">
                            <Form.Label>Your Mobile Number*</Form.Label>
                            <Form.Control type="text" maxLength="20" placeholder="Enter your mobile number" required/>
                        </Form.Group>
                        <Form.Group controlId="userMessage">
                            <Form.Label>Your Message*</Form.Label>
                            <Form.Control as="textarea" rows="4"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default MyForm;
