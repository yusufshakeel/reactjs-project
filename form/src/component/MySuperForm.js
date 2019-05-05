import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

class MySuperForm extends React.Component {

    limits = {
        userMessage: {
            maxLength: 100
        }
    };

    constructor(props) {
        super(props);

        this.state = {};

        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange = (event) => {
    //     console.log(event.target.value);
    // };

    onChange = (event) => {
        // console.log(event.target.value);

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onChecked = (event) => {
        // console.log(event.target.checked);
        this.setState({
            [event.target.name]: event.target.checked
        })
    };

    onSubmit = (event) => {
        event.preventDefault();

        const fullname = document.getElementById('userFullName');

        if (fullname.length > 0) {
            this.setState({fullname});
        }

        console.log("submitted:", this.state);
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <h1 className="text-center">My Super Form - Class Component</h1>
                    </Col>
                    <Col sm={12} md={{span: 6, offset: 3}} lg={{span: 4, offset: 4}}>
                        <Form onSubmit={this.onSubmit}>

                            <Form.Group controlId="userFullName">
                                <Form.Label>Your Name*</Form.Label>
                                <Form.Control type="text"
                                              maxLength="255"
                                              name="userFullName"
                                              value={this.state.userFullName !== undefined ? this.state.userFullName : ''}
                                              placeholder="Enter your name"
                                              onChange={this.onChange}
                                              required/>
                            </Form.Group>

                            <Form.Group controlId="userEmail">
                                <Form.Label>Your Email*</Form.Label>
                                <Form.Control type="email"
                                              maxLength="255"
                                              name="userEmail"
                                              placeholder="Enter your email address"
                                              onChange={this.onChange}
                                              value={this.state.userEmail !== undefined ? this.state.userEmail : ''}
                                              required/>
                            </Form.Group>

                            <Form.Group controlId="userPhone">
                                <Form.Label>Your Mobile Number*</Form.Label>
                                <Form.Control type="text"
                                              maxLength="20"
                                              name="userPhone"
                                              placeholder="Enter your mobile number"
                                              onChange={this.onChange}
                                              value={this.state.userPhone !== undefined ? this.state.userPhone : ''}
                                              required/>
                            </Form.Group>

                            <Form.Group controlId="selectOption">
                                <Form.Label>Some option</Form.Label>
                                <Form.Control as="select" name="selectOption" value={this.state.selectOption}
                                              onChange={this.onChange}>
                                    <option value="-">---Select---</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="userMessage">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea"
                                              name="userMessage"
                                              rows="4"
                                              maxLength={this.limits.userMessage.maxLength}
                                              value={this.state.userMessage !== undefined ? this.state.userMessage : ''}
                                              onChange={this.onChange}/>
                                <p className="text-right">
                                    {this.state.userMessage !== undefined ? this.state.userMessage.length : 0}
                                    /{this.limits.userMessage.maxLength}
                                </p>
                            </Form.Group>

                            <Form.Group controlId="userNewsletter">
                                <Form.Check type="checkbox"
                                            name="userNewsletter"
                                            onChange={this.onChecked}
                                            label="Subscribe to our newsletters."/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Check type="radio"
                                            id="radio1"
                                            name="radioValue"
                                            onChange={this.onChange}
                                            value="Option 1"
                                            label="Option 1"/>

                                <Form.Check type="radio"
                                            id="radio2"
                                            name="radioValue"
                                            onChange={this.onChange}
                                            value="Option 2"
                                            label="Option 2"/>
                            </Form.Group>

                            <Button variant="primary" type="submit">Submit</Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default MySuperForm;
