import React from 'react';
import Button from 'components/Atoms/Button';
import InputBox from 'components/Atoms/InputBox';
import Select from 'components/Atoms/Select';
import IngredientsList from '../IngredientsList';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { addIngredient } from 'redux/states/ingredientsState';

interface StateTypes {
  input: string;
  select: string;
}

type OnChangeElement = HTMLInputElement | HTMLSelectElement;

function AddIngredient(): JSX.Element {
  const ingredientsState = useAppSelector((state) => state.ingredients);
  const dispatch = useAppDispatch();

  const [newItem, setNewItem] = React.useState<StateTypes>({
    input: '',
    select: 'pastas',
  });
  const ingredientsList: string[] = [];

  Object.keys(ingredientsState).forEach((ingredientType) =>
    ingredientsList.push(ingredientType)
  );

  const handleChange = (
    e: React.ChangeEvent<OnChangeElement>,
    item: string
  ): void => {
    setNewItem({ ...newItem, [item]: e.target.value.toLowerCase() });
  };

  const handleClick = () => {
    dispatch(addIngredient({ itemType: newItem.select, item: newItem.input }));
  };

  return (
    <div>
      <div>
        <InputBox
          placeholder="Add Item Here"
          handleChange={(e) => handleChange(e, 'input')}
        />
        <Button text="Add" onButtonClick={handleClick} />
        <Select
          selectList={ingredientsList}
          handleChange={(e) => handleChange(e, 'select')}
        />
      </div>
      <IngredientsList />
    </div>
  );
}

export default AddIngredient;
