import Link from 'next/link';
import React, { Component, Fragment } from "react";
import { graphql, Query } from 'react-apollo';
import { Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap";

import Layout from "../components/layout";
import gql from 'graphql-tag';
import Loading from '../components/Loading';
import Grid from '../components/Grid'

import ApolloClient from "apollo-client";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';



const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri:"https://api-euwest.graphcms.com/v1/cjsdfr8va10zq01ckz2l4mqku/master",
        fetch: fetch
    })
  });

const allProjects = gql`
  query{
      projects{
          id
          title
          slug
          description
          
          cover{
              id
              handle
          }
      }
  }
`

  const Projects = () => (
      
    <Query query={allProjects}>
      {({ loading, error, data:{projects} }) => {
        if (loading) return <div className="container">
                                <p>Loading...</p>
                            </div>;
        if (error) return <div className="container">
                                <p>Error :(</p>
                            </div>;

        return  (

        <Fragment>
            <Row>  
            {projects.map((project, index) => (
                <Col xs="10" md="6" lg="4" xl="3" className="mx-auto" key={index}>
                    <Link prefetch href={`/project?slug=${project.slug}`} as={`/${project.slug}`} class="text-decoration-none">
                    <a>
                    <Card className="mb-4">
                        <CardImg top width="100%" height="250px" src= {`https://media.graphcms.com/resize=width:400/${project.cover.handle}`} alt="Card image cap" />

                    </Card>
                    </a>
                    </Link>
                </Col>
                ))}
            </Row>
        </Fragment>


        );
      }}
    </Query>
  );



const AllProjects = () => {
   
    return (
      <Layout>
          <ApolloProvider client={client}>
            
            <Projects />
            
          </ApolloProvider>

         
      </Layout>
    )
  }

/* export default withData(graphql(allProjects)(AllProjects)) */
export default AllProjects
/* export default class extends Component{
    static getInitialProps() {
        const isServer = typeof window === "undefined";
        return {isServer};
    }
    render(){
        return(
        <Layout {...this.props}>
            <Container>
            <Query query={allPostsQuery}>
                    {({loading, error, data: {projects}}) => {
                        if (loading) return <div>Loading</div>
                        return (
                            <Row>
                                {projects.map((project, index) => (
                                    <Col xs={4} key={index}>
                                            <Card
                                                
                                                title={project.title}
                                                description={project.description}
                                                cover={project.cover.handle}
                                                
                                            />
                                    </Col>
                                ))}
                            </Row>
                        )
                    }}
                </Query>
                <p>
                    Dis my stuff
                </p>
            </Container>

            
        </Layout>
        
        )
    }
} */

