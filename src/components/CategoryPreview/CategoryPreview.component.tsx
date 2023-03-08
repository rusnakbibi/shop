import { FC } from 'react';

import { ProductCartComponent } from '..';
import { CategoryPreviewProps } from 'types/category.types';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './CategoryPreview.styles';

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCartComponent key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
