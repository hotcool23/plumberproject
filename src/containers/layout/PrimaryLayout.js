import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { AuthorizedLayout, UnauthorizedLayout } from './';
import { AuthorizedRoute } from '../../components/route';
import { setIsMobile } from '../../redux/mobile';
import { Connect } from '../../utils';

class PrimaryLayout extends React.Component {
  handleWindowSizeChange = () => {
    const isMobile = (window.innerWidth < 768);
    this.props.setIsMobile(isMobile);
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.handleWindowSizeChange();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/" component={AuthorizedLayout} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setIsMobile
}, dispatch);

export default Connect(
  null,
  mapDispatchToProps
)(PrimaryLayout);
