import React from 'react';
import { useAppSelector } from 'redux/hooks';

function SampleMenuItem() {
  const { name, price, ingredients } = useAppSelector(
    (state) => state.addedItem
  );

  return (
    <div>
      <div>
        <div>{name}</div>
        <div>{isNaN(+price) ? 'Please enter a valid number' : price}</div>
      </div>
      <div>
        {Object.values(ingredients).map((ingredient) =>
          Object.values(ingredient).map((item) => <div>{item.name}</div>)
        )}
      </div>
    </div>
  );
}

export default SampleMenuItem;
