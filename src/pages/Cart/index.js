import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  Wrapper,
  ProductTable,
  ProductInfo,
  ProductImage,
  ProductTableBody,
  ProductTitle,
  Total,
  TextEmptyCart,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <Wrapper>
        <ProductTable>
          <span>PRODUCTS LIST</span>
          <ProductTableBody>
            {cart.length > 0 ? (
              cart.map(product => (
                <div key={product.id}>
                  <ProductImage>
                    <img src={product.image} alt={product.title} />
                  </ProductImage>
                  <ProductInfo>
                    <ProductTitle>
                      <span>Name:</span>
                      <strong>{product.title}</strong>
                      <span>{product.priceFormatted}</span>
                    </ProductTitle>
                    <div>
                      <span>Quantity:</span>
                      <div>
                        <button
                          type="button"
                          onClick={() => decrement(product)}
                        >
                          <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button
                          type="button"
                          onClick={() => increment(product)}
                        >
                          <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <span>Subtotal:</span>
                      <strong>{product.subtotal}</strong>
                    </div>
                  </ProductInfo>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <TextEmptyCart>
                <div colSpan={5}>
                  <span>Cart empty :(</span>
                </div>
              </TextEmptyCart>
            )}
          </ProductTableBody>
        </ProductTable>

        <footer>
          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
          <button type="button">Check out</button>
        </footer>
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      priceFormatted: PropTypes.string,
      subtotal: PropTypes.string,
      map: PropTypes.func,
    })
  ).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
