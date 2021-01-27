import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { StyledHero, CardContainer, Card } from './Hero.styles';

const Hero = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "bookstore.jpg" }) {
				childImageSharp {
					# Specify the image processing specifications right in the query.
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<StyledHero>
			<Img fluid={data.file.childImageSharp.fluid} />
			<CardContainer>
				<Card>
					<h2>Lorem Ipsum</h2>
					<p>
						Mauris eu auctor eros, eu lacinia nulla. Cras feugiat mi tellus,
						eget finibus velit vestibulum eget. Nam augue lectus, sodales ut
						lorem ut, elementum sagittis nunc. Proin quis volutpat ligula. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Curabitur eget eros eget turpis laoreet
						tristique. Etiam sit amet augue ex. Morbi varius ornare urna,
						vestibulum congue nisi rhoncus sagittis. Vestibulum diam leo,
						volutpat a leo eu, condimentum porta ligula. Sed non pellentesque
						dolor, vel pellentesque neque. Donec lobortis, ex at feugiat
						maximus, nisl elit varius sapien, varius eleifend ex metus et
						ligula. Donec sem sapien, gravida at tortor et, ultrices consequat
						felis. Vestibulum lectus est, laoreet tempor metus sit amet, ornare
						tempor eros.
					</p>
				</Card>
				<Card>
					<h2>Lorem Ipsum</h2>
					<p>
						Mauris eu auctor eros, eu lacinia nulla. Cras feugiat mi tellus,
						eget finibus velit vestibulum eget. Nam augue lectus, sodales ut
						lorem ut, elementum sagittis nunc. Proin quis volutpat ligula. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Curabitur eget eros eget turpis laoreet
						tristique. Etiam sit amet augue ex. Morbi varius ornare urna,
						vestibulum congue nisi rhoncus sagittis. Vestibulum diam leo,
						volutpat a leo eu, condimentum porta ligula. Sed non pellentesque
						dolor, vel pellentesque neque. Donec lobortis, ex at feugiat
						maximus, nisl elit varius sapien, varius eleifend ex metus et
						ligula. Donec sem sapien, gravida at tortor et, ultrices consequat
						felis. Vestibulum lectus est, laoreet tempor metus sit amet, ornare
						tempor eros.
					</p>
				</Card>
				<Card>
					<h2>Lorem Ipsum</h2>
					<p>
						Mauris eu auctor eros, eu lacinia nulla. Cras feugiat mi tellus,
						eget finibus velit vestibulum eget. Nam augue lectus, sodales ut
						lorem ut, elementum sagittis nunc. Proin quis volutpat ligula. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Curabitur eget eros eget turpis laoreet
						tristique. Etiam sit amet augue ex. Morbi varius ornare urna,
						vestibulum congue nisi rhoncus sagittis. Vestibulum diam leo,
						volutpat a leo eu, condimentum porta ligula. Sed non pellentesque
						dolor, vel pellentesque neque. Donec lobortis, ex at feugiat
						maximus, nisl elit varius sapien, varius eleifend ex metus et
						ligula. Donec sem sapien, gravida at tortor et, ultrices consequat
						felis. Vestibulum lectus est, laoreet tempor metus sit amet, ornare
						tempor eros.
					</p>
				</Card>
			</CardContainer>
		</StyledHero>
	);
};

export default Hero;
