import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex border-b border-gray-200">
      <div className="flex-none pl-4 sm:p-6 xl:p-8 flex items-center lg:border-b-0 lg:w-60 xl:w-72">
        <Link
          to="/"
          className="overflow-hidden w-10 md:w-auto"
        >
          <h1 className="text-3xl">
            {siteTitle}
          </h1>
        </Link>
      </div>
      <div className="flex-auto h-18 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8"></div>
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
