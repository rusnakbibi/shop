import { CART_ACTION_TYPES } from './cart.types';

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

// Sets the payload of the action and stores it in 'type' and 'payload' respectively
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  // CART_ACTION_TYPES contains all of the available actions
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    // If the input type is not valid, throws an error
    default:
      return state;
  }
};
