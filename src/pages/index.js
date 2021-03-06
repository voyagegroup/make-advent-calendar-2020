import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from "../components/index/head"

const IndexPage = () => {
  const result = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
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

  const rows = [...new Array(31)].map((_, index) => (
    result.allMarkdownRemark.edges.find(row => {
      const date = new Date(row.node.frontmatter.date)
      return index+1 === date.getDate() && 2020 === date.getFullYear()
    })
  ))

  return (
    <Layout>
      <SEO title="Home" />
      <Head></Head>
      <hr className="mt-4" />
      <section className="w-screen lg:w-5/6 px-6 py-8 grid grid-cols-1 lg:grid-flow-row lg:grid-cols-7 lg:grid-rows-5 gap-4">
        {[...new Array(2)].map((_, index) => (
          <article key={index} className="hidden lg:block p-4 rounded-md shadow-sm">
            <h2 className="text-gray-200">{index+29}</h2>
          </article>
        ))}
        {rows.map((row, index) => (row ? (
          <article
            key={index}
            className="p-4 rounded-md shadow"
          >
            <Link to={row.node.frontmatter.slug}>
              <h2 className="font-semibold">
                <span className="lg:block text-bold text-red-500 pr-4 lg:pr-2">
                  {(new Date(row.node.frontmatter.date)).getDate()}
                </span>
                {row.node.frontmatter.title}
              </h2>
            </Link>
          </article>
        ) : (
          <article key={index} className="p-4 rounded-md shadow">
            <span className="text-bold text-gray-300">{index+1}</span>
          </article>
        )))}
        {[...new Array(2)].map((_, index) => (
          <article key={index} className="hidden lg:block p-4 rounded-md shadow-sm">
            <h2 className="text-gray-200">{index+1}</h2>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage
