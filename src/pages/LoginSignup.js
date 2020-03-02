import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import {
  Header,
  Icon,
  Divider,
  Segment,
  Button,
  Grid,
  GridColumn
} from "semantic-ui-react";

class LoginSignup extends Component {
  state = {
    mode: "login",
    userName: "",
    userPassword: "",
    userPasswordConfirm: ""
  };

  handleChangeMode = () => {
    if (this.state.mode === "login") {
      this.setState({
        mode: "signup"
      });
    } else {
      this.setState({
        mode: "login"
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitLogin = event => {
    event.preventDefault();
    this.props.loginUpUser({
      userName: this.state.userName,
      userPassword: this.state.userPassword
    });
  };

  handleSubmitSignup = event => {
    event.preventDefault();
    this.props.signupUpUser({
      userName: this.state.userName,
      userPassword: this.state.userPassword,
      userPasswordConfirm: this.state.userPasswordConfirm
    });
  };

  render() {
    const mode = this.state.mode;
    let columnLeft;
    let columnRight;

    if (mode === "login") {
      columnLeft = <LoginForm handleChange={this.handleChange} />;
      columnRight = (
        <Button
          content="Sign-up"
          icon="signup"
          size="large"
          onClick={this.handleChangeMode}
        />
      );
    } else {
      columnLeft = (
        <Button
          content="Login"
          icon="user"
          size="large"
          onClick={this.handleChangeMode}
        />
      );
      columnRight = <SignupForm />;
    }

    return (
      <Segment placeholder>
        <Header as="h1">
          <Icon name="student" />
          Welcome to DevFlash!
        </Header>
        <Grid relaxed="very" stackable>
          <Grid.Column width={7} verticalAlign="middle">
            {columnLeft}
          </Grid.Column>
          <GridColumn width={1}>
            <Divider vertical>OR</Divider>
          </GridColumn>
          <Grid.Column width={7} verticalAlign="middle">
            {columnRight}
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
} // component closed

export default LoginSignup;
