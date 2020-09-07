module.exports = {
  siteMetadata: {
    title: `Compra e venda de minérios`,
    description: `Compra e venda de minerios em todas as regioes do brasil`,
    author: `@seiton negociacoes`,
    siteUrl: `http://seitonbrasil.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
        name: `Seiton Negociações`,
        short_name: `Seiton`,
        start_url: `/`,
        background_color: `#040e18`,
        theme_color: `#040e18`,
        display: `minimal-ui`,
        icon: `src/images/seiton-logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
