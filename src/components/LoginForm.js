import React from "react";
import { Header, Icon, Container, Button, Form } from "semantic-ui-react";

const LoginForm = props => (
  <Container>
    <Header as="h2">
      <Icon name="user" />
      <Header.Content>
        Login
        <Header.Subheader>Please login to access the site</Header.Subheader>
      </Header.Content>
    </Header>
    <Form success>
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
      <Button color="secondary">Login</Button>
    </Form>
  </Container>
);

export default LoginForm;
