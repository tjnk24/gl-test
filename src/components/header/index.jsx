import React from "react";
import Button from "react-bootstrap/esm/Button";
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <h1>Frontend Test Task</h1>
        <Button variant="light">Войти</Button>
      </header>
    )
  }
};
