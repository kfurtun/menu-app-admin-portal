import React from 'react';
import { useAppSelector } from 'redux/hooks';
import Ingredients from 'components/Molecules/AddIngredient';
// import { showSection } from '../../redux/states/sectionState';
import Section from 'components/Molecules/Section';
// import { proxy } from 'constants/constants';
// const axios = require('axios').default;

function App() {
  const showSections = useAppSelector((state) => state.sections);
  const showIngredients = useAppSelector((state) => state.ingredients);
  console.log(showIngredients);
  // const dispatch = useAppDispatch();
  // const [state, setState] = React.useState<string[]>([]);

  // React.useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get(`${proxy}/`);
  //     setState(data);
  //   };
  //   getData();
  // }, []);

  return (
    <div>
      <Section
        show={showSections.ingredients}
        title="Ingredients"
        type="ingredients"
      >
        <Ingredients />
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
