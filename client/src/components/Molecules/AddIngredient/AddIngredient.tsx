import React from 'react';
import Button from 'react-bootstrap/Button';
import InputBox from 'components/Atoms/InputBox';
import Select from 'components/Atoms/Select';
import { useAppDispatch } from 'redux/hooks';
import postApi from 'helpers/postApi';
import getApi from 'helpers/getApi';
import { showIngredients } from 'redux/states/ingredientsState';
import { OnChangeElement } from 'models/onChangeElement';
import { ingredientsList } from 'constants/constants';

interface StateTypes {
  input: string;
  select: string;
}

function AddIngredient(): JSX.Element {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const [newItem, setNewItem] = React.useState<StateTypes>({
    input: '',
    select: 'pastas',
  });

  const handleChange = (
    e: React.ChangeEvent<OnChangeElement>,
    item: string
  ): void => {
    setNewItem({ ...newItem, [item]: e.target.value.toLowerCase() });
  };

  const handleClick = async () => {
    if (newItem.input !== '') {
      const postResult = await postApi('ingredients/new', {
        name: newItem.input,
        type: newItem.select,
      });

      if (postResult.status === 201) {
        const newData = await getApi('ingredients/all');
        dispatch(showIngredients(newData));
        setErrorMessage('');
        setNewItem({ ...newItem, input: '' });
      } else if (postResult.status === 400) {
        setErrorMessage('This ingredient already exists ');
      }
    }
  };

  return (
    <div>
      <div>
        <InputBox
          placeholder="Add Item Here"
          handleChange={(e) => handleChange(e, 'input')}
          value={newItem.input}
        />
        <Button onClick={handleClick}>Add</Button>
        <Select
          selectList={ingredientsList}
          handleChange={(e) => handleChange(e, 'select')}
        />
      </div>

      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default AddIngredient;
