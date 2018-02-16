import * as React from 'react';
import { Input, Menu, Rail, Sticky } from 'semantic-ui-react';
const capitalize = require('lodash/capitalize');

interface MenuItemType {
  name: string;
  onClick: () => void;
}

export interface SidenavProps {
  contextRef: object;
  menuData: MenuItemType[];
}

function SidenavComponent(props: SidenavProps) {
  const { contextRef, menuData } = props;
  const menuItems = menuData.map((x: MenuItemType, ind: number) => (
    <Menu.Item name={x.name} onClick={x.onClick}>
      {capitalize(x.name)}
    </Menu.Item>
  ));
  return (
    <Rail position="left">
      <Sticky context={contextRef}>
        <Menu vertical={true}>
          <Menu.Item>
            <Input placeholder="Search..." />
          </Menu.Item>
          {menuItems}
        </Menu>
      </Sticky>
    </Rail>
  );
}

export default SidenavComponent;