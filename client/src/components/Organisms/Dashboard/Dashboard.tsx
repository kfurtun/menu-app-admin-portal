import LineChartBox from 'components/Molecules/LineChartBox';
import PageTemplate from '../PageTemplate';
import {
  Container,
  ChartContainer,
  OrdersAndRevenueContainer,
} from './Dashboard.styles';
import { roots } from 'theme/global';
import RecentOrdersTable from 'components/Molecules/RecentOrdersTable';

function Dashboard() {
  return (
    <PageTemplate>
      <Container>
        <ChartContainer>
          <LineChartBox
            borderColor={roots.primaryItemColor as string}
            backgroundColor={roots.primaryItemColor as string}
          />
          <LineChartBox
            borderColor={roots.primaryItemColor as string}
            backgroundColor={roots.primaryItemColor as string}
          />
          <LineChartBox
            borderColor={roots.primaryItemColor as string}
            backgroundColor={roots.primaryItemColor as string}
          />
          <LineChartBox
            borderColor={roots.primaryItemColor as string}
            backgroundColor={roots.primaryItemColor as string}
          />
        </ChartContainer>
        <OrdersAndRevenueContainer>
          <RecentOrdersTable />
          <RecentOrdersTable />
        </OrdersAndRevenueContainer>
      </Container>
    </PageTemplate>
  );
}

export default Dashboard;
