import React from "react"
import { Link } from "gatsby"

const Footer = ({ pageContext }) => {
  const index = pageContext.nodes.findIndex(
    row => row.node.frontmatter.slug === pageContext.slug
  )
  const prev = pageContext.nodes[index - 1]
    ? pageContext.nodes[index - 1].node
    : null
  const next = pageContext.nodes[index + 1]
    ? pageContext.nodes[index + 1].node
    : null

  if (!prev && !next) {
    return (<></>)
  }

  return (
    <section className="min-w-0 w-full col-span-2 sm:px-2">
      <nav>
        <ul className="flex flex-wrap justify-between mb-8">
          <li>
            {prev && (
              <Link
                className="text-blue-600"
                to={prev.frontmatter.slug}
                rel="prev"
              >
                ← {prev.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                className="text-blue-600"
                to={next.frontmatter.slug}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Footer