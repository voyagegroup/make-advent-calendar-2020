import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Header siteTitle="Makefile" />
      <section className="w-full max-w-8xl mx-auto">
        <section className="lg:flex">
          <div
            className="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden"
          >
            <div
              className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0"
            >
              <nav
                className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-16 sticky?lg:h-(screen-18)"
              >
                <ul>
                  <h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
                    Sidebar test
                  </h5>
                  <li className="mt-8">
                    <ul>
                      <li>
                        <Link
                          className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                          href=""
                        >
                          <span className="relative">Installation</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                          href=""
                        >
                          <span className="relative">Release Notes</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                          href=""
                        >
                          <span className="relative">Upgrade Guide</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <main className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
            <div className="pt-10 pb-24 lg:pb-16 w-full">
              <div className="pb-10">
                <div className="flex items-center">
                  <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{frontmatter.title}</h1>
                </div>
                <h2 className="mt-1 text-lg text-gray-500">{frontmatter.date}</h2>
              </div>
              <div className="" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </main>
        </section>
      </section>
    </>
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
