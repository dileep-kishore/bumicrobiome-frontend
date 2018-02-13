import * as React from 'react';
import { CardContent, Grid, Label, Icon } from 'semantic-ui-react';

export interface ToolCardExtraProps {
  github_link: string;
  download_link: string;
}

function ToolCardExtraComponent(props: ToolCardExtraProps) {
  const { github_link, download_link } = props;
  return (
    <CardContent extra={true}>
      <Grid columns={2} divided={true}>
        <Grid.Row >
          <Grid.Column >
            <Label
              as="a"
              ribbon={true}
              color="black"
              href={github_link}
            >
              <Icon name="github"/>
              Link to Github page
            </Label>
          </Grid.Column>
          <Grid.Column >
            <Label
              as="a"
              ribbon="right"
              color="black"
              href={download_link}
            >
              <Icon name="download"/>
              Link to download page
            </Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </CardContent>
  );
}

export default ToolCardExtraComponent;