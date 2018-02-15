import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import PathoStatComponent from './Pathostat';
import PathoScopeComponent from './Pathoscope';
import CometsComponent from './Comets';

function ToolsComponent(): JSX.Element {
  return (
    <Grid container={true}>
      <Grid.Row>
        <CometsComponent />
        <PathoStatComponent />
        <PathoScopeComponent />
      </Grid.Row>
    </Grid>
  );
}

export default ToolsComponent;