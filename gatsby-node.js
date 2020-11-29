/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const template = require.resolve(`./src/templates/markdown.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const nodes = result.data.allMarkdownRemark.edges;
  nodes.forEach(({ node, index }) => {
    createPage({
      path: node.frontmatter.slug,
      component: template,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
        index,
        nodes,
      },
    })
  })
}