module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Blog',
    author: 'vedanasoft',
    authorLink: 'https://github.com/nitya-nepal',
    disqus: 'gatsby-starter-blog'// put your disqus ID here
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/`],
        precision: 8
      }
    }
  ]
}
