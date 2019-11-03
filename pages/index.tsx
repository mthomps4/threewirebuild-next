import { NextPage } from 'next';
import * as React from 'react';
import Box from '../components/Box';
const IndexPage: NextPage = () => {
  return (
    <Box>
      <Box color="blue" border="1px solid blue">
        Hello Styled Component
      </Box>
      <Box bg="navy" color="white" m={3}>
        Hello Styled Component
      </Box>
      <Box bg="black" color="white" p={3}>
        Hello Styled Component
      </Box>

      <Box bg="navy" color="white" p={4} width={{ _: 1, sm: 0.75, md: 1 / 2, lg: 1 / 4, xl: 1 / 8 }}>
        Media Box: <br />
        xl=.125 <br />
        lg= .25 <br />
        md=.5 <br />
        sm =.75 <br />
        _=1
      </Box>

      <p>Flex Row:</p>
      <Box variant="row" bg="navy" color="white" m={2} justifyContent="space-around">
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </Box>

      <p>Flex Column:</p>
      <Box variant="column" bg="navy" color="white" m={2}>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </Box>
    </Box>
  );
};

export default IndexPage;
