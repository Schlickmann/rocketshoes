import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductList, Loading } from './styles';

function Home({ addToCartRequest, amount }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);

      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
      setIsLoading(false);
    }

    loadProducts();
  }, []);

  function handleAddItem(id) {
    addToCartRequest(id);
  }

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <ProductList>
          {products.map(product => (
            <li key={String(product.id)}>
              <img src={product.image} alt="" />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
              <button type="button" onClick={() => handleAddItem(product.id)}>
                <div>
                  <MdShoppingCart size={16} color="#fff" />{' '}
                  {amount[product.id] || 0}
                </div>
                <span>ADD TO CART</span>
              </button>
            </li>
          ))}
        </ProductList>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

Home.propTypes = {
  amount: PropTypes.shape().isRequired,
  addToCartRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
