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
  siteTitle: 'Running Page',
  siteUrl: 'https://www.xiaohongshu.com/user/profile/6661802200000000070051e6?xsec_token=YB9tHNSW7r-KkflRKr-mtaOGMMIGnLmdwLMGy0JnPz1zE=&xsec_source=app_share&xhsshare=CopyLink&appuid=6661802200000000070051e6&apptime=1741326635&share_id=df270278169b47a7ada964c30c7e9573',
  logo: 'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31acknrjhn2005pj1g0h1okf6ntprsd8?imageView2/2/w/540/format/webp|imageMogr2/strip2',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://www.xiaohongshu.com/user/profile/6661802200000000070051e6?xsec_token=YB9tHNSW7r-KkflRKr-mtaOGMMIGnLmdwLMGy0JnPz1zE=&xsec_source=app_share&xhsshare=CopyLink&appuid=6661802200000000070051e6&apptime=1741326635&share_id=df270278169b47a7ada964c30c7e9573',
    },
    {
      name: 'About',
      url: 'https://www.xiaohongshu.com/user/profile/6661802200000000070051e6?xsec_token=YB9tHNSW7r-KkflRKr-mtaOGMMIGnLmdwLMGy0JnPz1zE=&xsec_source=app_share&xhsshare=CopyLink&appuid=6661802200000000070051e6&apptime=1741326635&share_id=df270278169b47a7ada964c30c7e9573',
    },
  ],
};

export default data;
