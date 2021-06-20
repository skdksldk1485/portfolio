module.exports = {
  siteMetadata: {
    title: 'IsuKim',
    description: "IsuKim's portfolio website",
    keyword:
      'portfolio, portfolio website, frontend developer, frontend, web developer, IsuKim',
    siteUrl: '',
    image: '',
    author: 'IsuKim',
    profiles: {
      phone: '+82 01052032463',
      email: 'skdksldk1148@gmail.com',
      linkedin: '',
      instagram: '',
      github: 'https://github.com/skdksldk1485',
      velog: 'https://velog.io/@skdksldk14',
      medium: '',
      resume: '',
    },
  },
  plugins: [
    `gatsby-plugin-typescript`, // 추가!
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
