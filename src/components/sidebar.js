import React from "react"
import { Link } from "gatsby"

const Sidebar = ({ nodes }) => (
  <nav className="px-1 overflow-y-auto font-medium text-base sm:px-3 lg:text-sm pt-4 pb-10">
    <ul>
      <li className="mt-4">
        <ul className="list-disc pl-8">
          {nodes.map((row, index) => (
          <li key={index}>
            <Link
              className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
              to={row.node.frontmatter.slug}
            >
              <p>{row.node.frontmatter.title}</p>
            </Link>
          </li>
          ))}
        </ul>
      </li>
    </ul>
  </nav>
)

export default Sidebar