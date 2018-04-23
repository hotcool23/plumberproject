import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Connect from '../../utils/connect';

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, currentUser, ...rest } = this.props;

    return (
      <Route {...rest} render={props => {
        return currentUser
          ? <Component {...props} />
          : <Redirect to="/auth" />
      }} />
    );
  }
}

const mapStateToProps = state => ({
  autoLoggingIn: state.auth.autoLoggingIn
});

export default Connect(
  mapStateToProps
)(AuthorizedRoute);
