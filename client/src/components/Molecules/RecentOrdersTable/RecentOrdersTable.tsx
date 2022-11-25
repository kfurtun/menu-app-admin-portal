import PanelTemplate from 'components/Molecules/PanelTemplate';
import { LowerTable } from './RecentOrdersTable.styles';
import { PanelTemplateProps } from 'models';
import TableTemplate from 'components/Molecules/TableTemplate';
import { Body as TableBody } from './Table';
import Table from './Table';

function RecentOrdersTable(): JSX.Element {
  const panelTemplateProps: PanelTemplateProps = {
    header: 'recent orders requested',
    hasButton: true,
  };

  const tableHeader: string[] = ['Food Item', 'Price', 'Product ID'];
  const tableBody: TableBody[] = [
    { name: 'Pizza', price: '$19.99', id: 123123, img: '' },
    { name: 'French Fries', price: '$14.59', id: 12356, img: '' },
    { name: 'Multigrain Hot Cereal', price: '$25.22', id: 123512316, img: '' },
  ];
  return (
    <PanelTemplate {...panelTemplateProps}>
      <LowerTable>
        <TableTemplate header={tableHeader}>
          <Table body={tableBody} />
        </TableTemplate>
      </LowerTable>
    </PanelTemplate>
  );
}

export default RecentOrdersTable;
