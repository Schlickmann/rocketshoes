import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
                      onClick={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
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

export default Cart;
