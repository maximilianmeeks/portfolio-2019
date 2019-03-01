import Link from 'next/link';
import React, { Component } from "react";
import { graphql, Query } from 'react-apollo';
import { Container, Card } from "reactstrap";
import Layout from "../components/layout";
import gql from 'graphql-tag';
import withData from "../lib/withData";
import Loading from '../components/Loading';
import Grid from '../components/Grid'

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

const AllProjects = ({ /* url: { pathname }, */ data: { loading, error, allProjects } }) => {
    if (error) return <h1>Error loading reviews.</h1>
    return (
      <Layout >
        {/* <Nav pathname={pathname} /> */}
        {
          loading ? <Loading /> : (
            <div>
{/*               <Header
                title='Vinylbase'
                subLine='The best music reviews on the interwebs'
                isIcon
              /> */}
              <section>
                <Grid entries={allProjects} type='reviews' />
              </section>
            </div>
          )
         }
      </Layout>
    )
  }

export default withData(graphql(allProjects)(AllProjects))
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

