import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading } from 'store';

import { CategoryPreviewComponent, SpinnerComponent } from '../../components';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreviewComponent
              key={title}
              title={title}
              products={products}
            />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
