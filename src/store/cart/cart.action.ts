import { createAction, withMatcher } from 'utils/reducer';

import {
  CART_ACTION_TYPES,
  CartItem,
  CategoryItem,
  setIsCartOpenAction,
  SetCartItemsAction,
} from 'types';


const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
  // find cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cart items with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearAll = (cartItems: CartItem[]): CartItem[] => cartItems = [];

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = withMatcher((value: boolean): setIsCartOpenAction =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, value));

export const setCartItems = withMatcher((cartItems: CartItem[]) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};

export const clearAllItems = (cartItems: CartItem[]) => {
  const newCartItems = clearAll(cartItems)
  return setCartItems(newCartItems);
}
