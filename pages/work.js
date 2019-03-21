import React from "react";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";


class Works extends React.Component{
    static async getInitialProps({ query }) {
        const isServer = typeof window === "undefined";
        return {isServer, query};
    } 
    render(){
        const {query} = this.props   
        return(
            <Layout header={true} menu={true}>
                <ProjectList className="pt-3" category={query.category}/>
            </Layout>
        )
    }
}

export default Works;

