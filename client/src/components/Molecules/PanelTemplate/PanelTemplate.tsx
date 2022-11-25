import {
  Container,
  Header,
  UpperTable,
  StyledButton,
} from './PanelTemplate.styles';
import { PanelTemplateProps } from 'models';

function PanelTemplate(props: PanelTemplateProps) {
  const { header, hasButton, hasSelect, children } = props;

  const _onButtonClick = () => {
    console.log('zaa');
  };

  return (
    <Container>
      <UpperTable>
        <Header>{header}</Header>
        {hasButton && <StyledButton text="View All" onClick={_onButtonClick} />}
      </UpperTable>
      {children}
    </Container>
  );
}

export default PanelTemplate;
