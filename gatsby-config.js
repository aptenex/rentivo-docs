const config = require('./data/SiteConfig');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
const policyAccess = process.env.GATSBY_ENV === 'production' ? [{ userAgent: '*', allow: ['/'] }] : [{ userAgent: '*', disallow: ['/'] }];

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
      'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/content/${config.docsDir}`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl + pathPrefix,
        sitemap: `${config.siteUrl}/docs/sitemap.xml`,
        policy: policyAccess,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'sendgrid-remark-code-in-html',
          'sendgrid-remark-paths',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-autolink-headers',
          'sendgrid-remark-headers',
          'sendgrid-remark-tables',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'XXXX',
        includeInDevelopment: true,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-nullish-coalescing-operator',


    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
            {
                src: '/brand/sg-mark.png',
                sizes: '771x724',
                type: 'image/png',
            },
        ],
      },
    },
    // 'gatsby-plugin-offline',
  ],
};
