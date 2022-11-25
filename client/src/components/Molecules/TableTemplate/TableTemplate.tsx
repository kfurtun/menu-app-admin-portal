import { Table, Tr, Th } from './TableTemplate.styles';

interface Props {
  header: string[];
  children: React.ReactNode;
}
function TableTemplate({ header, children }: Props) {
  return (
    <Table>
      <thead>
        <Tr>
          {header.map((head) => (
            <Th key={head}>{head}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
}

export default TableTemplate;
