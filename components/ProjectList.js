import React, { Fragment, Component } from "react";
import { Card, CardImg, Row, Col } from "reactstrap";
import Link from "next/link";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from "./loading";
import Error from "./error";


const allProjects = gql`
  query($category: String){
      projects(where: {
          filter_contains: $category
        })  {
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


class ProjectList extends Component {
    
    render(){
        const category = this.props.category
        
        return(
            <Fragment>
            
                <Query query={allProjects} variables={{category: category}}>
                
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
                            <Col xs="12" md="6" lg="4" xl="3" className="mx-auto" key={index}>
                            
                                <Link prefetch href={{pathname: '/project', query: {slug: project.slug}}}>
                                    <a>
                                    <Card className="mb-4 card">
                                        <div className="title-box position-absolute w-100 rounded">
                                            <p className="text-center pt-3 card-text">{project.title}</p>
                                        </div>
                                        <CardImg top className="object-fit-cover rounded" width="100%" height="250px" src= {`https://media.graphcms.com/resize=width:400/${project.cover.handle}`} alt={project.title} />
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
            </Fragment>
        )
    }
}

export default ProjectList;