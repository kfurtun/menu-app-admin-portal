import { Tr, Td } from './Table.styles';

export interface Body {
  [key: string]: string | number;
}

interface Props {
  body: Body[];
}

function Table({ body }: Props): JSX.Element {
  return (
    <>
      {body.map((item) => (
        <Tr key={item.id}>
          <Td>
            <span style={{ width: '30px' }}>{item.img}</span>
            <span>{item.name}</span>
          </Td>
          <Td>{item.price}</Td>
          <Td>{item.id}</Td>
        </Tr>
      ))}
    </>
  );
}

export default Table;
