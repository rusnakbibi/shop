import { AnyAction, CombinedState, combineReducers, Reducer } from 'redux';

import { userReducer } from './user';
import { categoriesReducer } from './categories';
import { cartReducer } from './cart';
import { CartState, CategoryState, UserState } from 'types';

export const rootReducer: Reducer<CombinedState<{
  user: UserState;
  categories: CategoryState;
  cart: CartState;
}>, AnyAction> = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
