import * as React from 'react';
import { Card, Reveal } from 'semantic-ui-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import ToolDescComponent from './ToolDescription';
import ToolTabComponent, { ToolTabExProps, ToolTabCustomProps } from './ToolTabs';
import ToolCardExtra, { ToolCardExtraProps } from './ToolCardExtra';
import { ExFormData, CustomFormData } from './ToolForm';

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
}

@observer
class ToolCardComponent extends React.Component<ToolCardProps, ToolCardState> {
  @observable active: boolean;
  @observable disabled: boolean;
  exData: ToolTabExProps;
  customData: ToolTabCustomProps;

  constructor(props: ToolCardProps) {
    super(props);
    const { active = false, disabled = true } = this.props;
    const { name, ex_active, ex_form_data, custom_active, custom_form_data, portal } = this.props;
    this.exData = {name: name, active: ex_active, portal: portal, form_data: ex_form_data};
    this.customData = {name: name, active: custom_active, portal: portal, form_data: custom_form_data};
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
                name={this.props.name}
                img={this.props.img}
                description={this.props.description}
                onClick={this.changeRevealState}
              />
            </Card.Content>
          </Reveal.Content>
          <Reveal.Content hidden={true}>
            <Card.Content>
              <ToolTabComponent ex_data={this.exData} custom_data={this.customData} />
            </Card.Content>
          </Reveal.Content>
        </Reveal>
        <ToolCardExtra
          github_link={this.props.links.github_link}
          download_link={this.props.links.download_link}
        />
      </Card>

    );
  }
}

export default ToolCardComponent;