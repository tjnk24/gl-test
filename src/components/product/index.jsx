import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { withStore } from "../../state/withStore";
import { REMOVE_PRODUCT } from '../../state/stores/ProductsStore';
import "./product.scss";

class Product extends React.Component {
  onRemoveHandler = () => {
    const { dispatch, product } = this.props;

    dispatch(REMOVE_PRODUCT, { id: product.id });
  }

  render() {
    const { product } = this.props;

    const price = product.price.toLocaleString("ru", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      currency: "RUB",
      style: "currency",
    });

    return (
      <Card className="product">
        <Card.Header className="product-header">
          <div>
            {product.title} - {product.id}
          </div>
          <Button
            variant="link"
            onClick={this.onRemoveHandler}
          >
            Удалить
          </Button>
        </Card.Header>
        <Card.Body className="product-body">
          <div className="product-info">
            <p className="product-info-description">{product.description}</p>
            <div>
              <span className="product-info-price">{price}</span>
            </div>
          </div>
          <div className="product-image-frame">
            <img
              className="product-image"
              src={product.image || "https://s1.ticketm.net/dam/a/3ea/a7473588-64b1-4fac-ad26-596f70b993ea_647801_TABLET_LANDSCAPE_LARGE_16_9.jpg"}
              alt=""
            />
        </div>
        </Card.Body>
      </Card>
    );
  }
}

export default withStore("products", (data) => data)(Product);