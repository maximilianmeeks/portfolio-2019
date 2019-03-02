
import React from 'react';
import Layout from "../components/layout";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';



/* import ReactMarkdown from 'react-markdown' */

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
      
    <Query query={allPostsQuery}>
    {({ loading, error, data: {title} }) => {
        if (loading) return <div className="container">
                                <p>Loading...</p>
                            </div>;
        if (error) return <div className="container">
                                <p>Error :(</p>
                            </div>;
    return 
    </Query>


class Post extends React.Component {
/*     static async getInitialProps({query}) {
      console.log('SLUG', query.slug)
      return {}
    } */
    render() {
        
      return (
      <Layout><h1>{query.title}</h1></Layout>
      )
    }
  }
  
  export default Post
