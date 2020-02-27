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

export function updateAmount(id, amount) {
  return {
    type: Types.UPDATE_AMOUNT_CART,
    id,
    amount,
  };
}
