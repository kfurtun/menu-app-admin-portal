interface Props {
  selectList: string[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select(props: Props): JSX.Element {
  const { selectList, handleChange } = props;

  return (
    <select onChange={handleChange}>
      {selectList.map((item, index) => (
        <option key={index}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </option>
      ))}
    </select>
  );
}

export default Select;
