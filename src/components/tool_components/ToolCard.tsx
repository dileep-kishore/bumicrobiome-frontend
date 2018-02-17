import * as React from 'react';
import { Card, Reveal, Button } from 'semantic-ui-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import ToolDescComponent from './ToolDescription';
import ToolTabComponent, { ToolTabExProps, ToolTabCustomProps } from './ToolTabs';
import ToolCardExtra, { ToolCardExtraProps } from './ToolCardExtra';
import { ExFormData, CustomFormData } from './ToolForm';
import Waypoint from 'react-waypoint';

export interface ToolCardProps {
  active?: boolean;
  disabled?: boolean;
  name: string;
  img: string;
  description: string;
  ex_active: boolean;
  ex_form_data: ExFormData[];
  custom_active: boolean;
  custom_form_data: CustomFormData[];
  portal: JSX.Element;
  links: ToolCardExtraProps;
}

export interface ToolCardState {
  active: boolean;
  disabled: boolean;
  cardClass: string;
}

@observer
class ToolCardComponent extends React.Component<ToolCardProps, ToolCardState> {
  @observable active: boolean;
  @observable disabled: boolean;
  @observable cardClass: string = 'hvr-glow';
  exData: ToolTabExProps;
  customData: ToolTabCustomProps;

  constructor(props: ToolCardProps) {
    super(props);
    const { active = false, disabled = true } = this.props;
    const { name, ex_active, ex_form_data, custom_active, custom_form_data, portal } = this.props;
    this.exData = {name: name, active: ex_active, portal: portal, form_data: ex_form_data};
    this.customData = {name: name, active: custom_active, portal: portal, form_data: custom_form_data};
    const cardClass = this.cardClass;
    this.state = { active, disabled, cardClass };
    this.active = active;
    this.disabled = disabled;
    this.changeRevealState = this.changeRevealState.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  changeRevealState() {
    this.active = !this.active;
    this.disabled = !this.disabled;
  }

  handleEnter() {
    this.cardClass = 'hvr-glow animated slideInRight';
  }

  handleExit() {
    this.cardClass = 'hvr-glow animated slideOutLeft';
  }

  render() {
    return (
      <Card fluid={true} className={this.cardClass}>
        <Waypoint
          onEnter={this.handleEnter}
          onLeave={this.handleExit}
          topOffset="5%"
          bottomOffset="5%"
        >
        <div>
          <Reveal
            animated="move up"
            active={this.active}
            disabled={this.disabled}
            style={{whiteSpace: 'normal'}}
          >
            <Reveal.Content visible={true} style={{backgroundColor: 'white'}}>
              <Card.Content>
                <ToolDescComponent
                  name={this.props.name}
                  img={this.props.img}
                  description={this.props.description}
                  onClick={this.changeRevealState}
                />
              </Card.Content>
            </Reveal.Content>
            <Reveal.Content hidden={true}>
              <Card.Content>
                <Button
                  negative={true}
                  floated="right"
                  icon="close"
                  onClick={this.changeRevealState}
                />
                <ToolTabComponent ex_data={this.exData} custom_data={this.customData} />
              </Card.Content>
            </Reveal.Content>
          </Reveal>
        </div>
        </Waypoint>
        <ToolCardExtra
          github_link={this.props.links.github_link}
          download_link={this.props.links.download_link}
        />
      </Card>
    );
  }
}

export default ToolCardComponent;