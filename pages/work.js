import Link from 'next/link';
import React, { Component, Fragment } from "react";
import { graphql, Query } from 'react-apollo';
import { Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap";

import Layout from "../components/Layout";
import gql from 'graphql-tag';
import Loading from '../components/Loading';
import Grid from '../components/Grid'

import ApolloClient from "apollo-client";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';
import ProjectList from "../components/ProjectList";


export default () => (
    <Layout>
        <ProjectList/>
    </Layout>
)

