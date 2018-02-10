import * as React from 'react';
import './Header.css';
import { Grid, Header } from 'semantic-ui-react';
import styled from 'react-emotion';

const MyHeader = ({ className, children }: { className?: string, children: string }) => (
  <Header as="h1" size="large" dividing={true} className={className}>
    {children}
  </Header>
);

const StyledHeader = styled(MyHeader)`
  color: palevioletred;
  background: red;
`;

const DivWithShorthand = styled.div`
	color: hotpink;
`;

function HeaderComponent(): JSX.Element {
  return (
    <Grid container={true}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1" size="large" dividing={true}> Microbiome Initiative </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <StyledHeader> Microbiome Initiative </StyledHeader>
        </Grid.Column>
      </Grid.Row>
      <DivWithShorthand>
        Hello
      </DivWithShorthand>
    </Grid>
  );
}

export default HeaderComponent;