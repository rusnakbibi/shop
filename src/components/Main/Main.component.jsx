import { MainItemComponent } from '..';

import { MainContainer } from './Main.module.jsx';

const Main = ({ categories }) => {
  return (
    <MainContainer>
      {categories.map((category) => (
        <MainItemComponent category={category} key={category.id} />
      ))}
    </MainContainer>
  );
};

export default Main;
