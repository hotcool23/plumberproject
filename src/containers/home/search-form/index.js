import React from 'react';
import { withRouter } from 'react-router-dom';
import { Connect } from '../../../utils';
import { Container, Form, Grid } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import './styles.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };
  }

  componentWillReceiveProps(nextProps) {    
    const errors = [];
    this.setState({ errors });
  }

  validateFields = () => {
    return true;
  }

  handleSubmit = () => {
    if (this.validateFields()) {
      console.log('validated');
    }
  }

  render() {
    const { errors } = this.state;
    let trade = '';
    let postcode = '';

    return (
      <div className="search-form">        
        <div className="search-wrapper">
          <Container>
            <h2>Perth's best tradies</h2>
            <h3>As rated by other customers. Finally.</h3>
            <Form
              onSubmit={this.handleSubmit}
              error={!isEmpty(errors)}
              noValidate
            >
              <Grid>
                <Grid.Column width={6}>
                  <Form.Input
                    placeholder="Trade (eg Plumber)"
                    type="text"
                    name="trade"
                    value={trade}
                    onChange={this.handleChange}
                  />
                </Grid.Column>
                <Grid.Column width={6}>
                  <Form.Input
                    placeholder="Postcode"
                    type="text"
                    name="postcode"
                    value={postcode}
                    onChange={this.handleChange}            
                  />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Form.Button
                    content="Search"
                    fluid
                  />
                </Grid.Column>
              </Grid>
            </Form>
            <button className="search-wrapper--btn-switch">
              Or search a member by name &gt;
            </button>
          </Container>
        </div>
        <div className="review-bar">
          <Container className="review-bar--content">
            <p className="review-bar--member-info">
              Brad - Element Plumbing & Gas - Scarborough (Member since 2017)
            </p>
            <div className="review-bar--caption">
              <p>
                Every review published helps a charity of your choice - Thank you!
              </p>
            </div>
          </Container>
          <div className="review-bar--bg-bar">
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Connect(
  null
)(SearchForm));
