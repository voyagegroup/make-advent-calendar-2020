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
      <section className="w-full px-6 py-8 lg:max-w-4xl">
        {result.allMarkdownRemark.edges.map((row, index) => (
          <article key={index} className="pb-4 border-b-1">
            <p className="text-sm text-bold text-gray-500">
              {row.node.frontmatter.date}
            </p>
            <Link to={row.node.frontmatter.slug}>
              <h2 className="font-semibold text-2xl">
                {row.node.frontmatter.title}
              </h2>
            </Link>
            <p className="">{row.node.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage
