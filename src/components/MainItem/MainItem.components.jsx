import {
  MainItemContainer,
  Body,
  BackgroundImage,
} from './MainItem.module.jsx';

const MainItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <MainItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </MainItemContainer>
  );
};

export default MainItem;
