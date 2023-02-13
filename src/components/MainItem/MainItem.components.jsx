import { useNavigate } from 'react-router-dom';

import { MainItemContainer, Body, BackgroundImage } from './MainItem.module';

const MainItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <MainItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </MainItemContainer>
  );
};

export default MainItem;
