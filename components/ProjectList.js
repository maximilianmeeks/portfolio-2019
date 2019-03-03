import React, {Component, Fragment} from "react";
import { Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap";
import Link from "next/link";

class ProjectList extends Component{
    render(){
        return(
            <Fragment>
                <div className="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto" key={id}>
                        <Card className="mb-4">
                            <CardImg top width="100%" height="250px" src= {`https://media.graphcms.com/resize=width:400/${cover.handle}`} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>
                                    <h5>
                                        {data.title}
                                    </h5>
                                </CardTitle>
                                
                                <CardText>{description}</CardText>
                               <Link prefetch href={{query: {slug: slug}}} as={`/${slug}`}>
                                    <Button className="text-light">
                                        Button
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </div>
            </Fragment>
        )
    }
}

export default ProjectList;