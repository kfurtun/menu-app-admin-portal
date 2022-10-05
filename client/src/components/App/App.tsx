import React from 'react';
import { useAppSelector } from 'redux/hooks';
import Ingredients from 'components/Molecules/AddIngredient';
// import { showSection } from '../../redux/states/sectionState';
import Section from 'components/Molecules/Section';

function App() {
  const showSections = useAppSelector((state) => state.sections);
  const showIngredients = useAppSelector((state) => state.ingredients);
  console.log(showIngredients);
  // const dispatch = useAppDispatch();

  return (
    <div>
      <Section
        show={showSections.ingredients}
        title="Ingredients"
        type="ingredients"
      >
        <Ingredients />
      </Section>
      <Section
        show={showSections.menuItems}
        title="Menu Items"
        type="menuItems"
      ></Section>
    </div>
  );
}

export default App;
