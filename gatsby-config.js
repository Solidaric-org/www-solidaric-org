module.exports = {
  siteMetadata: {
    title: 'Solidaric.org Website',
    description: 'The information',
    author: 'Solidaric author',
    keywords: 'My keywords',
    siteUrl: 'https://www.solidaric.org',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Solidaric.org',
        short_name: 'Solidaric.org',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/solidaric-org-logo-256.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
