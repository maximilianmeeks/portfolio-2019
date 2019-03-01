import Link from 'next/link';
import React from "react";
import Layout from "../components/layout";

const Index = () => (
        <Layout>
        <p>
            Welcome to my portfolio! This is designed with Next.js!
            Please{' '}
                <Link href="/contact">
                    <a>contact me</a>
                </Link>{' '}
            to get more information.
        </p>
        </Layout>
    
)

export default Index