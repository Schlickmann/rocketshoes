import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductList, Loading } from './styles';

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();

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
    dispatch(CartActions.addToCartRequest(id));
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

export default Home;
