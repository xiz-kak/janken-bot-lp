module.exports = {
    siteMetadata: {
        title: `/janken`,
        description: `Play Janken with your teammates`,
        author: `@xiz_kak`,
        siteUrl: `https://slashjanken.xiz-kak.com`,
        slackAppId: `A01P3MLQLQ0`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
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
                theme_color: `#FF54AC`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/logo_mark.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: "gatsby-omni-font-loader",
            options: {
              enableListener: true,
              preconnect: ["https://fonts.gstatic.com"],
      
              web: [
                {
                  file:
                    "https://fonts.googleapis.com/css2?family=PT+Serif&display=swap",
                  name: "PT Serif",
                },
              ],
              custom: [
                {
                  name: "Inter",
                  file: "/fonts/fonts.css",
                },
              ],
            },
          },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
