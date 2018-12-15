import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/lib/Container';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import { setToken } from '../../reducers/userReducer';
import loginService from '../../services/loginService';


const mapDispatchToProps = { setToken };

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginFailed: false,
      username: '',
      password: '',
      redirect: '',
    };
  }

  componentDidMount() {
    this.usernameField.focus();
  }

  login = async (event) => {
    event.preventDefault();

    // Reset possible error msg
    this.setState({ loginFailed: false });

    const { username, password } = this.state;
    const { token } = await loginService.login(username, password);

    if (token) {
      this.props.setToken(token);
      this.setState({ redirect: <Redirect to="/day/today" /> });
    } else {
      this.setState({ loginFailed: true });
    }
  }

  render() {
    const { loginFailed, redirect } = this.state;

    return (
      <Container className="pl-4 pr-4 mt-5 mb-5" style={{ maxWidth: '380px' }}>
        { redirect }
        <h3 className="mb-4">
          Log In
        </h3>

        {
          loginFailed ? (
            <div className="alert alert-danger small">
              Login failed! Please check your credentials and try again.
            </div>
          ) : null
        }

        <Form>
          <Form.Group controlId="loginFormUsername">
            <Form.Label>
              Username
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={event => this.setState({ username: event.target.value })}
              ref={(ref) => { this.usernameField = ref; }}
              autoComplete="username"
              className="shadow-sm"
            />
          </Form.Group>

          <Form.Group controlId="loginFormPassword">
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={event => this.setState({ password: event.target.value })}
              autoComplete="current-password"
              className="shadow-sm"
            />
          </Form.Group>

          <Button
            type="submit"
            variant="success"
            onClick={this.login}
            className="mt-2 shadow-sm"
          >
            Log In
          </Button>
        </Form>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
