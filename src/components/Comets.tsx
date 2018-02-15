import * as React from 'react';
import ToolCardComponent from './tool_components/ToolCard';

const description = `COMETS (Computation Of Microbial Ecosystems in Time and Space) is a software
platform for performing computer simulations of metabolism in spatially structured microbial
communities. It is based on stoichiometric modeling of the genome-scale metabolic network of
individual microbial species (using dynamic flux balance analysis), and on a discrete approximation
of diffusion.`;

const img = require('../images/comets.jpg');

const name = 'Comets';

const exFormData = [
  {label: 'OTU model', placeholder: 'model.txt'},
  {label: 'Media', placeholder: 'media.txt'},
  {label: 'time_step', placeholder: '1000'},
];

const customFormData = [
  {label: 'OTU model', placeholder: 'model.txt'},
  {label: 'Media', placeholder: 'media.txt'},
  {label: 'time_step', placeholder: '1000'},
];

const portalComponent: JSX.Element = <h2> Under construction! </h2>;

const extraLinks = {
  github_link: 'https://github.com/segrelab/comets',
  download_link: 'http://www.bu.edu/segrelab/comets/'
};

function CometsComponent() {
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

export default CometsComponent;