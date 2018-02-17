import * as React from 'react';
import ToolCardComponent from '../tool_components/ToolCard';

const description = `PathoScope is a complete bioinformatics framework for rapidly and
accurately quantifying the proportions of reads from individual microbial
strains present in metagenomic sequencing data from environmental or
clinical samples. The pipeline performs all necessary computational
analysis steps; including reference genome library extraction and
indexing, read quality control and alignment, strain identification,
and summarization and annotation of results.`;

const img = require('../../images/pathoscope_workflow.png');

const name = 'PathoScope';

const exFormData = [
  {label: 'Fasta file', placeholder: 'reads.fasta'},
  {label: 'Taxonomy IDs', placeholder: 'tax_ids.csv'},
  {label: 'Filters', placeholder: 'filters'},
];

const customFormData = [
  {label: 'Fasta file', placeholder: 'reads.fasta'},
  {label: 'Taxonomy IDs', placeholder: 'tax_ids.csv'},
  {label: 'Filters', placeholder: 'filters'},
];

const portalComponent: JSX.Element = <h2> Under construction! </h2>;

const extraLinks = {
  github_link: 'https://github.com/PathoScope/PathoScope',
  download_link: 'http://sourceforge.net/projects/pathoscope/'
};

function PathoScopComponent() {
  return (
    <ToolCardComponent
      name={name}
      img={img}
      description={description}
      ex_active={false}
      ex_form_data={exFormData}
      custom_active={false}
      custom_form_data={customFormData}
      portal={portalComponent}
      links={extraLinks}
    />
  );
}

export default PathoScopComponent;