import React, { Component, Fragment } from "react";
/* import Router from "next/router"; */
import Head from "next/head";
/* import Link from "next/link"; */
import Header from "../components/header";
import Styles from "../css/index.scss";

export default class extends Component {
    render() {
        return(
            <Fragment>
                <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <style dangerouslySetInnerHTML={{__html: Styles}}/>
                </Head>
                <Header></Header>
            </Fragment>
        )
    }
}