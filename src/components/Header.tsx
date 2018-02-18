import * as React from 'react';
import { Grid, Image, Segment, Button, Icon, HeaderProps, } from 'semantic-ui-react';
import MenuComponent, { MenuItem, MenuBarProps } from './header_components/Menu';
const microbiomeBanner = require('../images/banner_microbiome.png');
import { css } from 'react-emotion';
import Waypoint from 'react-waypoint';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const MenuItems: MenuItem[] = [
  { name: 'home', position: 'left', color: 'green' },
  { name: 'tools', position: 'left', color: 'red' },
  { name: 'login', position: 'right', color: 'yellow' },
  { name: 'signup', position: 'right', color: 'purple'}
];

const bgStyle = css`
  background: #000000;
  background: -webkit-linear-gradient(to right, #434343, #000000);
  background: linear-gradient(to right, #434343, #000000);
`;

// const menuStyle = css`
//   position: fixed;
//   top: 0%;
//   background-color: whitesmoke;
// `;

export interface HeaderProps {

}

export interface HeaderState {
  menuState: MenuBarProps;
  menuClass: object;
}

@observer
class HeaderComponent extends React.Component<HeaderProps, HeaderState> {
  @observable menuState: MenuBarProps;
  @observable menuClass: object;

  constructor(props: HeaderProps) {
    super(props);
    this.goToMicrobiomePage = this.goToMicrobiomePage.bind(this);
    this.handleMenuNormal = this.handleMenuNormal.bind(this);
    this.handleMenuFixed = this.handleMenuFixed.bind(this);
    this.handleMenuNormal();
    this.state = { menuState: this.menuState, menuClass: this.menuClass };
  }

  goToMicrobiomePage(): void {
    window.location.href = 'http://sites.bu.edu/microbiome/';
  }

  handleMenuNormal(): void {
    this.menuState = {
      inverted: true,
      size: 'large',
      borderless: true,
      attached: 'top',
      secondary: true
    };
    this.menuClass = { };
  }

  handleMenuFixed(): void {
    this.menuState = {
      inverted: false,
      size: 'large',
      borderless: false,
      attached: false,
      secondary: false
    };
    this.menuClass = {
      position: 'fixed',
      width: '100%',
      top: '0%',
      left: '0%',
      zIndex: 1000,
      backgroundColor: 'whitesmoke',
    };
  }

  render(): JSX.Element {
    return (
      <Segment
        style={{background: `linear-gradient(to right, #434343, #000000)`}}
        className={bgStyle}
      >
        <Grid container={true}>
          <Grid.Row>
            <Grid.Column>
              <Waypoint
                onEnter={this.handleMenuNormal}
                onLeave={this.handleMenuFixed}
                topOffset="0%"
                bottomOffset="-80%"
              >
                <div>
                <MenuComponent
                  activeItem="home"
                  menuItems={MenuItems}
                  menuStyle={this.menuClass}
                  menuState={this.menuState}
                />
                </div>
              </Waypoint>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Image
                src={microbiomeBanner}
                fluid={true}
                rounded={true}
                className="animated slideInDown"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered={true} columns={4}>
            <Grid.Column className="animated infinite pulse">
              <Button
                basic={true}
                inverted={true}
                color="pink"
                size="large"
                onClick={this.goToMicrobiomePage}
                animated={true}
              >
                <Button.Content visible={true}>
                  <Icon name="bug"/> Microbiome Day 2018
                </Button.Content>
                <Button.Content hidden={true}>
                  Feb 14, 2018 <Icon name="arrow right"/>
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default HeaderComponent;