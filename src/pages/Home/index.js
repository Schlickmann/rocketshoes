import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';
import { ProductList } from './styles';

class Home extends Component {
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

  handleAddItem = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
        {products.map(product => (
          <li key={String(product.id)}>
            <img src={product.image} alt="" />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button" onClick={() => this.handleAddItem(product.id)}>
              <div>
                <MdShoppingCart size={16} color="#fff" /> {amount[product.id] || 0}
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
