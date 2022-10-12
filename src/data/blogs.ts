import { BlogsPostProps } from 'components/molecules/BlogPost/types';

const blogs: BlogsPostProps[] = [
  {
    title: 'Active Record Basics',
    date: new Date('2022-10-12'),
    url: 'https://guides.rubyonrails.org/active_record_basics.html',
  },
  {
    title: 'Active Record Query Interface',
    date: new Date('2022-10-12'),
    url: 'https://guides.rubyonrails.org/active_record_querying.html',
  },
  {
    title: 'Action Cable Overview',
    date: new Date('2022-10-12'),
    url:
      'https://guides.rubyonrails.org/action_cable_overview.html',
  },
  {
    title: 'The Basics of Creating Rails Plugins',
    date: new Date('2022-10-12'),
    url: 'https://guides.rubyonrails.org/plugins.html',
  },
];

export default blogs;
