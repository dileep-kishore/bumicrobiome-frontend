import * as React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { css } from 'react-emotion';
import ToolsDropdownComponent, { ToolItem } from './ToolsDropdown';

export interface MenuItem {
  name: string;
  position: 'left' | 'right';
  color: 'red' | 'green' | 'yellow' | 'purple';
}

export interface MenuProps {
  menuItems: MenuItem[];
  activeItem: string;
}

const pointer = css`
  cursor: pointer;
`;

const ToolItems: ToolItem[] = [
  { name: 'Pathostat', link: '' },
  { name: 'Pathoscope', link: '' },
  { name: 'Comets', link: '' },
  { name: 'Mind', link: '' }
];

@observer
class MenuComponent extends React.Component<MenuProps, {}> {
  @observable activeItem = this.props.activeItem;

  constructor(props: MenuProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.menuItemCreator = this.menuItemCreator.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLAnchorElement>, { name }: { name: string }) {
    this.activeItem = name;
  }

  menuItemCreator(i: MenuItem, ind: number) {
    if (i.name === 'tools') {
    return (
      <ToolsDropdownComponent
        text={i.name.toUpperCase()}
        color={i.color}
        toolItems={ToolItems}
        onMouseEnter={() => { this.activeItem = i.name; }}
        onMouseLeave={() => { this.activeItem = 'home'; }}
      />
    );
    } else {
      return (
        <Menu.Item
          key={ind}
          name={i.name}
          active={this.activeItem === i.name}
          color={i.color}
          onMouseEnter={() => { this.activeItem = i.name; }}
          onMouseLeave={() => { this.activeItem = 'home'; }}
          className={pointer}
        >
          {i.name.toUpperCase()}
        </Menu.Item>
      );
    }
  }

  render(): JSX.Element {
    const leftMenuElems = this.props.menuItems
                          .filter((x: MenuItem) => x.position === 'left')
                          .map(this.menuItemCreator);
    const rightMenuElems = this.props.menuItems
                           .filter((x: MenuItem) => x.position === 'right')
                           .map(this.menuItemCreator);
    return (
      <Segment inverted={true}>
        <Menu
          pointing={true}
          secondary={true}
          attached="top"
          borderless={true}
          size="large"
          stackable={true}
          inverted={true}
        >
          {leftMenuElems}
          <Menu.Menu position="right">
            {rightMenuElems}
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }

}

export default MenuComponent;