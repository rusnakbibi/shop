import { CategoryItemComponent } from '..';

import styles from './Main.module.scss';

const Main = ({ categories }) => {
  return (
    <div className={styles.mainContainer}>
      {categories.map((category) => (
        <CategoryItemComponent category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Main;
