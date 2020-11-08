import React from 'react';
import { BrowserRouter as Router , Route, Link} from 'react-router-dom';
import {Jumbotron,Container} from 'react-bootstrap';
import {Row , Col} from 'react-bootstrap';

function Hero(props) {
    return (
        <Jumbotron className = "bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className = "justify-content-center">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className = "display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h1 className = "display-4 font-weight-light" >{props.subTitle}</h1>}
                        {props.text && <h1 className = "lead font-weight-light">{props.text}</h1>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;