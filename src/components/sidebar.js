import React from "react"
import { Link } from "gatsby"

const Sidebar = ({ nodes }) => (
  <nav className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 lg:text-sm pb-10 lg:pt-10 lg:pb-16 sticky?lg:h-(screen-18)">
    <ul>
      <li className="mt-4">
        <ul>
          {nodes.map((row, index) => (
          <li key={index}>
            <Link
              className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
              href={row.node.frontmatter.slug}
            >
              <span className="relative">{row.node.frontmatter.title}</span>
            </Link>
          </li>
          ))}
        </ul>
      </li>
    </ul>
  </nav>
)

export default Sidebar