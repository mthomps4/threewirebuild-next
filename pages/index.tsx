import { NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';
import Box from '../components/Box';
import Layout from '../components/Layout';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      <Box color="blue">Hello Styled Component</Box>
      <Box color="navy">Hello Styled Component</Box>
      <Box bg="black" color="white">
        Hello Styled Component
      </Box>
    </Layout>
  );
};

export default IndexPage;
