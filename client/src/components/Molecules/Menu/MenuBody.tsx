import React, { useState } from 'react';
import InputBox from 'components/Atoms/InputBox';
import { OnChangeElement } from 'models/onChangeElement';
import Select from 'components/Atoms/Select';
import Button from 'components/Atoms/Button';
import { ingredientsList } from 'constants/constants';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { addIngredient, addDetails } from 'redux/states/addedItemState';

function MenuBody(): JSX.Element {
  const allIngredients = useAppSelector((state) => state.ingredients);
  const newItem = useAppSelector((state) => state.addedItem);
  const dispatch = useAppDispatch();

  const [selectedType, setSelectedType] = useState<string>(
    ingredientsList[0].toLowerCase()
  );

  const handleInputChange = (
    e: React.ChangeEvent<OnChangeElement>,
    propertyKey: string
  ) => {
    dispatch(addDetails({ propertyKey: propertyKey, value: e.target.value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value.toLowerCase());
  };

  return (
    <div>
      <InputBox
        placeholder="Name of the item"
        value={newItem.name}
        handleChange={(e) => handleInputChange(e, 'name')}
      />
      <InputBox
        placeholder="Price of the item"
        value={newItem.price}
        handleChange={(e) => handleInputChange(e, 'price')}
      />
      <Select selectList={ingredientsList} handleChange={handleSelectChange} />
      {allIngredients[selectedType] &&
        Object.values(allIngredients[selectedType]).map((type) => (
          <Button
            onClick={() => dispatch(addIngredient(type))}
            key={type.name}
            text={type.name}
          />
        ))}
    </div>
  );
}

export default MenuBody;
