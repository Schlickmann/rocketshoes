import produce from 'immer';

export const Types = {
  ADD_TO_CART_REQUEST: '@cart/ADD_REQUEST',
  ADD_TO_CART_SUCCESS: '@cart/ADD_SUCCESS',
  REMOVE_FROM_CART: '@cart/REMOVE',
  UPDATE_AMOUNT_CART_REQUEST: '@cart/UPDATE_REQUEST',
  UPDATE_AMOUNT_CART_SUCCESS: '@cart/UPDATE_SUCCESS',
};

export default function cart(state = [], action) {
  switch (action.type) {
    case Types.ADD_TO_CART_SUCCESS:
      return produce(state, draft => {
        draft.push(action.product);
      });
    case Types.REMOVE_FROM_CART:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case Types.UPDATE_AMOUNT_CART_SUCCESS: {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
