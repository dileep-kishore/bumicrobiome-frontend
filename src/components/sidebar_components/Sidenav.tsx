import * as React from 'react';
import { Input, Menu, Rail, Sticky } from 'semantic-ui-react';
const capitalize = require('lodash/capitalize');

interface MenuItemType {
  name: string;
}

export interface SidenavProps {
  contextRef?: HTMLDivElement | null | undefined;
  menuData: MenuItemType[];
}

function SidenavComponent(props: SidenavProps) {
  const { contextRef, menuData } = props;
  const menuItems = menuData.map((x: MenuItemType, ind: number) => (
    <Menu.Item key={ind} name={x.name} link={true} color="red" >
      {capitalize(x.name)}
    </Menu.Item>
  ));
  return (
    <Rail close={true} position="left">
      <Sticky active={true} context={contextRef ? contextRef : {}}>
        <Menu vertical={true} pointing={true} inverted={true} >
          <Menu.Item active={true} >
            <Input placeholder="Search..." fluid={true} action={{ icon: 'search' }} />
          </Menu.Item>
          {menuItems}
        </Menu>
      </Sticky>
    </Rail>
  );
}

export default SidenavComponent;