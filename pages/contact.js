
import Layout from '../components/Layout';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import React, { Component } from "react";

export default class extends Component{
    render(){
        return(
            <Layout header={true} menu={true}>
                <Container className="vh-80">
                    
                    <Form method="POST" action="send">
                        <Row>
                            <Col md="8" lg="6" className="mx-auto mt-3">
                                <h1 className="mb-4 text-primary text-lowercase">Contact me</h1>
                                    <FormGroup>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="E-Mail" />
                                    </FormGroup>
                                    <FormGroup className="mb-5">
                                <Input type="textarea" name="text" id="message" placeholder="Message (max. 1000 characters)" maxLength="1000"/>
                                </FormGroup>
                                <Button className="text-light float-right mb-5" type="submit">Submit</Button> 
                            </Col>
                        </Row>
                    </Form>  
                </Container>
            </Layout>
            )
    }
}

