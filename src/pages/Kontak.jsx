import React, { Component } from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'reactstrap';

import { Icon } from 'react-icons-kit';
import {envelopeO, mapPin, phoneSquare} from 'react-icons-kit/fa'

import Navigation from '../components/Navigation';
import FormBukuTamu from '../components/FormBukuTamu';

class Kontak extends Component {
    constructor(props) {
        super(props)
        AOS.init()
    }
    componentDidMount() {
        AOS.refresh()
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div>
                <div className="headerWrap">
                    <Navigation/>
                </div>
                <div className="marginTopContain"></div>
                <div className="contentWrap">
                    <Container className="section">
                        <h2 style={{ display: 'block', margin: '0 auto 10px auto', color: '#487c7c' }} data-aos="fade-right" data-aos-duration="1000">Kontak</h2>
                        <Row>
                            <Col md="6">
                                <FormBukuTamu/>
                            </Col>
                            <Col md="6">
                                <Row style={{ margin: '20px 0px' }}>
                                    <Col md="12">
                                        <h5 style={{ color: '#335454' }}><Icon icon={mapPin}/> Alamat</h5>
                                        
                                        <div>
                                            <p style={{ color: 'gray' }}>
                                                Jl Caringin Barat 1 No 29A<br/>
                                                Jakarta Selatan, 12430
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="12">
                                        <h5 style={{ color: '#335454' }}><Icon icon={envelopeO}/> Email</h5>
                                        
                                        <div>
                                            <p style={{ color: 'gray' }}>
                                                info[at]datamedis.id<br/>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="12">
                                        <h5 style={{ color: '#335454' }}><Icon icon={phoneSquare}/> Telepon</h5>
                                        
                                        <div>
                                            <p style={{ color: 'gray' }}>
                                                (+62) 21-766-9122<br/>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Kontak;