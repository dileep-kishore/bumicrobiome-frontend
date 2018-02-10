import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { css } from 'react-emotion';

interface MenuItem {
  name: string;
  position: 'left' | 'right';
}

const MenuItems: MenuItem[] = [
  { name: 'home', position: 'left' },
  { name: 'tools', position: 'left' },
  { name: 'login', position: 'right' },
  { name: 'signup', position: 'right'}
];

export interface MenuProps {

}

const pointer = css`
  cursor: pointer;
`;

@observer
class MenuComponent extends React.Component<MenuProps, {}> {
  @observable activeItem = 'home';
  leftMenuElems: JSX.Element[];
  rightMenuElems: JSX.Element[];

  constructor(props: MenuProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.menuItemCreator = this.menuItemCreator.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLAnchorElement>, { name }: { name: string }) {
    this.activeItem = name;
  }

  menuItemCreator(i: MenuItem, ind: number) {
    return (
      <Menu.Item
        key={ind}
        name={i.name}
        active={this.activeItem === i.name}
        onMouseEnter={() => { this.activeItem = i.name; }}
        className={pointer}
      >
        {i.name.toUpperCase()}
      </Menu.Item>
    );
  }

  render(): JSX.Element {
    const leftMenuElems = MenuItems.filter((x: MenuItem) => x.position === 'left')
                                  .map(this.menuItemCreator);
    const rightMenuElems = MenuItems.filter((x: MenuItem) => x.position === 'right')
                                  .map(this.menuItemCreator);
    return (
      <Menu pointing={true} secondary={true} >
        {leftMenuElems}
        <Menu.Menu position="right">
          {rightMenuElems}
        </Menu.Menu>
      </Menu>
    );
  }

}

export default MenuComponent;