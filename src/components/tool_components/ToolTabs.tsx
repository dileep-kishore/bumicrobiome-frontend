import * as React from 'react';
import { Tab, Header, Dimmer, Icon, Grid } from 'semantic-ui-react';
import { ExFormData, ToolFormExComponent, ToolFormCustomComponent } from './ToolForm';

export interface ToolTabExProps {
  name: string;
  active: boolean;
  portal: JSX.Element;
  form_data: ExFormData[];
}

export interface ToolTabCustomProps {
  name: string;
  active: boolean;
  portal: JSX.Element;
  form_data: ExFormData[];
}

export interface ToolTabProps {
  ex_data: ToolTabExProps;
  custom_data: ToolTabCustomProps;
  // panes: {menuItem: string, render: () => JSX.Element}[];
}

function ToolTabExComponent(props: ToolTabExProps) {
  const { name, active, portal, form_data } = props;
  return (
    <Tab.Pane attached={false} >
      <Dimmer.Dimmable dimmed={!active} blurring={!active} >
        <Dimmer active={!active} simple={true} inverted={true} >
          <Header as="h2" icon={true}>
            <Icon name="info circle" />
            Under Construction!
          </Header>
        </Dimmer>
        <Header as="h2" dividing={true} >
          Run the app with an example dataset
        </Header>
        <ToolFormExComponent
          name={name}
          portal={portal}
          form_data={form_data}
        />
      </Dimmer.Dimmable>
    </Tab.Pane>
  );
}

function ToolTabCustomComponent(props: ToolTabCustomProps) {
  const { name, active, portal, form_data } = props;
  return (
    <Tab.Pane>
      <Dimmer.Dimmable dimmed={!active} blurring={!active} >
        <Dimmer active={!active} simple={true} inverted={true} >
          <Header as="h2" icon={true}>
            <Icon name="info circle" />
            Under Construction!
          </Header>
        </Dimmer>
        <Header as="h2" dividing={true} >
          Run app with custom OTU table
        </Header>
        <ToolFormCustomComponent
          name={name}
          portal={portal}
          form_data={form_data}
        />
      </Dimmer.Dimmable>
    </Tab.Pane>
  );
}

function ToolTabComponent(props: ToolTabProps) {
  const { ex_data, custom_data } = props;
  const panes = [
    { menuItem: 'Run Example', render: () => (
        <ToolTabExComponent
          key="example"
          name={ex_data.name}
          active={ex_data.active}
          portal={ex_data.portal}
          form_data={ex_data.form_data}
        />
    )},
    { menuItem: 'Custom Data', render: () => (
        <ToolTabCustomComponent
          key="custom"
          name={custom_data.name}
          active={custom_data.active}
          portal={custom_data.portal}
          form_data={custom_data.form_data}
        />
    )},
  ];
  return (
    <Grid container={true}>
      <Grid.Row stretched={true}>
        <Grid.Column>
          <Tab size="big" menu={{ fluid: true, pointing: true }} panes={panes} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ToolTabComponent;