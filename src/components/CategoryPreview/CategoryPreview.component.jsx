import { Link } from 'react-router-dom';

import { ProductCardComponent } from '..';

import styles from './CategoryPreview.module.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className={styles.categoryPreviewContainer}>
      <h2>
        <Link to={title}>
          <span className={styles.title}>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className={styles.preview}>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
