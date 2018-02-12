import * as React from 'react';
import { css } from 'react-emotion';
import { Grid, Header, Segment, Icon } from 'semantic-ui-react';

const bgStyle = css`
  background: #232526;
  margin-top: 20px;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
`;

function FooterComponent(): JSX.Element {
  return (
    <Segment
      style={{
        background: `linear-gradient(to right, #414345, #232526)`,
        marginTop: '20px'
      }}
      className={bgStyle}
      attached="bottom"
      inverted={true}
    >
      <Grid container={true}>
        <Grid.Row style={{paddingBottom: 0}}>
          <Grid.Column>
            <Header as="h3" inverted={true}> Boston University </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h3" inverted={true}>
              <a href="http://www.bu.edu/segrelab/"> Segre Lab </a>
              |
              <a href="http://www.bumc.bu.edu/compbiomed/people/faculty/w-evan-johnson/"> Johnson Lab </a>
            </Header>
            <Icon name="copyright"/> Copyright Segre Lab, Johnson Lab
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default FooterComponent;