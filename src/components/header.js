import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({title}) => (
  <header>
    <div className="sticky top-0 z-40 z-50 py-4 px-6 border-b border-gray-200">
      <div className="items-center">
        <Link
          to="/"
          className="overflow-hidden w-10 md:w-auto"
        >
          <h1 className="text-2xl">
            {title}
          </h1>
        </Link>
      </div>
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
