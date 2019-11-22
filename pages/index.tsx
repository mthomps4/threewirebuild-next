import { Button, Card, Column, Container, Label, Row, TextInput } from '@3wirebuild/styled-system';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

const IndexPage: NextPage = () => {
  const router = useRouter();
  const navigateToExample = (e: any) => {
    e.preventDefault();
    router.push('/example');
  };
  return (
    <Container centerContent>
      <Card m={5} bg="primay">
        <Column>
          <Row centerContent>
            <Label pr={2} htmlFor="username" width="40%">
              Username:
            </Label>
            <TextInput py={1} px={2} name="username" placeholder="username" />
          </Row>

          <Row mt={4} centerContent>
            <Label pr={2} htmlFor="password" width="40%">
              Password:
            </Label>
            <TextInput py={1} px={2} name="password" type="password" placeholder="********" />
          </Row>

          <Row mt={4} justifyContent="space-between">
            <Button width="40%" disabled>
              Disabled
            </Button>
            <Button onClick={navigateToExample} color="white" bg="primary" width="40%">
              Login
            </Button>
          </Row>
        </Column>
      </Card>
    </Container>
  );
};

export default IndexPage;
