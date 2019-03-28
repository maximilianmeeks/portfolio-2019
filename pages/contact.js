
import Layout from '../components/Layout';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import React, { Component } from "react";



export default class extends Component{

    render(){
        return(
            <Layout header={true} menu={true} footer={true}>
                <Container className="vh-100">
                    
                    <Form id="contact-form" action="/send" method="POST">
                        <Row>
                            <Col md="8" lg="6" className="mx-auto mt-3">
                                <h1 className="mb-4 text-primary text-lowercase">Contact me</h1>
                                    <FormGroup>
                                        <Label for="name" className="sr-only" maxLength="50">Name</Label>
                                        <Input type="text" name="name" id="name" placeholder="Name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email" className="sr-only" maxLength="254">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="E-Mail" />
                                    </FormGroup>
                                    <FormGroup className="mb-5">
                                        <Label for="message" className="sr-only">Name</Label>
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




