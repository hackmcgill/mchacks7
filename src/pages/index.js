import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as Styled from "../styles/components/index"

const IndexPage = () => (
  // <Layout>
  //   {/* <SEO title="Home" /> */}
    
    

  //   {/* <Link to="/page-2/">Go to page 2</Link> */}
  // </Layout>

  <Styled.Intro>
        <Styled.Hero>
            <div class='hero__copy'>
                <h1 class="hero__heading">McHacks</h1> 
                <h2 class="hero__subheading">Testing</h2>
            </div>
        </Styled.Hero>
    </Styled.Intro>

  



)

export default IndexPage
