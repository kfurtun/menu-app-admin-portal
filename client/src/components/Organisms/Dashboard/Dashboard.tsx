import LineChartBox from 'components/Molecules/LineChartBox';
import PageTemplate from '../PageTemplate';
import { Container, ChartContainer } from './Dashboard.styles';
import { roots } from 'theme/global';

function Dashboard() {
  return (
    <PageTemplate>
      <Container>
        <ChartContainer>
          {' '}
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
      </Container>
    </PageTemplate>
  );
}

export default Dashboard;
