

module.exports = {
  siteMetadata: {
    title: "LayoBright Portfolio",
    description: "LayoBright Portfolio Site",
    author: "@LayoBright",
    twitterUsername: "@LayoBright",
    image: "/home.PNG",
    siteUrl: "https://oladimejiayodeji.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
}
