import * as React from 'react';
import ToolsComponent from './Tools';
// import SidenavComponent from './sidebar_components/Sidenav';
import { Grid } from 'semantic-ui-react';

export interface BodyProps {

}

// tslint:disable-next-line:no-any
// type Ref = string | ((instance: HTMLDivElement | null) => any) | undefined;

export interface BodyState {

}

// const names = [
//   'comets', 'mind', 'pathostat', 'pathoscope'
// ];

class BodyComponent extends React.Component<BodyProps, BodyState> {

  constructor(props: BodyProps) {
    super(props);
  }

  render() {
    // const menuData = names.map((x: string) => ({name: x}));
    return (
        <Grid centered={true} stretched={true} >
          <Grid.Row>
            <Grid.Column >
              <ToolsComponent />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default BodyComponent;