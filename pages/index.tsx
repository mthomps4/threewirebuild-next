import { Button, Container, Label, TextInput } from '@3wirebuild/styled-system';
import { NextPage } from 'next';
import * as React from 'react';

const IndexPage: NextPage = () => {
  return (
    <Container bg="primary">
      <Container centerContent>
        <Container>
          <Label htmlFor="username">Username:</Label>
          <TextInput name="username" placeholder="username" />
          <Button>Login</Button>
        </Container>
      </Container>
    </Container>
  );
};

export default IndexPage;
