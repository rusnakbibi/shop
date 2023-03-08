import { categories } from 'store/categories';
import { MainItemComponent } from '..';

import { MainContainer } from './Main.styles';

const Main = () => {
  return (
    <MainContainer>
      {categories.map((category) => (
        <MainItemComponent category={category} key={category.id} />
      ))}
    </MainContainer>
  );
};

export default Main;
