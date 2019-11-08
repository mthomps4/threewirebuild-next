import { NextPage } from 'next';
import * as React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
const IndexPage: NextPage = () => {
  return (
    <Container>
      <Container color="blue" border="1px solid blue">
        Hello Styled Component
      </Container>
      <Container bg="navy" color="white" m={3}>
        Hello Styled Component
      </Container>
      <Container bg="black" color="white" p={3}>
        Hello Styled Component
      </Container>

      <Container bg="navy" color="white" p={4} width={{ _: 1, sm: 0.75, md: 1 / 2, lg: 1 / 4, xl: 1 / 8 }}>
        Media Container: <br />
        xl=.125 <br />
        lg= .25 <br />
        md=.5 <br />
        sm =.75 <br />
        _=1
      </Container>

      <p>Flex Row:</p>
      <Container variant="row" bg="navy" color="white" m={2} justifyContent="space-around">
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </Container>

      <Row red color="white" m={2} justifyContent="space-around">
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </Row>

      <p>Flex Column:</p>
      <Container variant="column" bg="navy" color="white" m={2}>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </Container>
      <p>Center Content:</p>
      <Container red centerContent color="white" m={2}>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </Container>
    </Container>
  );
};

export default IndexPage;
