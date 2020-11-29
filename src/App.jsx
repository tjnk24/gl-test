import './state/stores/RootStore';
import React from "react";
import Header from './components/header';
import Button from 'react-bootstrap/esm/Button';
import ProductList from "./components/productList";
import AddProductModal from "./components/modals/add-product";
import LoginModal from './components/modals/login';
import './index.scss';


export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addProductOpened: false,
      loginModalOpened: false,
    }
  }

  productModalHandler = () => {
    this.setState({ addProductOpened: !this.state.addProductOpened })
  }

  loginModalHandler = () => {
    this.setState({ loginModalOpened: !this.state.loginModalOpened })
  }

  render() {
    const { addProductOpened, loginModalOpened } = this.state;

    return (
      <>
        <AddProductModal
          show={addProductOpened}
          onHide={this.productModalHandler}
        />
        <LoginModal
          show={loginModalOpened}
          onHide={this.loginModalHandler}
        />
        <main className="main-container">
          <Header
            modalHandler={this.loginModalHandler}
          />
          <Button onClick={this.productModalHandler}>Добавить товар</Button>
          <ProductList />
        </main>
      </>
    );
  }
}
