import { Column, Container, Row, Spacer, Text } from '@3wirebuild/styled-system';
import { NextPage } from 'next';
import * as React from 'react';

const ExamplePage: NextPage = () => {
  return (
    <Container>
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

      <Container>
        <h1>CONTAINER EXAMPLES</h1>
        <Container border="1px solid blue">Blue Border!</Container>
        <Container bg="primary" color="white" m={3}>
          With Margin
        </Container>
        <Container bg="primary" color="white" p={3}>
          Container with padding
        </Container>
        <Spacer m={3} />
        <Container bg="primary" color="white" p={4} width={{ _: 1, sm: 0.75, md: 1 / 2, lg: 1 / 4, xl: 1 / 8 }}>
          Testing Breakpoints: <br />
          xl=.125 <br />
          lg= .25 <br />
          md=.5 <br />
          sm =.75 <br />
          _=1
        </Container>
        <h2>Row:</h2>
        <Container variant="row" bg="navy" color="white" m={2} justifyContent="space-around">
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </Container>
        <Row bg="purple" color="white" m={2} justifyContent="space-around">
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </Row>
        <h2>Column:</h2>
        <Column bg="navy" color="white" m={2}>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </Column>
        <h2>Boolean Props:</h2>
        <Text fontWeight="bold">centerContent</Text>
        <Row centerContent>
          <Row width="50%" bg="purple" justifyContent="space-around" color="white" m={2}>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default ExamplePage;
