
import React from 'react';
import Layout from "../components/layout";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';


/* import ReactMarkdown from 'react-markdown' */
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri:"https://api-euwest.graphcms.com/v1/cjsdfr8va10zq01ckz2l4mqku/master",
        fetch: fetch
    })
  });

export const allPostsQuery = gql`
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

class Project extends React.Component {

    render() {
        const query = window.location.pathname.split("/").pop()  
      return (
        
       <Query query={allPostsQuery} variables={{slug: query}}>
            {({ loading, error, data:{projects}}) => {
                if (loading) return <div className="container">
                                        <p>Loading...</p>
                                    </div>;
                if (error) return <div className="container">
                                        <p>Error :(</p>
                                    </div>;
                            
        return <React.Fragment> 
            <div>
                <h1 className="text-primary">{projects[0].title}</h1>
                <span className="text-secondary">{projects[0].description}</span>
            </div>
            <div>
            <img src= {`https://media.graphcms.com/resize=width:400/${projects[0].cover.handle}`}/>
            </div>
                </React.Fragment>
    }}
        </Query>

      
      ) 
    } 
  }

 const Rendered = () => {
      return(
          <Layout>
              <ApolloProvider client={client}>
                <Project/>
              </ApolloProvider>
          </Layout>
      )
  }

export default Rendered
