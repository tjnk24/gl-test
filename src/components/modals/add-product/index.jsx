import React from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import { withStore } from "../../../state/withStore";
import { setImageThumb, generateProductId } from './helpers.js';
import placeholder from './placeholder.jpg';
import { ADD_PRODUCT } from '../../../state/stores/ProductsStore';
import './add-product.scss';

class AddProductModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageThumb: placeholder,
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const elements = Array.from(event.target.elements)
      .filter((elem) => elem.type !== 'submit' && elem.type !== 'file');

    const { onHide, products, dispatch } = this.props;

    const newId = products.length ? generateProductId([...products]) : 1;

    dispatch(ADD_PRODUCT, {
      product: {
        id: newId,
        title: elements[0].value,
        description: elements[1].value,
        price: elements[2].value - 0, // convert string to number
        image: this.state.imageThumb,
      }
    });

    this.setState({
      imageThumb: placeholder
    })

    onHide();
  };

  fileOnChangeHandler = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    setImageThumb(file, this.setState.bind(this));
  }

  render() {
    const { onHide, show } = this.props;

    return (
      <Modal
        show={show}
        onHide={onHide}
        onSubmit={this.onSubmitHandler}
        animation={false} // don't change, causes Warning: findDOMNode is deprecated in StrictMode
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          style={{ 'alignItems': 'center' }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Добавление товара
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Название</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите название товара"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Цена</Form.Label>
              <Form.Control
                type="number"
                placeholder="0 ₽"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.File
                label="Фото"

                onChange={this.fileOnChangeHandler}
                required
              />
              <img
                className="image-placeholder"
                src={`${this.state.imageThumb}`}
                alt="thumbnail"
              />
            </Form.Group>
            <Button
              style={{ 'float': 'right' }}
              type="submit"
            >
              Добавить
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default withStore("products", (data) => data)(AddProductModal);