interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Thomas\' Running Page',
  siteUrl: 'https://thomas-lv.github.io/running_page/',
  logo: 'https://avatars.githubusercontent.com/u/19815167?v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'WBlog',
      url: 'https://weibo.com/338351616',
    },
    {
      name: 'About',
      url: 'https://github.com/Thomas-Lv',
    },
  ],
};

export default data;
