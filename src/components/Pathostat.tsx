import * as React from 'react';
import ToolCardComponent from './tool_components/ToolCard';

const description = `PathoStat is a R package that performs Statistical Microbiome Analysis
on metagenomics results from sequencing data samples. In particular,
it supports analyses on the PathoScope generated report files.
PathoStat provides various functionalities including Relative Abundance
charts, Diversity estimates and plots, tests of Differential Abundance,
Time Series visualization, and Core OTU analysis.`;

const img = require('../images/pathostat_image.png');

const name = 'PathoStat';

export interface PathostatProps {
  active?: boolean;
  disabled?: boolean;
}

export interface PathostatState {
  active: boolean;
  disabled: boolean;
}

const exFormData = [
  {label: 'OTU data', placeholder: 'otu_data.tsv'},
  {label: 'Taxonomy data', placeholder: 'tax_data.tsv'},
  {label: 'Metadata', placeholder: 'metadata.tsv'},
];

const customFormData = [
  {label: 'OTU data', placeholder: 'otu_data.tsv'},
  {label: 'Taxonomy data', placeholder: 'tax_data.tsv'},
  {label: 'Metadata', placeholder: 'metadata.tsv'},
];

const portalComponent: JSX.Element = <iframe src="http://192.168.99.100:3838" width="100%" height="90%" />;

const extraLinks = {
  github_link: 'https://github.com/mani2012/PathoStat',
  download_link: 'http://bioconductor.org/packages/release/bioc/html/PathoStat.html'
};

function PathostatComponent() {
  return (
    <ToolCardComponent
      name={name}
      img={img}
      description={description}
      ex_form_data={exFormData}
      custom_form_data={customFormData}
      portal={portalComponent}
      links={extraLinks}
    />
  );
}

export default PathostatComponent;