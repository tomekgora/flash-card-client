import React from "react";
import {
  Header,
  Icon,
  Container,
  Button,
  Form,
  Message
} from "semantic-ui-react";

const SignupForm = props => (
  <Container>
    <Header as="h2">
      <Icon name="signup" />
      <Header.Content>
        Signup
        <Header.Subheader>Please create a new account</Header.Subheader>
      </Header.Content>
    </Header>
    <Form>
      <Form.Input
        icon="user"
        iconPosition="left"
        name="userName"
        value={props.formData.userName}
        label="Your Username"
        placeholder="Please enter username"
        onChange={props.handleChange}
        width={10}
      />
      <Form.Input
        icon="lock"
        iconPosition="left"
        name="userPassword"
        value={props.formData.userPassword}
        label="Your Password"
        placeholder="Please enter password"
        onChange={props.handleChange}
        width={10}
        type="password"
      />
      <Form.Input
        icon="lock"
        iconPosition="left"
        label="Password confirmation"
        name="userPasswordConfirm"
        value={props.formData.userPasswordConfirm}
        placeholder="Please confirm your password"
        onChange={props.handleChange}
        width={10}
        type="password"
      />
      <Button color="secondary">Signup</Button>
    </Form>
  </Container>
);

export default SignupForm;
