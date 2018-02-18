import * as React from 'react';
import { Sidebar, Button, Menu, Input, Segment } from 'semantic-ui-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
const capitalize = require('lodash/capitalize');
import { css, keyframes } from 'react-emotion';
import ToolsComponent from '../Tools';

interface MenuItemType {
  name: string;
}

export interface SidenavProps {
  menuData: MenuItemType[];
}

export interface SidenavState {
  open: boolean;
  animation: string;
}

const BStyle = css`
  position: fixed;
  left: -2%;
  top: 60%;
  z-index: 2;
  transform: rotate(90deg);
`;

const move = keyframes`
  0% {
    left: -2%;
  }

  100% {
    left: 6.1%;
  }
`;

const moveRight = css`
  animation: 0.5s ${move};
  animation-fill-mode: forwards;
`;

const moveLeft = css`
  animation: 0.5s reverse ${move};
`;

@observer
class SidenavComponent extends React.Component<SidenavProps, SidenavState> {
  menuData: MenuItemType[];
  @observable open: boolean = false;
  @observable animation: string = '';

  constructor(props: SidenavProps) {
    super(props);
    const { menuData } = props;
    this.menuData = menuData;
    this.state = { open: this.open, animation: this.animation };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.open = !this.open;
    this.animation = this.open ? moveRight : moveLeft;
  }

  render(): JSX.Element {
    const menuItems = this.menuData.map((x: MenuItemType, ind: number) => (
      <Menu.Item key={ind} name={x.name} link={true} color="red" >
        {capitalize(x.name)}
      </Menu.Item>
    ));
    return (
      <div >
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            visible={this.open}
            icon="labeled"
            vertical={true}
            inverted={true}
          >
            <Menu.Item active={true} >
              <Input placeholder="Search..." fluid={true} action={{ icon: 'search' }} />
            </Menu.Item>
            {menuItems}
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic={true}>
              <Button
                className={`${BStyle} ${this.animation}`}
                onClick={this.toggleVisibility}
              >
                Navigation
              </Button>
              <ToolsComponent/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default SidenavComponent;