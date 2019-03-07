import React, {Component, Fragment} from "react";
import { Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap";
import Link from "next/link";
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


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

export default function ProjectList () {
    return(
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
  )
}

       