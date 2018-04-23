import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Image } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { logout } from '../../redux/auth';
import Connect from '../../utils/connect';
import logo from '../../assets/logo.png';
import './styles.css';

class NavBar extends React.Component {
  render() {
    const { isMobile, logout } = this.props;

    return (
      <Menu className="navbar" size="massive" borderless>
        <Container>
          <Menu.Item>
            <Link to="/">
              <Image src={logo} size={isMobile ? 'tiny' : 'small'} />
            </Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='logout' onClick={logout} />
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch);

export default Connect(
  null,
  mapDispatchToProps
)(NavBar);
