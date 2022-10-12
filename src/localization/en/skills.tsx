import React from 'react';
import { Icon } from '@iconify/react';
import railsIcon from '@iconify/icons-logos/rails';
import javascriptIcon from '@iconify/icons-logos/javascript';
import { HighlightedTextIcon } from 'components/molecules';

const Text = () => (
  <>
    I have more than 3 years of experience as{' '}
    <span className="font-bold text-gray-800">web developer</span> using{' '}
    <HighlightedTextIcon
      as="a"
      href="https://rubyonrails.org"
      className="mx-2"
      icon={<Icon icon={railsIcon} />}
    >
      RubyOnRails
    </HighlightedTextIcon>{' '}
    and{' '}
    <HighlightedTextIcon className="mx-2" icon={<Icon icon={javascriptIcon} />}>
      Javascript
    </HighlightedTextIcon>{' '}
    that I’m now pretty confident in building apps using these tools:
  </>
);

const skills = {
  text: <Text />,
};

export default skills;
