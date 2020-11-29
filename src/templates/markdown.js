import React from "react"
import { graphql } from "gatsby"
import Sidebar from "../components/sidebar"
import Footer from "../components/article/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template(props) {
  const data = props.data
  const pageContext = props.pageContext
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <section className="w-full mx-auto grid grid-cols-12 grid-flow-col gap-4">
        <section className="col-span-2 lg:block hidden">
          <Sidebar nodes={ pageContext.nodes } />
        </section>
        <section className="col-span-12 lg:max-w-4xl px-6">
          <article>
            <div className="py-4 lg:py-8">
              <p className="mt-1 text-sm text-gray-500">{frontmatter.date}</p>
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </article>
          <Footer pageContext={pageContext} />
        </section>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
