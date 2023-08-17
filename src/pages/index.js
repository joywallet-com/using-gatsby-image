import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import '../../index.css'

const Index = ({ data }) => (
	<div className="container">
		<div className="item">
			<h2>Large image | width = 1920px</h2>
			<GatsbyImage image={getImage(data.largeImage.localFile)} />
		</div>

		<div className="item">
			<h2>Small image | width = 100px</h2>
			<GatsbyImage image={getImage(data.smallImage.localFile)} />
		</div>
	</div>
)

export default Index

export const query = graphql`
	fragment ImageFragment on ImageSharp {
		gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 600, breakpoints: [350, 450, 550, 650], placeholder: NONE, outputPixelDensities: [1])
	}

	query {
		largeImage: unsplashImagesYaml(title: { eq: "largeImage" }) {
			localFile {
				childImageSharp {
					...ImageFragment
				}
			}
		}

		smallImage: unsplashImagesYaml(title: { eq: "smallImage" }) {
			localFile {
				childImageSharp {
					...ImageFragment
				}
			}
		}
	}
`

