import React from "react";
import Button from "react-bootstrap/esm/Button";
import { withStore } from "../../state/withStore";
import { USER_LOGIN_LOGOUT } from '../../state/stores/AuthStore';
import './header.scss';

class Header extends React.Component {
  Button = () => {
    const { modalHandler } = this.props;

    return (
      <Button
      variant="light"
      onClick={modalHandler}
    >
      Войти
    </Button>
    )
  }

  logoutHandler = () => {
    const { dispatch } = this.props;

    dispatch(USER_LOGIN_LOGOUT, {
      auth: {
        isAuthenticated: false,
      }
    });
  }

  render() {
    const { auth } = this.props;

    console.log('header', auth);

    return (
      <header className="app-header">
        <h1>Frontend Test Task</h1>
        {
          auth.isAuthenticated
          ? (
            <div>
              <span className="app-header-username">{auth.login}</span>
              <Button
                variant="light"
                style={{ 'marginLeft': '30px' }}
                onClick={this.logoutHandler}
              >
                Выход
              </Button>
            </div>
          )
          : this.Button()
        }
      </header>
    )
  }
};

export default withStore("auth", (data) => data)(Header);