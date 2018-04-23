import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Message, Dimmer, Loader, Label, Image, Divider, Button, Form, Grid, Segment } from 'semantic-ui-react';
import { isEmail } from 'validator';
import { find, map, isEmpty } from 'lodash';
import { Connect } from '../../../utils';
import { login } from '../../../redux/auth';
import logo from '../../../assets/logo.png';

class AuthMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentUser, loginError } = this.props;
    const newUser = nextProps.currentUser;
    const newError = nextProps.loginError;

    if (newUser && (newUser !== currentUser)) {
      this.props.history.push('/');
    } else if (newError !== loginError) {
      const errors = [];
      if (newError) {
        errors.push({ message: 'Incorrect username or password' });
      }
      this.setState({ errors });
    }
  }

  validateFields = () => {
    const { email, password } = this.state;
    const errors = [];
    if (isEmpty(email)) {
      errors.push({ field: 'email', message: 'Email is required' });
    } else if (!isEmail(email)) {
      errors.push({ field: 'email', message: 'Please enter valid email'});
    }
    if (isEmpty(password)) {
      errors.push({ field: 'password', message: 'Password is required' });
    }

    this.setState({ errors });

    return isEmpty(errors);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, errors: [] })

  handleSubmit = () => {
    if (this.validateFields()) {
      const { email, password } = this.state;
      this.props.login(email, password);
    }
  }

  render() {
    const { email, password, errors } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="page f-align-center m-t-4 m-b-4">
        <Grid centered>
          {
            isLoading &&
            <Dimmer active inverted>
              <Loader size='medium' />
            </Dimmer>
          }
          <Grid.Column
            widescreen={4}
            largeScreen={6}
            computer={7}
            tablet={8}
            mobile={12}
          >
            <Segment padded="very">
              <Grid.Row>
                <Image className="m-t-1 m-b-4" src={logo} size="small" centered />
                <Label.Detail className="t-align-center m-b-1">Sign in to your Brring account</Label.Detail>
              </Grid.Row>
              <Grid.Row>
                <Form
                  onSubmit={this.handleSubmit}
                  error={!isEmpty(errors)}
                  noValidate
                >
                  <Form.Input
                    placeholder="Your email address"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    error={!!find(errors, { field: 'email' })}
                  />
                  <Form.Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    error={!!find(errors, { field: 'password' })}
                  />
                  <Message error>
                    {map(errors, err =>
                      <Message.Item key={err.message}>{err.message}</Message.Item>
                    )}
                  </Message>
                  <Form.Button
                    content="Login"
                    fluid
                  />
                </Form>
                <Divider horizontal section>or</Divider>
              </Grid.Row>
              <Grid.Row>
                <Button
                  color="facebook"
                  fluid
                >
                  Sign in with Facebook
                </Button>
                <Label.Detail className="t-align-center m-t-1">
                  <Link to="#">Forgot your password?</Link>
                </Label.Detail>
                <Divider section />
              </Grid.Row>
              <Grid.Row>
                <Label.Detail className="t-align-center m-b-1">Don't have an account?</Label.Detail>
                <Button
                  color="pink"
                  fluid
                >
                  Sign up for Brring
                </Button>
              </Grid.Row>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  loginError: state.auth.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);

export default withRouter(Connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthMain));
