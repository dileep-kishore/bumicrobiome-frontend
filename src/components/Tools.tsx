import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import PathostatComponent from './Pathostat';

function ToolsComponent(): JSX.Element {
  return (
    <Grid container={true}>
      <Grid.Row>
        <PathostatComponent/>
      </Grid.Row>
    </Grid>
  );
}

export default ToolsComponent;