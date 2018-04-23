import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home';
import { NavBar } from '../../components/navigation';

const AuthorizedLayout = ({ match }) => (
  <div className="root">
    <NavBar />
    <Switch>
      <Route path={`${match.path}`} exact component={Home} />
      <Redirect to={`${match.url}`} />
    </Switch>
  </div>
);

export default AuthorizedLayout;
