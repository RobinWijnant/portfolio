// @flow
import React from "react"
import { graphql } from "gatsby"
import Page from "../components/page"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SectionHeading from "../components/section-heading"
import ProjectSlider from "../components/project-slider"
import ShapeWrapper from "../components/shape-wrapper"
import HomeQueryParser from "../query-parsers/home"
import type { HomePageData } from "../query-parsers/home"

export default ({ data }: any) => {
  const pageData: HomePageData = HomeQueryParser.parse(data)
  
  return (
    <Page>
      <SEO title="Home" />
      <Banner image={pageData.bannerImage} />
      <SectionHeading>Some of my latest work</SectionHeading>
      <ShapeWrapper>
        <ProjectSlider projects={pageData.projects} />
      </ShapeWrapper>
    </Page>
  )
}

export const query = graphql`
{
  cockpitHome {
    banner_image {
      value {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
  allCockpitProjects(filter: {published: {value: {eq: true}}}) {
    nodes {
      cockpitId
      featured_image {
        value {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      type {
        value
      }
      title {
        value
      }
      date {
        value
      }
    }
  }
}
`