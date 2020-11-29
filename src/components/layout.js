/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          subTitle
        }
      }
    }
  `)

  return (
    <div className="min-h-screen">
      <Header title={data.site.siteMetadata?.title} subTitle={data.site.siteMetadata?.subTitle} />
      <main>{children}</main>
      <footer className="bottom-0 h-8 bg-emerald-500 text-sm items-center justify-center">
        <p className="text-center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
