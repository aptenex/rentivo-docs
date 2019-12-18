const config = {
  env: process.env.NODE_ENV,
  docsDir: 'docs',
  siteTitle: 'Rentivo Documentation',
  siteAuthor: 'Rentivo',
  siteTitleAlt: 'Rentivo Knowledge Center',
  siteLogo: 'http://staging.procuro.io/assets/dashboard/src/img/partners/r-app-tile.png',
  ogImage: 'http://staging.procuro.io/assets/dashboard/src/img/partners/r-app-tile.png',
  siteUrl: 'https://www.rentivo.com',
  gitHubMarkdownPath: 'https://github.com/a/docs/tree/develop/content/docs',
  pathPrefix: '/',
  siteDescription: 'Learn how to get started using SendGrid. Integrate in minutes, test for free, and get access to documents to help solve your email deliverability problems.',
  siteRss: '/rss.xml',
  googleAnalyticsID: '',
  userTwitter: 'rentivo',
};

config.envPrefix = process.env.NODE_ENV === 'development' ? config.pathPrefix : config.pathPrefix;

module.exports = config;
