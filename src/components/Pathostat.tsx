import * as React from 'react';
import {
  Card,
  Header,
  Grid,
  Icon,
  Reveal,
  Button,
  Tab,
  Label,
  Form,
  Segment,
  TransitionablePortal,
  Dimmer
 } from 'semantic-ui-react';
import ToolDescComponent from './tool_components/ToolDescription';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const description = `PathoStat is a R package that performs Statistical Microbiome Analysis
on metagenomics results from sequencing data samples. In particular,
it supports analyses on the PathoScope generated report files.
PathoStat provides various functionalities including Relative Abundance
charts, Diversity estimates and plots, tests of Differential Abundance,
Time Series visualization, and Core OTU analysis.`;

const img = require('../images/pathostat_image.png');

const name = 'PathoStat';

export interface PathostatProps {
  active?: boolean;
  disabled?: boolean;
}

export interface PathostatState {
  active: boolean;
  disabled: boolean;
}

interface FormProps {
  panes: object;
}

const panes = [
  { menuItem: 'Run Example', render: () => (
    <Tab.Pane>
      <Header as="h2" dividing={true} >
        Run the app with an example dataset
      </Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid={true} label="OTU data" placeholder="otu_data.tsv" readOnly={true}/>
          <Form.Input fluid={true} label="Taxonomy data" placeholder="tax_data.tsv" readOnly={true} />
          <Form.Input fluid={true} label="Metadata" placeholder="metadata.tsv" readOnly={true} />
        </Form.Group>
        <TransitionablePortal
          closeOnTriggerClick={true}
          openOnTriggerClick={true}
          trigger={(
            <div
              className="animated flash"
            >
              <Button
                size="big"
                type="submit"
              >
                Run example
              </Button>
            </div>
          )}
        >
          <Segment
            raised={true}
            style={{ left: '12%', position: 'fixed', top: '5%', zIndex: 1000,
                     height: '90vh', width: '80vw' }}
          >
            <Header as="h1" dividing={true} > PathoStat </Header>
            <iframe src="http://192.168.99.100:3838" width="100%" height="90%" />
          </Segment>
        </TransitionablePortal>
      </Form>
    </Tab.Pane>
  )},
  { menuItem: 'Custom Data', render: () => (
    <Tab.Pane>
      <Dimmer.Dimmable dimmed={true} blurring={true} >
        <Dimmer simple={true} inverted={true} >
          <Header as="h2" icon={true}>
            <Icon name="info circle" />
            Under Construction!
          </Header>
        </Dimmer>
        <Header as="h2" dividing={true} >
          Run app with custom OTU table
        </Header>
          <Form>
            <Form.Group widths="equal">
              <Form.Input fluid={true} label="OTU data" placeholder="otu_data.tsv" readOnly={true}/>
              <Form.Input fluid={true} label="Taxonomy data" placeholder="tax_data.tsv" readOnly={true} />
              <Form.Input fluid={true} label="Metadata" placeholder="metadata.tsv" readOnly={true} />
            </Form.Group>
            <Button size="big" type="submit"> Run App </Button>
          </Form>
      </Dimmer.Dimmable>
    </Tab.Pane>
  )},
];

function PathostatForm(props: FormProps): JSX.Element {
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

@observer
class PathostatComponent extends React.Component<PathostatProps, PathostatState> {
  @observable active: boolean;
  @observable disabled: boolean;

  constructor(props: PathostatProps) {
    super(props);
    const { active = false, disabled = true } = this.props;
    this.state = { active, disabled };
    this.active = active;
    this.disabled = disabled;
    this.changeRevealState = this.changeRevealState.bind(this);
  }

  changeRevealState() {
    this.active = !this.active;
    this.disabled = !this.disabled;
    setTimeout(() => {
      this.active = !this.active;
    },         3000);
    setTimeout(() => {
      this.active = false;
      this.disabled = true;
    },         10000);
  }

  render(): JSX.Element {
    return (
      <Card fluid={true} className="hvr-glow">
        <Reveal
          animated="move up"
          active={this.active}
          disabled={this.disabled}
          style={{whiteSpace: 'normal'}}
        >
          <Reveal.Content visible={true} style={{backgroundColor: 'white'}}>
            <Card.Content>
              <ToolDescComponent
                name={name}
                img={img}
                description={description}
                onClick={this.changeRevealState}
              />
            </Card.Content>
          </Reveal.Content>
          <Reveal.Content hidden={true}>
            <Card.Content>
              <PathostatForm panes={{}}/>
            </Card.Content>
          </Reveal.Content>
        </Reveal>
        <Card.Content extra={true}>
          <Grid columns={2} divided={true}>
            <Grid.Row >
              <Grid.Column >
                <Label
                  as="a"
                  ribbon={true}
                  color="black"
                  href="https://github.com/mani2012/PathoStat"
                >
                  <Icon name="github"/>
                  Link to Github page
                </Label>
              </Grid.Column>
              <Grid.Column >
                <Label
                  as="a"
                  ribbon="right"
                  color="black"
                  href="http://bioconductor.org/packages/release/bioc/html/PathoStat.html"
                >
                  <Icon name="download"/>
                  Link to download Pathostat
                </Label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default PathostatComponent;