module.exports = {
  siteMetadata: {
    title: 'Pandas eating lots',
  },
  pathPrefix: `/gatsby-test`,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-stripe-checkout`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathConfigModule: 'src/utils/typography.js',
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-tutorial',
        short_name: 'gatut',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-source-github',
    //   options: {
    //     headers: {
    //       Authorization: `Bearer fd24f37a5b2269be0a4bb37a740e044c47d251a8`,
    //     },
    //     queries: [
    //       `{
    //       repository(owner: "alfumit", name: "") {
    //         issues(last: 20, states: OPEN) {
    //           edges {
    //             node {
    //               id
    //               author {
    //                 avatarUrl
    //                 login
    //                 url
    //               }
    //               bodyHTML
    //               title
    //               url
    //             }
    //           }
    //         }
    //       }
    //     }`,
    //     ],
    //   }
    // },
    'gatsby-plugin-offline',
  ],
}
