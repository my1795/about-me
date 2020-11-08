import React from 'react';
import { BrowserRouter as Router , Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {Row , Col} from 'react-bootstrap';

function Footer() {
    return (
        <footer className="mt-5">
        <Container fluid={true}>
            <Row  className="border-top justify-content-between p-3" >
                <Col className="p-0" md= {3} sm={12}>
                    Mustafa YILDIRIM
                </Col>
                <Col className="p-0 d-flex justify-content-end" md= {3} >
                    This site is made using ReactJs 
                </Col>
            </Row>
        </Container>
    </footer>
    );

}

export default Footer;