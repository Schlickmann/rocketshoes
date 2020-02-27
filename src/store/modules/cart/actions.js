import { Types } from './reducer';

export function addToCart(product) {
  return {
    type: Types.ADD_TO_CART,
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: Types.REMOVE_FROM_CART,
    id,
  };
}
