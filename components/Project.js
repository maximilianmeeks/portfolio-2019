import React, {Component, Fragment} from "react";
import { Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap";
import Link from "next/link";
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


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
    query($postId: String){
        previousProject: projects(last:1, before: $postId ){
            title
            slug
            id
        }
        nextProject: projects(first:1, after: $postId){
            title
            slug
            id
        }
    }
`


export default function Project () {
    return(
        <Query query={allProjectsQuery}>
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
          </Container>
              </React.Fragment>
          )}}
      </Query>

    
    ) 
  } 
