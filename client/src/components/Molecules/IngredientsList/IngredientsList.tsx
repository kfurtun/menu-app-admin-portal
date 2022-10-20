import React from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import Button from 'components/Atoms/Button';
import deleteApi from 'helpers/deleteApi';
import getApi from 'helpers/getApi';
import { showIngredients } from 'redux/states/ingredientsState';

function IngredientsList(): JSX.Element {
  const ingredientsList = useAppSelector((state) => state.ingredients);
  const dispatch = useAppDispatch();

  const handleClick = async (ingredient: string) => {
    const deleteResult = await deleteApi('ingredients/1', { name: ingredient });
    if (deleteResult.status === 200) {
      const newData = await getApi('ingredients/all');
      dispatch(showIngredients(newData));
    }
  };
  console.log(ingredientsList);
  return (
    <div>
      {Object.entries(ingredientsList).map(([key, value], index) => (
        <div key={index}>
          {key}
          {Object.values(value).map((ingredient) => (
            <div key={ingredient.name}>
              <div>{ingredient.name}</div>
              <Button
                text="Remove"
                onButtonClick={() => handleClick(ingredient.name)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default IngredientsList;
