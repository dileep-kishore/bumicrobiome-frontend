import * as React from 'react';
import { Form, TransitionablePortal, Button, Segment, Header, Grid } from 'semantic-ui-react';

export interface ExFormData {
  label: string;
  placeholder: string;
}

export interface CustomFormData {
  label: string;
  placeholder: string;
}

export interface ToolFormExProps {
  name: string;
  portal: JSX.Element;
  form_data: ExFormData[];
}

export interface ToolFormCustomProps {
  name: string;
  portal: JSX.Element;
  form_data: CustomFormData[];
}

export function ToolFormExComponent(props: ToolFormExProps) {
  const { name, portal, form_data } = props;
  const formInputs = form_data.map((x: ExFormData, ind: number) => (
    <Form.Input
      key={ind}
      fluid={true}
      label={x.label}
      placeholder={x.placeholder}
      readOnly={true}
    />
  ));
  return (
    <Form>
      <Form.Group widths="equal">
        {formInputs}
      </Form.Group>
      <TransitionablePortal
        transition={{ animation: 'fly up', duration: 500 }}
        closeOnTriggerClick={true}
        openOnTriggerClick={true}
        trigger={(
          <div className="animated flash" >
            <Button size="big" type="submit" > Run example </Button>
          </div>
        )}
      >
        <Segment
          raised={true}
          style={{ left: '12%', position: 'fixed', top: '5%', zIndex: 1000,
                    height: '90vh', width: '80vw',
                    boxShadow: `0 0 0 1600px rgba(0,0,0,0.65)` }}
        >
          <Grid style={{padding: 10}} stretched={true} >
            <Grid.Row >
              <Header as="h1" dividing={true} > {name} </Header>
            </Grid.Row>
          </Grid>
          {portal}
        </Segment>
      </TransitionablePortal>
    </Form>
  );
}

export function ToolFormCustomComponent(props: ToolFormCustomProps) {
  const { name, portal, form_data } = props;
  const formInputs = form_data.map((x: CustomFormData, ind: number) => (
    <Form.Input
      key={ind}
      fluid={true}
      label={x.label}
      placeholder={x.placeholder}
    />
  ));
  return (
    <Form>
      <Form.Group widths="equal">
        {formInputs}
      </Form.Group>
      <TransitionablePortal
        transition={{ animation: 'fly up', duration: 500 }}
        closeOnTriggerClick={true}
        openOnTriggerClick={true}
        trigger={(
          <div className="animated flash" >
            <Button size="big" type="submit" > Run App </Button>
          </div>
        )}
      >
        <Segment
          raised={true}
          style={{ left: '12%', position: 'fixed', top: '5%', zIndex: 1000,
                    height: '90vh', width: '80vw',
                    boxShadow: `0 0 0 1600px rgba(0,0,0,0.65)` }}
        >
          <Grid style={{padding: 10}} >
            <Grid.Row >
              <Header as="h1" dividing={true} > {name} </Header>
            </Grid.Row>
          </Grid>
          {portal}
        </Segment>
      </TransitionablePortal>
    </Form>
  );
}