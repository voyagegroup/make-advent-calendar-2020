import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Head = () => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <section className="px-6 pt-6">
      <section className="lg:max-w-4xl mb-4">
        <p>{data.site.siteMetadata?.description}</p>
      </section>
      <section className="">
        <p>GitHub:
          <Link href="https://github.com/voyagegroup/make-advent-calendar-2020" className="text-xs text-gray-500 ml-2">
            https://github.com/voyagegroup/make-advent-calendar-2020
          </Link>
          </p>
      </section>
    </section>
  )
}

export default Head

