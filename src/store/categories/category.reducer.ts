import { AnyAction } from 'redux';

import { CategoryState } from 'types';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed
} from './category.action';

export const CATEGORIES_INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoryState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, isLoading: false, categories: action.payload };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }

  return state;
};
