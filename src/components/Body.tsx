import * as React from 'react';
import ToolsComponent from './Tools';
import SidenavComponent from './sidebar_components/Sidenav';
import { Grid, Segment } from 'semantic-ui-react';

export interface BodyProps {

}

// tslint:disable-next-line:no-any
// type Ref = string | ((instance: HTMLDivElement | null) => any) | undefined;

export interface BodyState {
  contextRef?: HTMLDivElement | null | undefined;
}

const names = [
  'comets', 'mind', 'pathostat', 'pathoscope'
];

class BodyComponent extends React.Component<BodyProps, BodyState> {
  state = {contextRef: undefined};
  ctrl: HTMLDivElement | null | undefined;

  constructor(props: BodyProps) {
    super(props);
  }

  render() {
    const menuData = names.map((x: string) => ({name: x}));
    return (
      <div ref={(contextRef) => { this.ctrl = contextRef; }}>
        <Grid centered={true} columns={12}>
          <Grid.Row>
          <Segment>
            <Grid.Column >
              <ToolsComponent />
            </Grid.Column>
            <Grid.Column >
              <SidenavComponent contextRef={this.ctrl} menuData={menuData} />
            </Grid.Column>
          </Segment>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default BodyComponent;