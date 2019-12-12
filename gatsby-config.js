module.exports = {
  siteMetadata: {
    title: `Top100Crypto`,
    description: `Sort week's top 100 cryptocurrency by trading volume and value.`,
    author: `@top100crypto`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `top100crypto`,
        short_name: `top100crypto`,
        start_url: `/`,
        background_color: `#b22222`,
        theme_color: `#b22222`,
        display: `minimal-ui`,
        icon: `src/images/dollar-wings.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
