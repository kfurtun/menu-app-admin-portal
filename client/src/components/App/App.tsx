import React from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import AddIngredient from 'components/Molecules/AddIngredient';
import { showIngredients } from 'redux/states/ingredientsState';
import Section from 'components/Molecules/Section';
import IngredientsList from 'components/Molecules/IngredientsList';
import getIngredients from 'components/Molecules/IngredientsList/getIngredients';
// import { proxy } from 'constants/constants';
// const axios = require('axios').default;

function App() {
  const showSections = useAppSelector((state) => state.sections);
  const ingredients = useAppSelector((state) => state.ingredients);
  console.log(ingredients);
  const dispatch = useAppDispatch();
  // const [state, setState] = React.useState<string[]>([]);

  React.useEffect(() => {
    getIngredients().then((data) => dispatch(showIngredients(data)));
  }, []);

  return (
    <div>
      <Section
        show={showSections.ingredients}
        title="Ingredients"
        type="ingredients"
      >
        <IngredientsList />
        <AddIngredient />
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
