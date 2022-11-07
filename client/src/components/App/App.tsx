import React from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import AddIngredient from 'components/Molecules/AddIngredient';
import { showIngredients } from 'redux/states/ingredientsState';
import Section from 'components/Molecules/Section';
import IngredientsList from 'components/Molecules/IngredientsList';
import getApi from 'helpers/getApi';
import Menu from 'components/Molecules/Menu';
import PageTemplate from 'components/Organisms/PageTemplate';

function App() {
  const showSections = useAppSelector((state) => state.sections);
  const ingredients = useAppSelector((state) => state.ingredients);

  const dispatch = useAppDispatch();
  // const [state, setState] = React.useState<string[]>([]);

  React.useEffect(() => {
    getApi('ingredients/all').then((data) => dispatch(showIngredients(data)));
  }, [dispatch]);

  return (
    <div>
      {/* <Section
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
      >
        <Menu />
      </Section> */}
      {/* <PageTemplate>{''}</PageTemplate> */}
    </div>
  );
}

export default App;
