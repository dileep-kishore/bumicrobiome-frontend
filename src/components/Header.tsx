import * as React from 'react';
import { Grid, Image, Segment, Button, Icon, } from 'semantic-ui-react';
import MenuComponent, { MenuItem } from './Menu';
const microbiomeBanner = require('../images/banner_microbiome.png');
import { css } from 'react-emotion';

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

function goToMicrobiomePage(): void {
  window.location.href = 'http://sites.bu.edu/microbiome/';
}

function HeaderComponent(): JSX.Element {
  return (
    <Segment
      style={{background: `linear-gradient(to right, #434343, #000000)`}}
      className={bgStyle}
    >
      <Grid container={true}>
        <Grid.Row>
          <Grid.Column>
            <MenuComponent activeItem="home" menuItems={MenuItems}/>
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
              onClick={goToMicrobiomePage}
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

export default HeaderComponent;