import React, { useState } from 'react';
import InputBox from 'components/Atoms/InputBox';
import { OnChangeElement } from 'models/onChangeElement';
import Select from 'components/Atoms/Select';
import Button from 'components/Atoms/Button';
import { ingredientsList } from 'constants/constants';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { addIngredient, addName } from 'redux/states/addedItemState';

// interface MenuItem {
//   name: string;
//   ingredients: string[];
// }

function MenuBody(): JSX.Element {
  // const [newItem, setNewItem] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>(
    ingredientsList[0].toLowerCase()
  );
  const allIngredients = useAppSelector((state) => state.ingredients);
  const newItemName = useAppSelector((state) => state.addedItem.name);
  console.log(allIngredients);
  console.log(useAppSelector((state) => state.addedItem));
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<OnChangeElement>) => {
    dispatch(addName(e.target.value));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value.toLowerCase());
  };

  return (
    <div>
      <InputBox
        placeholder="Name of the item"
        value={newItemName as string}
        handleChange={handleInputChange}
      />
      <Select selectList={ingredientsList} handleChange={handleSelectChange} />
      {allIngredients[selectedType] &&
        Object.values(allIngredients[selectedType]).map((type) => (
          <Button
            text={type.name}
            onButtonClick={() => dispatch(addIngredient(type))}
          />
        ))}
    </div>
  );
}

export default MenuBody;
