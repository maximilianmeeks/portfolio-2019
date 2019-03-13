
import Layout from '../components/Layout';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import React, { Component } from "react";

export default class extends Component{
    render(){
        return(
            <Layout header={true} menu={true}>
                <Container>
                    <h1 className="mb-4 text-primary">Contact me</h1>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                    
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input type="textarea" name="text" id="message" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                        </FormGroup>

                        <Button className="text-light float-right">Submit</Button>
                    </Form>
                
                </Container>
            </Layout>
            )
    }
}

