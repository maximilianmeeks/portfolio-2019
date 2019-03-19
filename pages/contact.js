
import Layout from '../components/Layout';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import React, { Component } from "react";
import axios from "axios";




export default class extends Component{

/*     handleSubmit(e){
        e.preventDefault();

        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"/send", 
            data: { 
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
    resetForm(){
        document.getElementById('contact-form').reset();
    } */
    render(){
        return(
            <Layout header={true} menu={true}>
                <Container className="vh-80">
                    
                    <Form id="contact-form" /* onSubmit={this.handleSubmit.bind(this)} */ action="send" method="POST">
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

