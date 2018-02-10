import * as React from 'react';

enum MenuItems {
  Home,
  Tools,
  Login
}

export interface MenuState {
  activeItem: MenuItems;
}

export interface MenuProps {

}

class MenuComponent extends React.Component<MenuProps, MenuState> {
  state = { activeItem: MenuItems.Home };

  render(): JSX.Element {
    return (
      <div>
        Menu
      </div>
    );
  }

}

export default MenuComponent;