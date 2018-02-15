import * as React from 'react';
import ToolCardComponent from './tool_components/ToolCard';

const description = `The Microbial Interaction Database is a comprehensive database
of microbial interactions from different data source, and an open source computational
platform for simulation, analysis and design of microbial commnities relevant to human biology.
This project aims to alleviate the gaps in knowledge of interactions by integrating multiple
types to data.`;

const img = require('../images/mind.svg');

const name = 'Microbial Interaction Database';

const exFormData = [
  {label: 'Network', placeholder: 'network.json'}
];

const customFormData = [
  {label: 'Network', placeholder: 'network.json'}
];

const portalComponent: JSX.Element = <iframe src="http://microbialnet.org/v0.85.html" width="100%" height="90%" />;

const extraLinks = {
  github_link: 'https://github.com/PathoScope/PathoScope',
  download_link: 'http://sourceforge.net/projects/pathoscope/'
};

function MindComponent() {
  return (
    <ToolCardComponent
      name={name}
      img={img}
      description={description}
      ex_active={true}
      ex_form_data={exFormData}
      custom_active={false}
      custom_form_data={customFormData}
      portal={portalComponent}
      links={extraLinks}
    />
  );
}

export default MindComponent;