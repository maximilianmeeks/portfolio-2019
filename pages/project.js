import React, {Component, Fragment} from "react";
import { Container, Row, Col, Button} from "reactstrap";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from "next/link";
import Layout from "../components/Layout";
import Pagination from "../components/pagination";
import Loading from "../components/loading";
import marked from "marked";


export const allProjectsQuery = gql`
    query($slug: String){
        projects(orderBy: year_DESC,
            where: {slug: $slug}){
                id
                title
                slug
                subheading
                description
                year
                categories
                technologies
                links
                meta

                cover{
                    id
                    handle
                    alt
                    imageDescription
                }

                image2{
                    id
                    handle
                    alt
                    imageDescription
                }

                image3{
                    id
                    handle
                    alt
                    imageDescription
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

    markdownParser (markdown) {
        const html = marked(markdown)
        return html
    }

    image2Handler (props) {
        if (props.image2 != null) {
           return <Col xs="12" md="8" lg="6" className="mx-auto mb-3">
                        <img className="img-fluid border d-md-none mb-1 rounded" src={`https://media.graphcms.com/resize=width:400/${props.image2.handle}`} alt={props.image2.alt}/>
                        <img className="img-fluid border d-none d-md-block mb-1 rounded" src={`https://media.graphcms.com/resize=width:600/${props.image2.handle}`} alt={props.image2.alt}/>
                        <p className="text-right mb-md-3 text-dark image-description">{props.image2.imageDescription}</p>
                    </Col>      
        } 
    }

    image3Handler (props) {
        if (props.image3 != null) {
            return <Col xs="12" md="8" lg="6" className="mx-auto mb-3">
                         <img className="img-fluid border d-md-none mb-1 rounded" src={`https://media.graphcms.com/resize=width:400/${props.image3.handle}`} alt={props.image3.alt}/>
                         <img className="img-fluid border d-none d-md-block mb-1 rounded" src={`https://media.graphcms.com/resize=width:600/${props.image3.handle}`} alt={props.image3.alt}/>
                         <p className="text-right mb-md-3 text-dark image-description">{props.image3.imageDescription}</p>
                    </Col>
        } 
    }  
    
    render(){
    const {query} = this.props    

    const enums = {
        Html: "HTML",
        Css: "CSS / SCSS",
        JQuery: "jQuery",
        Javascript: "Javascript",
        Photoshop: "Adobe Photoshop",
        Illustrator: "Adobe Illustrator",
        InDesign: "Adobe InDesign",
        Vectorworks: "Nemetschek Vectorworks",
        AfterEffects: "Adobe AfterEffects",
        Premiere: "Adobe Premiere",
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
        Video_Editing:"Video Editing",
        Graphic_Design:"Graphic Design",
        PHP: "PHP"
    }

    const queries = {
        Html: "html",
        Css: "css",
        JQuery: "jquery",
        Javascript: "javascript",
        Photoshop: "photoshop",
        Illustrator: "illustrator",
        InDesign: "indesign",
        Vectorworks: "vectorworks",
        AfterEffects: "aftereffects",
        Premiere: "premiere",
        MongoDB: "mongodb",
        Node_js: "node",
        React: "react",
        Next_js: "nextjs",
        Bootstrap: "bootstrap",
        Development: "development",
        Illustration: "illustration",
        Lighting: "lighting",
        Layout: "layout",
        Motion_Design:"motion-design",
        Video_Editing:"video-editing",
        Graphic_Design: "graphic-design",
        PHP: "php"
    }

    return(
        <Layout title={`| My Work`} header={true} menu={true} footer={true}> 
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
                        <Col xs="12" className="mx-auto mb-4 text-center">
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
                        <Col xs="12" md="8" lg="6" className="mx-auto">
                            <h1 className="project-header mx-auto">{projects[0].title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="8" lg="6" className="mx-auto mb-4">
                            <span className="text-secondary mx-auto">{projects[0].subheading}</span>
                        </Col>
                    </Row>                   
                    <Row>
                        <Col xs="12" className="mx-auto">
                            <img className="img-fluid border d-md-none mb-1 rounded bg-white" src={`https://media.graphcms.com/resize=width:400/${projects[0].cover.handle}`} alt={projects[0].cover.alt} />
                            <p className="d-md-none text-right mb-md-3 text-dark image-description">{projects[0].cover.imageDescription}</p>               
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" className="mx-auto mb-md-5">
                            <Row>
                                <Col md="8" lg="6" className="mx-auto">
                                    <img className="img-fluid border d-none d-md-block mb-1 rounded bg-white border" src={`https://media.graphcms.com/resize=width:600/${projects[0].cover.handle}`} alt={projects[0].cover.alt}/>
                                    <p className="d-none d-md-block text-right mb-md-3 text-dark image-description">{projects[0].cover.imageDescription}</p> 
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12" md="8" lg="6" className="mx-auto my-3" >
                                    <div dangerouslySetInnerHTML={{__html: this.markdownParser(`${projects[0].description}`)}} className="description text-dark"/>
                                    <p className="text-right">{projects[0].year}</p>
                                    <div className="d-none d-md-block">
                                        {projects[0].links.map((link, index) => (
                                            <Link key={index} href={link} >      
                                                <a>
                                                    <Button className="text-light mx-2 mr-md-3 ml-md-0 text-center" color="primary">
                                                        {link.includes("https://github") ? "Github" : link.includes("youtube") ? "YouTube" : "Website"}
                                                    </Button>
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-md-5">
                        <Col xs="12" md="8" lg="6" className="mx-auto">
                            <Row>
                                <Col xs="6" md="4">
                                    <h5 className="text-dark">Categories</h5>
                                        {projects[0].categories.map((category, index) => (
                                            <ul className="text-secondary list-group list-group-flush ">
                                                <Link prefetch href={{pathname: '/work', query: {category: queries[category.toString()]}}}>
                                                    <a className="text-secondary text-decoration-none">
                                                        <li key={index} className="list-group-item bg-light pl-0 border-0">{enums[category.toString()]}</li>
                                                    </a>
                                                </Link>
                                            </ul>
                                        ))}       
                                </Col>
                                <Col xs="6" md="4" className="ml-md-auto">
                                    <h5 className="text-right text-dark">Technologies</h5>
                                        {projects[0].technologies.map((technology, index) => (
                                            <ul className="text-secondary list-group list-group-flush text-right">
                                                <Link prefetch href={{pathname: '/work', query: {category: queries[technology.toString()]}}}>
                                                    <a className="text-secondary text-decoration-none">
                                                        <li key={index} className="list-group-item bg-light pr-0 border-0">{enums[technology.toString()]}</li>
                                                    </a>
                                                </Link>
                                            </ul>
                                        ))}   
                                </Col>
                            </Row> 
                        </Col>
                    </Row>
                   <Row className="my-4 d-md-none">
                        <Col className="d-flex justify-content-center">
                            {projects[0].links.map((link, index) => (
                                <Link key={index} href={link} >      
                                    <a>
                                        <Button className="text-light mx-2 mr-md-3 ml-md-0 text-center" color="primary">
                                            {link.includes("https://github") ? "Github" : link.includes("youtube") ? "YouTube" : "Website"}
                                        </Button>
                                    </a>
                                </Link>
                            ))}
                        </Col>
                    </Row>
                    <Row>
                        {this.image2Handler(projects[0])}  
                    </Row>
                    <Row>
                        {this.image3Handler(projects[0])}
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