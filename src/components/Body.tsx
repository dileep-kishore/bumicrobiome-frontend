import * as React from 'react';
import SidenavComponent from './sidebar_components/Sidenav';

export interface BodyProps {

}

export interface BodyState {

}

const names = [
  'comets', 'mind', 'pathostat', 'pathoscope'
];

class BodyComponent extends React.Component<BodyProps, BodyState> {

  constructor(props: BodyProps) {
    super(props);
  }

  render() {
    const menuData = names.map((x: string) => ({name: x}));
    return (
      <SidenavComponent menuData={menuData} />
    );
  }
}

export default BodyComponent;