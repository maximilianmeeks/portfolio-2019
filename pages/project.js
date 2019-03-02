
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import SimpleAppBar from "../components/menuBar";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown'

export const allPostsQuery = gql`
    query($slug: String){
        projects(where: {slug: $slug}){
            id
            title
            text
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
class Post extends React.Component {
    static async getInitialProps({query}) {
      console.log('SLUG', query.slug)
      return {}
    }
    render() {
      return <h1>My blog post</h1>
    }
  }
  
  export default Post
