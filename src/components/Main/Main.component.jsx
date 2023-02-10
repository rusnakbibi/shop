import { MainItemComponent } from '..';

import styles from './Main.module.scss';

const Main = ({ categories }) => {
  return (
    <div className={styles.mainContainer}>
      {categories.map((category) => (
        <MainItemComponent category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Main;
