import React from 'react';
import { withRouter } from 'react-router-dom';
import { Connect } from '../../../utils';
import { Container, Form, Grid } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import './styles.css';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className="review-section">
        <Container>
          <div className="review-section__button-block m-t-2 m-b-2">            
            <div className="review-section__buttons-wrapper">
              <a className="review-section__balloon m-l-1 m-r-1" href="/register">
                I'm a <span>tradie</span>.<br />I think I need to join
              </a>
              <a className="review-section__balloon m-l-1 m-r-1" href="/description">
                I'm a <span>customer</span>.<br /> Why use HelloTradie?
              </a>
            </div>
          </div>
          <div className="review-section__quotes-block">
            
            
          </div>
        </Container>
      </div>
    )
  }
}

export default withRouter(Connect(
  null
)(ReviewSection));
