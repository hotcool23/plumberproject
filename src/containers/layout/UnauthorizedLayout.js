import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthMain, AuthSignup } from '../auth';
import { Connect } from '../../utils';

class UnauthorizedLayout extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route path={`${match.path}`} exact component={AuthMain} />
        <Route path={`${match.path}/signup`} exact component={AuthSignup} />
        <Redirect to={`${match.url}`} />
      </Switch>
    );
  }
}

export default Connect(
  null,
)(UnauthorizedLayout);
