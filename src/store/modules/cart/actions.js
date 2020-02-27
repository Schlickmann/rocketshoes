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

export function removeFromCart(id) {
  return {
    type: Types.REMOVE_FROM_CART,
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: Types.UPDATE_AMOUNT_CART_REQUEST,
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: Types.UPDATE_AMOUNT_CART_SUCCESS,
    id,
    amount,
  };
}
