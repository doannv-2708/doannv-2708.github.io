import React from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';
import railsIcon from '@iconify/icons-logos/rails';
import mysqlIcon from '@iconify/icons-logos/mysql';
import rubyIcon from '@iconify/icons-logos/ruby';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';

const skills = [
  <a href="https://rubyonrails.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={railsIcon} />
  </a>,
  <a href="https://www.ruby-lang.org" className="focus:outline-none">
    <Icon className="text-6xl" icon={rubyIcon} />
  </a>,
  <a href="https://www.mysql.com" className="focus:outline-none">
    <Icon className="text-6xl" icon={mysqlIcon} />
  </a>,
  <a href="https://reactjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={reactIcon} />
  </a>,
  <a href="https://tailwindcss.com" className="focus:outline-none">
    <Icon className="text-4xl" icon={tailwindcssIcon} />
  </a>,
  <a href="https://getboostrap.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={bootstrapIcon} />
  </a>
];

export default skills;
