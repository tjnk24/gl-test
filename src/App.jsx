import React from "react";
import Header from './components/header';
import Button from 'react-bootstrap/esm/Button';
import "./state/stores/ProductsStore";
import './index.scss';

import ProductList from "./components/productList";

export class App extends React.Component {
  render() {
    return (
      <main className="main-container">
        <Header />
        <Button>Добавить товар</Button>
        <ProductList />
      </main>
    );
  }
}
