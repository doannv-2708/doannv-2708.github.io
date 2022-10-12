import React from 'react';
import { Icon } from '@iconify/react';
import railsIcon from '@iconify/icons-logos/rails';
import javascriptIcon from '@iconify/icons-logos/javascript';
import { HighlightedTextIcon } from 'components/molecules';

const Text = () => (
  <>
    Tôi đã có kinh nghiệm hơn 3 năm để  phát triển các{' '}
    <span className="font-bold text-gray-800">website</span> sử dụng{' '}
    <HighlightedTextIcon
      as="a"
      href="https://rubyonrails.org/"
      className="mx-2"
      icon={<Icon icon={railsIcon} style={{ fontSize: '24px' }} />}
    >
      Ruby On Rails
    </HighlightedTextIcon>{' '}
    Và{' '}
    <HighlightedTextIcon
      className="mx-2"
      icon={<Icon icon={javascriptIcon} style={{ fontSize: '24px' }} />}
    >
      Javascript
    </HighlightedTextIcon>{' '}
    Và tôi khá tự tin sử dụng một số công cụ sau:
  </>
);

const skills = {
  text: <Text />,
};

export default skills;
