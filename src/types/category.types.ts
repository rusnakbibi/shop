export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED',
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export type CategoryState = {
  readonly categories: Category[],
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export type CategoryMap = {
  [key: string]: CategoryItem[];
}

export type CategoryRouteParams = {
  category: string;
}

export type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
  key: string;
}

export type CategoryMain = Omit<Category, 'items'> & {
  id: number;
  route: string;
}

export type CategoryMainItemProps = {
  category: CategoryMain;
}

export type ProductCardProps = {
  product: CategoryItem;
}