import React from 'react';
import { useAppSelector } from 'redux/hooks';
import getIngredients from './getIngredients';

function IngredientsList(): JSX.Element {
  const ingredientsList = useAppSelector((state) => state.ingredients);

  React.useEffect(() => {
    getIngredients();
  }, []);
  return (
    <div>
      {Object.entries(ingredientsList).map(([key, value], index) => (
        <div key={index}></div>
      ))}
    </div>
  );
}

export default IngredientsList;
