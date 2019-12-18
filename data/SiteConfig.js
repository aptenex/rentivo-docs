const config = {
  env: process.env.NODE_ENV,
  docsDir: 'docs',
  siteTitle: 'Rentivo Booking Software',
  siteAuthor: 'Rentivo',
  siteTitleAlt: 'Rentivo Knowledge Center',
  siteLogo: 'http://staging.procuro.io/assets/dashboard/src/img/partners/r-app-tile.png',
  ogImage: 'http://staging.procuro.io/assets/dashboard/src/img/partners/r-app-tile.png',
  siteUrl: 'https://www.rentivo.com',
  gitHubMarkdownPath: 'https://github.com/a/docs/tree/develop/content/docs',
  pathPrefix: '',
  siteDescription: 'Get started with Rentivo, a software solution to help improve your Airbnb, HomeAway, Booking.com and many more direct and channel distributed bookings. Save time, money and acquire more inventory.',
  siteRss: '/rss.xml',
  googleAnalyticsID: '',
  userTwitter: 'rentivo',
};

config.envPrefix = process.env.NODE_ENV === 'development' ? '' : config.pathPrefix;

module.exports = config;
