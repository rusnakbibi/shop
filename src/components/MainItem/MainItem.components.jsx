import styles from './MainItem.module.scss';

const MainItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className={styles.mainItemContainer}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.body}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default MainItem;
