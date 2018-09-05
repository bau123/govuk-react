import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Checkbox from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Checkbox', module);
const examples = storiesOf('Form/Checkbox/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

const checkboxExamples = ['Waste from animal carcasses', 'Waste from mines or quarries', 'Farm or agricultural waste'];

stories.add('Component default', () => (
  <div>
    <Checkbox list={checkboxExamples} />
  </div>
));

examples.add('Checkbox disabled', () => (
  <div>
    <Checkbox disabled="disabled" list={checkboxExamples} />
  </div>
));

examples.add('Checkbox preselected', () => (
  <div>
    <Checkbox defaultChecked list={checkboxExamples} />
  </div>
));

examples.add('Checkbox preselected & disabled', () => (
  <div>
    <Checkbox disabled="disabled" defaultChecked list={checkboxExamples} />
  </div>
));
