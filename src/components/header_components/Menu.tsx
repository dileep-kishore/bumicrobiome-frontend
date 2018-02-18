import * as React from 'react';
import { Menu, Image, Button } from 'semantic-ui-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { css } from 'react-emotion';
import ToolsDropdownComponent, { ToolItem } from './ToolsDropdown';

export interface MenuItem {
  name: string;
  position: 'left' | 'right';
  color: 'red' | 'green' | 'yellow' | 'purple';
}

export interface MenuBarProps {
  inverted: boolean;
  size: 'tiny' | 'small' | 'large' | 'huge';
  borderless: boolean;
  attached: boolean | 'top' | 'bottom';
  secondary: boolean;
}

export interface MenuProps {
  menuItems: MenuItem[];
  activeItem: string;
  menuStyle: object;
  menuState: MenuBarProps;
}

const menuTransition = css`
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
`;

const pointer = css`
  cursor: pointer;
`;

const noPadding = css`
  padding: 0;
`;

const animationDelay = css`
  animation-delay: 1s;
  animation-duration: 2s;
`;

const ToolItems: ToolItem[] = [
  { name: 'pathostat', link: '' },
  { name: 'pathoscope', link: '' },
  { name: 'comets', link: '' },
  { name: 'mind', link: '' }
];

@observer
class MenuComponent extends React.Component<MenuProps, {}> {
  @observable activeItem = this.props.activeItem;

  constructor(props: MenuProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.menuItemCreator = this.menuItemCreator.bind(this);
    this.dropDownSelect = this.dropDownSelect.bind(this);
    this.buttonCreator = this.buttonCreator.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLAnchorElement>, { name }: { name: string }) {
    this.activeItem = name;
  }

  dropDownSelect(i: MenuItem) {
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
      return i.name.toUpperCase();
    }
  }

  menuItemCreator(i: MenuItem, ind: number) {
    return (
      <Menu.Item
        key={ind}
        name={i.name}
        active={this.activeItem === i.name}
        color={i.color}
        onMouseEnter={() => { this.activeItem = i.name; }}
        onMouseLeave={() => { this.activeItem = 'home'; }}
        className={i.name !== 'tools' ?  pointer : `${pointer} ${noPadding}`}
      >
        {this.dropDownSelect(i)}
      </Menu.Item>
    );
  }

  buttonCreator(i: MenuItem, ind: number) {
    return (
      <Button
        key={ind}
        inverted={true}
        color={i.color}
      >
        {i.name.toUpperCase()}
      </Button>
    );
  }

  render(): JSX.Element {
    const { menuState, menuStyle } = this.props;
    const leftMenuElems = this.props.menuItems
                          .filter((x: MenuItem) => x.position === 'left')
                          .map(this.menuItemCreator);
    const rightMenuElems = this.props.menuItems
                           .filter((x: MenuItem) => x.position === 'right')
                           .map(this.buttonCreator);
    return (
        <Menu
          {...menuState}
          pointing={true}
          stackable={true}
          className={menuTransition}
          style={menuStyle}
        >
          <Menu.Item style={{paddingBottom: 2, paddingLeft: 0}}>
            <a href="http://www.bu.edu">
              <Image src="https://www.bu.edu/cdn/images/logos/subbrand49x35.png" fluid={true}/>
            </a>
          </Menu.Item>
          {leftMenuElems}
          <Menu.Menu position="right">
            <Button.Group className={`${animationDelay} animated flash`}>
              {rightMenuElems[0]}
              {rightMenuElems.slice(1).map((e: JSX.Element, ind: number) => (
                [<Button.Or key={ind}/>, e]
              ))}
            </Button.Group>
          </Menu.Menu>
        </Menu>
    );
  }

}

export default MenuComponent;