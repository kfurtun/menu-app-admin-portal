import { useAppSelector } from 'redux/hooks';

function IngredientsList(): JSX.Element {
  const ingredientsList = useAppSelector((state) => state.ingredients);
  return (
    <div>
      {Object.entries(ingredientsList).map(([key, value], index) => (
        <div key={index}></div>
      ))}
    </div>
  );
}

export default IngredientsList;
