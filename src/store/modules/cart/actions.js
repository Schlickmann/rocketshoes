import { Types } from './reducer';

export function addToCartRequest(id) {
  return {
    type: Types.ADD_TO_CART_REQUEST,
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: Types.ADD_TO_CART_SUCCESS,
    product,
  };
}

export function addToCartFailure(error) {
  return {
    type: Types.ADD_TO_CART_FAILURE,
    error,
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
