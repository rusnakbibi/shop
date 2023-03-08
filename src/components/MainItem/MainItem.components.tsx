import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryMainItemProps } from 'types/category.types';

import { MainItemContainer, Body, BackgroundImage } from './MainItem.styles';

const MainItem: FC<CategoryMainItemProps> = ({ category }) => {
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
