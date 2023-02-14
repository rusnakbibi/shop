import { createAction } from '../../utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
