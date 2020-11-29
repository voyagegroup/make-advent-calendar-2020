import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const result = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
            excerpt(format: PLAIN)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <section className="w-full px-6 py-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
        {result.allMarkdownRemark.edges.map((row, index) => (
          <article
            key={index}
            className="p-8 border-double border-4 rounded-md"
          >
            <Link to={row.node.frontmatter.slug}>
              <p className="text-sm text-bold text-gray-500">
                {row.node.frontmatter.date}
              </p>
              <h2 className="font-semibold text-2xl mb-2">
                {row.node.frontmatter.title}
              </h2>
              <p className="text-base">{row.node.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage
