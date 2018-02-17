import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import PathoStatComponent from './tools/Pathostat';
import PathoScopeComponent from './tools/Pathoscope';
import CometsComponent from './tools/Comets';
import MindComponent from './tools/Mind';

function ToolsComponent(): JSX.Element {
  return (
    <Grid container={true} >
      <Grid.Row >
        <CometsComponent />
        <MindComponent />
        <PathoStatComponent />
        <PathoScopeComponent />
      </Grid.Row>
    </Grid>
  );
}

export default ToolsComponent;