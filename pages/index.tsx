import { NextPage } from 'next';
import * as React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Spacer from '../components/Spacer';
import Text from '../components/Text';
const IndexPage: NextPage = () => {
  return (
    <Container>
      <Container>
        <h1>CONTAINER EXAMPLES</h1>
        <Container color="blue" border="1px solid blue">
          I'm a styled container with blue font!
        </Container>
        <Container bg="navy" color="white" m={3}>
          Container with margin
        </Container>
        <Container bg="black" color="white" p={3}>
          Container with padding
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
      <Container>
        <h1>TEXT EXAMPLES:</h1>
        <Text>I'm a normal text component</Text>
        <Text textAlign="center">Centered Text</Text>
        <Text textAlign="right">Right Align Text</Text>
        <Spacer />
        <Text primary>I'm a primary text field</Text>
        <Text secondary>I'm a secondary text field</Text>
        <Text success>I'm a success text field</Text>
        <Text info>I'm an info text field</Text>
        <Text warning>I'm a warning text field</Text>
        <Text danger>I'm a danger text field</Text>
        <Spacer />
        <Text successBox>I'm a success box</Text>
        <Text infoBox>I'm a info box</Text>
        <Text warningBox>I'm a warning box</Text>
        <Text dangerBox>I'm a danger box</Text>
      </Container>
    </Container>
  );
};

export default IndexPage;
