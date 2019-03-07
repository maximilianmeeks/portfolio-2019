import React, {Component, Fragment} from "react";
import { Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap";
import Link from "next/link";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";


export const allProjectsQuery = gql`
    query($slug: String){
        projects(where: {slug: $slug}){
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

export const PaginationQuery = gql`
    query($projectId: String){
        previousProject: projects(last:1, before: $projectId ){
            title
            slug
            id
        }
        nextProject: projects(first:1, after: $projectId){
            title
            slug
            id
        }
    }
`


class Project extends Component {
    static getInitialProps({query}) {
        const isServer = typeof window === "undefined";
        return {isServer, query};
    }
    render(){
    const {query} = this.props    
    
    return(
        <Layout>
        <Query query={allProjectsQuery} variables={{slug: query.slug}} >
        {({ loading, error, data:{projects} }) => {
          if (loading) return <div className="container">
                                  <p>Loading...</p>
                              </div>;
          if (error) return <div className="container">
                                  <p>Error :(</p>
                              </div>;
  
          return (
          <React.Fragment> 
          <Container>
          <div>
              <h1 className="text-primary">{projects[0].title}</h1>
              <span className="text-secondary">{projects[0].description}</span>
          </div>
          <img src= {`https://media.graphcms.com/resize=width:400/${projects[0].cover.handle}`} className="img-fluid"/>
          <Row>
          <Query query={PaginationQuery} variables={{projectId: projects[0].id}}>
                                    {({loading, data: {previousProject, nextProject}}) => {
                                        if (loading) return <div>Loading</div>
                                        return (
                                            <Col xs="12">

                                                <Pagination previous={previousProject[0]} next={nextProject[0]}/>
                                            </Col>
                                        )
                                    }}
                                </Query>
          </Row>
          </Container>

              </React.Fragment>
          )}}
      </Query>
      </Layout>
    ) 
  } 
}

export default Project;