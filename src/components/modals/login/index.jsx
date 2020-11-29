import React from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import { withStore } from "../../../state/withStore";
import { USER_LOGIN_LOGOUT } from '../../../state/stores/AuthStore';
import './login.scss';

class LoginModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }
  }

  validateFields = (value, credentials) => {
    let validated = false;

    for (const credential of credentials) {
      if (value === credential) validated = true;
    }

    if (!validated) {
      this.setState({
        message: 'Извините, неверные логин или пароль.'
      })
    }

    return validated;
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const elements = Array.from(event.target.elements)
      .filter((elem) => elem.type !== 'submit');

    const { auth, dispatch, onHide } = this.props;

    for (const element of elements) {
      switch(element.type) {
        case 'text': {
          const validated = this.validateFields(element.value, [auth.email, auth.login]);
          if (!validated) return;

          break;
        }
        case 'password': {
          const validated = this.validateFields(element.value, [auth.password]);
          if (!validated) return;

          break;
        }
        default: {
          break;
        }
      }
    }

    dispatch(USER_LOGIN_LOGOUT, {
      auth: {
        isAuthenticated: true,
      }
    });

    onHide();
  }

  render() {
    const { show, onHide } = this.props;

    return (
      <Modal
        show={show}
        onHide={onHide}
        onSubmit={this.onSubmitHandler}
        animation={false} // don't change, causes Warning: findDOMNode is deprecated in StrictMode
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header
          closeButton
          style={{ 'alignItems': 'center' }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Вход
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Логин или e-mail</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите свой логин или e-mail"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Text className="error-message">
                { this.state.message }
              </Form.Text>
            </Form.Group>

            <Button
              className="login-button"
              type="submit"
            >
              Войти
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default withStore("auth", (data) => data)(LoginModal);