import Link from 'next/link';
import React, { Component } from "react";
import { graphql, Query } from 'react-apollo';
import { Container, Card } from "reactstrap";
import Layout from "../components/layout";
import gql from 'graphql-tag';
import withData from "../lib/withData";
import Loading from '../components/Loading';
import Grid from '../components/Grid'

import ApolloClient from "apollo-boost";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";

const allProjects = gql`
    query{
        projects{
            id
            title
            
            description
            
            cover{
                id
                handle
            }
        }
    }
`

const client = new ApolloClient({
    uri: "https://api-euwest.graphcms.com/v1/cjsdfr8va10zq01ckz2l4mqku/master"
  });



  const Projects = () => (
    <Query
      query={gql`
      query{
        projects{
            id
            title
            
            description
            
            cover{
                id
                handle
            }
        }
    }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data.projects.map(({ id, title }) => (
          <div key={id}>
            <p>{id}: {title}</p>
          </div>
        ));
      }}
    </Query>
  );



const AllProjects = (/* {  url: { pathname }, data: { allProjects } } */) => {
   
    return (
      <Layout >
          <ApolloProvider client={client}>
          <div>
            <h2>My first Apollo app 🚀</h2>
            <Projects />
        </div>
          </ApolloProvider>
        {/* <Nav pathname={pathname} /> */}
        {
        
            <div>
{/*               <Header
                title='Vinylbase'
                subLine='The best music reviews on the interwebs'
                isIcon
              /> */}
              <section>
               {/*  <Grid entries={allProjects} type='reviews' /> */}
              </section>
            </div>
          
         }
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

