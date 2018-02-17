import * as React from 'react';
import { Grid, Header, Image, Button, Icon } from 'semantic-ui-react';

export interface ToolDescProps {
  name: string;
  description: string;
  img: string;
  onClick: () => void;
}

function ToolDescComponent(props: ToolDescProps): JSX.Element {
  const { name, description, img, onClick } = props;
  return (
    <Grid container={true} padded={true} >
      <Grid.Row>
        <Grid.Column>
          <Header as="h1" fluid={true} block={true} textAlign="center">
            {name}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row stretched={true} verticalAlign="middle" container={true}>
        <Grid.Column width="5">
          <Image src={img} height={300} width={300} />
        </Grid.Column>
        <Grid.Column width="11">
          <Grid.Row>
            <p> {description} </p>
          </Grid.Row>
          <Grid.Row verticalAlign="bottom" textAlign="center" style={{paddingTop: 70}}>
            <Button
              color="red"
              onClick={onClick}
              animated="fade"
              size="big"
              className="animated jello"
            >
              <Button.Content visible={true}>
                Try it out
              </Button.Content>
              <Button.Content hidden={true}>
                <Icon name="play"/>
              </Button.Content>
            </Button>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ToolDescComponent;