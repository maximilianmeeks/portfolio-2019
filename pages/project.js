
import React from 'react';
import Layout from "../components/layout";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';


/* import ReactMarkdown from 'react-markdown' */
const client = new ApolloClient({
    link: createHttpLink({
        uri: "https://api-euwest.graphcms.com/v1/cjsdfr8va10zq01ckz2l4mqku/master",
        fetch: fetch,
      })
  });

export const allPostsQuery = gql`
    query($slug: String){
        projects(where: {slug: $slug}){
            id
            title
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

const Projects = () => (
    <Query query={allPostsQuery} >
    {({ loading, error, data: {projects} }) => {
        if (loading) return <div className="container">
                                <p>Loading...</p>
                            </div>;
        if (error) return <div className="container">
                                <p>Error :(</p>
                            </div>;
                            
        return console.log(projects)
                                }}
    </Query>
)

class Post extends React.Component {
/*     static async getInitialProps({query}) {
      console.log('SLUG', query.slug)
      return {}
    } */
    render() {

      return (
      <Layout>
          <ApolloProvider client={client}>
                <Projects/>
          </ApolloProvider>
      </Layout>
      )
    }
  }

  export default Post
