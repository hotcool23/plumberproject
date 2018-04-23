import React from 'react';
import { withRouter } from 'react-router-dom';
import { Connect } from '../../utils';
import SearchForm from "./search-form";
import ReviewSection from "./review-section";
import './styles.css';

class Home extends React.Component {
  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/auth');
  }

  render() {
    return (
      <div className="page page--home">
        <SearchForm />
        <ReviewSection />
      </div>
    );
  }
}

export default withRouter(Connect(
  null
)(Home));
