import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="grid grid-cols-2 sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white border-b border-gray-200">
      <div className="pl-4 sm:p-6 items-center lg:border-b-0">
        <Link
          to="/"
          className="overflow-hidden w-10 md:w-auto"
        >
          <h1 className="text-4xl font-bold">
            Makefile
          </h1>
          <p className="text-sm text-bold text-gray-500">advent calendar 2020</p>
        </Link>
      </div>
      <div></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
