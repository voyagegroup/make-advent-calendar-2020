import React from "react"
import { Link } from "gatsby"

const Sidebar = () => (
  <nav className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 lg:text-sm pb-10 lg:pt-10 lg:pb-16 sticky?lg:h-(screen-18)">
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
)

export default Sidebar