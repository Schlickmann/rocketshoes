export const Types = {
  ADD_TO_CART: 'ADD_TO_CART',
};

export default function cart(state = [], action) {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return [...state, action.product];
    default:
      return state;
  }
}
