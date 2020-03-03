import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { signUpUser } from "../actions/user";
import { loginUser } from "../actions/user";
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
    formData: {
      userName: "",
      userPassword: "",
      userPasswordConfirm: ""
    }
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
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmitLogin = event => {
    event.preventDefault();
    this.props.loginUser({
      userName: this.state.formData.userName,
      userPassword: this.state.formData.userPassword
    });
  };

  handleSubmitSignUp = event => {
    event.preventDefault();
    this.props.signUpUser({
      userName: this.state.formData.userName,
      userPassword: this.state.formData.userPassword
      // userPasswordConfirm: this.state.formData.userPasswordConfirm
    });
  };

  render() {
    const mode = this.state.mode;
    let columnLeft;
    let columnRight;

    if (mode === "login") {
      columnLeft = (
        <LoginForm
          handleChange={this.handleChange}
          formData={this.state.formData}
          handleSubmit={this.handleSubmitLogin}
          error={this.props.error}
        />
      );
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
      columnRight = (
        <SignupForm
          handleChange={this.handleChange}
          formData={this.state.formData}
          handleSubmit={this.handleSubmitSignUp}
          error={this.props.error}
        />
      );
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

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
    error: reduxState.error
  };
}
const mapDispatchToProps = {
  signUpUser,
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
