import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <Button>Activate</Button>
  </Layout>
)

export default IndexPage
