import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import { ProductList } from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={String(product.id)}>
            <img src={product.image} alt="" />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button">
              <div>
                <MdShoppingCart size={16} color="#fff" /> 3
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
