import React from "react";
import {
  Header,
  Icon,
  Container,
  Button,
  Form,
  Message
} from "semantic-ui-react";

const SignupForm = () => (
  <Container>
    <Header as="h2">
      <Icon name="signup" />
      <Header.Content>
        Signup
        <Header.Subheader>Please login to access the site</Header.Subheader>
      </Header.Content>
    </Header>
    <Form>
      <Form.Input
        icon="user"
        iconPosition="left"
        label="Your Username"
        placeholder="Please enter username"
        width={10}
      />
      <Form.Input
        icon="lock"
        iconPosition="left"
        label="Your Password"
        placeholder="Please enter password"
        width={10}
        type="password"
      />
      <Form.Input
        icon="lock"
        iconPosition="left"
        label="Your Password"
        placeholder="Please confirm your password"
        width={10}
        type="password"
      />
      {/* <Message
        success
        compact
        header="Form Completed"
        content="You have successfully signed up and will be redirected to the main page."
      /> */}
      <Button color="secondary">Signup</Button>
    </Form>
  </Container>
);

export default SignupForm;
