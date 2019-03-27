import React from "react";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import Filter from "../components/Filter";
import { Container, Row, Col } from 'reactstrap';


class Works extends React.Component{
    static async getInitialProps({ query }) {
        const isServer = typeof window === "undefined";
        return {isServer, query};
    } 
    render(){
        const {query} = this.props   
        return(
            <Layout header={true} menu={true} footer={true}>
                <Container>
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto my-3">
                            <h1 className="mb-4 text-primary text-lowercase">My work</h1>
                            <Filter/>
                        </Col>
                    </Row>
                    <ProjectList className="pt-3" category={query.category}/>
                </Container>
            </Layout>
        )
    }
}

export default Works;

