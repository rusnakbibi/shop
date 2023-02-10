import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../context';
import { CategoryPreviewComponent } from '../../components';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreviewComponent
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
