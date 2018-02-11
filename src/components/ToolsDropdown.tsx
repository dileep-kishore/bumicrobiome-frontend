import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';

export interface ToolItem {
  name: string;
  link: string;
}

export interface ToolsDropdownProps {
  text: string;
  color: 'red' | 'green' | 'yellow' | 'purple';
  toolItems: ToolItem[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ToolsDropdownComponent(props: ToolsDropdownProps): JSX.Element {
  const dropdownItems = props.toolItems.map((x: ToolItem) => (
    <Dropdown.Item> {x.name} </Dropdown.Item>
  ));
  return (
    <Dropdown
      text={props.text}
      pointing={true}
      color={props.color}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <Dropdown.Menu>
        {dropdownItems}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ToolsDropdownComponent;