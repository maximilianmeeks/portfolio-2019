import React, {Component, Fragment} from "react";
import { Container, Row, Col, Button} from "reactstrap";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from "next/link";
import Layout from "../components/Layout";
import Pagination from "../components/pagination";
import Loading from "../components/loading";
import CustomCarousel from "../components/Carousel";


export const allProjectsQuery = gql`
    query($slug: String){
        projects(where: {slug: $slug}){
            id
            title
            slug
            subheading
            description
            year
            skills
            technologies
            links

            cover{
                id
                handle
            }

            image2{
                id
                handle
            }

            image3{
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

const enums = {
    Html: "HTML",
    Css: "CSS",
    Scss: "SCSS",
    JQuery: "jQuery",
    Photoshop: "Adobe Photoshop",
    Illustrator: "Adobe Illustrator",
    InDesign: "Adobe InDesign",
    Vectorworks: "Nemetschek Vectorworks",
    AfterEffects: "Adobe AfterEffects",
    MongoDB: "MongoDB",
    Node_js: "Node.js",
    React: "React",
    Next_js: "Next.js",
    Bootstrap: "Bootstrap 4",
    Development: "Development",
    Illustration: "Illustration",
    Lighting: "Lighting",
    Layout: "Layout",
    Motion_Design:"Motion Design",
    Video_Edition:"Video Editing",
    Graphic_Design:"Graphic Design"
}

function image2Handler (props) {
    if (props.image2 != null) {
       return <Row>
                <Col xs="11" className="mx-auto">
                    <img className="img-fluid mb-3 border" src={`https://media.graphcms.com/resize=width:400/${props.image2.handle}`}/>
                </Col>
            </Row>
    } 
} 

function image3Handler (props) {
    if (props.image3 != null) {
        return <Row>
                 <Col xs="11" className="mx-auto">
                     <img className="img-fluid mb-3 border" src={`https://media.graphcms.com/resize=width:400/${props.image3.handle}`}/>
                 </Col>
             </Row>
             } else {
        return null
    }  
} 

class Project extends Component {
    static getInitialProps({query}) {
        const isServer = typeof window === "undefined";
        return {isServer, query};
    }

    render(){
    const {query} = this.props    
        
    return(
        <Layout header={true} menu={true}>
            <Query query={allProjectsQuery} variables={{slug: query.slug}} >
            {({ loading, error, data:{projects} }) => {
            if (loading) return <div className="container">
                                    <Loading/>
                                </div>;
            if (error) return <div className="container">
                                    <Error/>
                                </div>;
    
            return (
            <Fragment> 
                <Container>
                    <Row>
                        <Col className="mx-auto mb-4 text-center">
                            <Query query={PaginationQuery} variables={{projectId: projects[0].id}}>
                                {({loading, data: {previousProject, nextProject}}) => {
                                    if (loading) return <Loading/>
                                    if (error) return <Error/>
                                    return (
                                        
                                        <Pagination previous={previousProject[0]} next={nextProject[0]}/> 
                                        
                                    )
                                }}
                            </Query>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="11" className="mx-auto text-right">
                            <h1 className="text-primary mx-auto font-weight-light">{projects[0].title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="11" className="mx-auto mb-4 text-right">
                            <span className="text-secondary mx-auto">{projects[0].subheading}</span>
                        </Col>
                    </Row>                   
                    <Row>
                        <Col xs="11" className="mx-auto">
                            <img className="img-fluid border" src={`https://media.graphcms.com/resize=width:400/${projects[0].cover.handle}`} /* alt={item.altText} */ />               
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="11" className="mx-auto my-3">
                            <p>{projects[0].description}</p>
                            <p className="text-right">{projects[0].year}</p>
                        </Col>
                    </Row>
                        {image2Handler(projects[0])}
                        {image3Handler(projects[0])}
                    <Row className="mt-4">
                        <Col xs="11" className="mx-auto">
                            <Row>
                                <Col xs="6">
                                <h5 >Categories</h5>
                            
                                    {projects[0].skills.map((skill, index) => (
                                        <ul className="text-secondary list-group list-group-flush ">
                                            <li key={index} className="list-group-item bg-light pl-0">{enums[skill.toString()]}</li>
                                        </ul>
                                    ))}       
                                </Col>
                                <Col xs="6">
                                        <h5 className="text-right">Technologies</h5>
                                        
                                            {projects[0].technologies.map((technology, index) => (
                                                <ul className="text-secondary list-group list-group-flush text-right">
                                                    <li key={index} className="list-group-item bg-light pr-0">{enums[technology.toString()]}</li>
                                                </ul>
                                            ))}
                                        
                                </Col>
                            </Row> 
                        </Col>
                    </Row>

                   <Row className="my-4">
                        <Col className="d-flex justify-content-center">
                            {projects[0].links.map((link, index) => (
                                <Link key={index} href={link} >      
                                    <a>
                                        <Button className="text-light" color="primary">
                                            Website
                                        </Button>
                                    </a>
                                </Link>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
            )}}
        </Query>
      </Layout>
    ) 
  } 
}

export default Project;