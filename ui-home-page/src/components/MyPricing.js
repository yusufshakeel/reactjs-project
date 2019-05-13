import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class MyPricing extends React.Component {

    render() {

        return (
            <div id="pricing" className="my-5 pt-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center">Pricing</h1>
                            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <hr/>

                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }

}

export default MyPricing;
