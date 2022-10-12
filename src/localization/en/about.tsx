import React from 'react';
import { Icon } from '@iconify/react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import reactIcon from '@iconify/icons-logos/react';
import railsIcon from '@iconify/icons-logos/rails';

const Text = () => (
  <>
    I’m currently working as{' '}
    <span className="font-bold text-gray-800">fullstack developer</span> and{' '}
    <span className="font-bold text-gray-800">UI/UX designer</span>. I enjoy building web apps using
    <HighlightedTextIcon
      as="a"
      href="https://rubyonrails.org"
      className="mx-2"
      icon={<Icon icon={railsIcon} />}
    >
      RubyOnRails
    </HighlightedTextIcon>{' '}
    and{' '}
    <HighlightedTextIcon
      as="a"
      href="https://reactjs.org"
      className="mx-2"
      icon={<Icon icon={reactIcon} />}
    >
      React
    </HighlightedTextIcon>
    . I am a person who likes challenges.
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
