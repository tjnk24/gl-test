import React from "react";
import Header from './components/header';
import Button from 'react-bootstrap/esm/Button';
import "./state/stores/ProductsStore";
import './index.scss';

import ProductList from "./components/productList";
import AddProductModal from "./components/modals/add-product";

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAddItemOpened: false,
    }
  }

  openAddItemModal = () => {
    this.setState({ isAddItemOpened: true })
  }

  closeAddItemModal = () => {
    this.setState({ isAddItemOpened: false })
  }

  render() {
    const { isAddItemOpened } = this.state;

    return (
      <>
        <AddProductModal
          show={isAddItemOpened}
          onHide={this.closeAddItemModal}
        />
        <main className="main-container">
          <Header />
          <Button onClick={this.openAddItemModal}>Добавить товар</Button>
          <ProductList />
        </main>
      </>
    );
  }
}
