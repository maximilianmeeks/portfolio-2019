import React, { Fragment } from "react";
import { Card, CardImg, Row, Col } from "reactstrap";
import Link from "next/link";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from "./loading";
import Error from "./error";


const allProjects = gql`
  query{
      projects{
          id
          title
          slug
          
          cover{
              id
              handle
          }
      }
  }
`

const graphicDesignFilter = gql`
query{
    projects(where: {
        filter_in: ["Graphic Design"]
       })    {
        id
        title
        slug
        cover{
            id
            handle
        }
    }
}
`

function ProjectList () {
    return(
        <Query query={allProjects}>
        {({ loading, error, data:{projects} }) => {
          if (loading) return <div className="container">
                                  <Loading/>
                              </div>;
          if (error) return <div className="container">
                                  <Error/>
                              </div>;

          return  (

            <Fragment>
                <Row>
                {projects.map((project, index) => (
                    <Col xs="10" md="6" lg="4" xl="3" className="mx-auto" key={index}>
                        <Link prefetch href={{pathname: '/project', query: {slug: project.slug}}}>
                        <a>
                        <Card className="mb-4">
                            <CardImg top width="100%" height="250px" src= {`https://media.graphcms.com/resize=width:400/${project.cover.handle}`} alt={project.title} />
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

export default ProjectList;
