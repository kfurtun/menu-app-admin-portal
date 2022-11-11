import LineChart from 'components/Atoms/Charts/LineChart';
import Icon from 'components/Atoms/Icon';
import {
  Container,
  InfoContainer,
  MoneyInfo,
  PercentageInfo,
} from './LineChartBox.styles';

interface Props {
  borderColor: string;
  backgroundColor: string;
}

function LineChartBox(props: Props): JSX.Element {
  const { borderColor, backgroundColor } = props;
  return (
    <Container>
      <InfoContainer>
        <MoneyInfo>
          <span>Sells Graph</span>
          <span>$8,451</span>
        </MoneyInfo>
        <PercentageInfo backgroundColor={borderColor}>
          <Icon name="upArrow" width={14} fontSize={14} />
          <span>5%</span>
        </PercentageInfo>
      </InfoContainer>
      <LineChart borderColor={borderColor} backgroundColor={backgroundColor} />
    </Container>
  );
}

export default LineChartBox;
