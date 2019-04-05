
import Layout from '../components/Layout';
import { Button, Form, FormGroup, Label, Input, Alert, Container, Row, Col } from 'reactstrap';
import React, { Component } from "react";
import fetch from 'isomorphic-unfetch';
import Bubble from "../svgs/sprechblase.svg";



export default class extends Component{
    constructor(){
        super();
        this.state = {
            success: false
        }
    }
    static getInitialProps({query}) {
        const isServer = typeof window === "undefined";
        return {isServer, query};
    }

    submitComments(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value
        const contactForm = document.getElementById('contact-form')

        const data = {
            name: name,
            email: email,
            message: message
        }

        fetch(`https://portfolio-server.maximilianmeeks.now.sh/send` /* "http://localhost:3333/send" */, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then((res)=>{
              res.json().then(res => {
                  if (res.status === 200){
                      this.setState({success: true});
                      contactForm.reset()
                  }
              })
          })
    }



    render(){
    const {query} = this.props 
     
        return(
            <Layout title="| Contact Me" description="Author: Maximilian Meeks | Contact Me, Hire me, Frontend Web Developer, Media Designer" header={true} menu={true} footer={true}>
                <Container>
                    
                    <Form id="contact-form" onSubmit={(e)=> this.submitComments(e)} >
                        <Row>
                            <Col md="8" lg="6" className="mx-auto mt-3">
                                <h1 className="custom-header mb-4 text-lowercase">Contact me</h1>
                                    <FormGroup>
                                        <Label for="name" className="sr-only" maxLength="50">Name</Label>
                                        <Input type="text" name="name" id="name" placeholder="Name" required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email" className="sr-only" maxLength="254">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="E-Mail" required/>
                                    </FormGroup>
                                    <FormGroup className="mb-5">
                                        <Label for="message" className="sr-only">Name</Label>
                                        <Input type="textarea" name="message" id="message" placeholder="Message (max. 1000 characters)" maxLength="1000" required/>
                                    </FormGroup>
                                    <Row>
                                        <Col xs="8">
                                        {/* <Bubble className="sprechblase"/> */}
                                            {this.state.success ? 
                                            <Alert color="success">
                                                Success!
                                            </Alert> : null}
                                        </Col>
                                        <Col xs="3" className="ml-auto">
                                            <Button className="text-light btn-lg float-right mb-5" type="submit">
                                                Submit
                                            </Button> 
                                        </Col>
                                    </Row>
                            </Col>
                        </Row>
                    </Form> 

                    <Row>
                        <Col xs="2" md="4" lg="6"></Col>
                        <Col xs="10" md="8" lg="6" className="ml-auto">
                            <img src="/static/Postfisch.png" alt="" className="w-100"/>
                        </Col>    
                    </Row> 
                </Container>
            </Layout>
            )
    }
}




