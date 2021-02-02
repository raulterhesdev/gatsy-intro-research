import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import {
	GlobalStyle,
	globalTheme,
	Header,
	Footer,
	Container,
} from './Layout.styles';
import 'fontsource-montserrat';
import { ThemeProvider } from 'styled-components';
import Img from 'gatsby-image';

const ListLink = (props) => (
	<li>
		<Link to={props.to}>{props.children}</Link>
	</li>
);

const Layout = ({ children, title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
			file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fixed(width: 150, height: 150) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<ThemeProvider theme={globalTheme}>
			<Helmet title={title} />
			<GlobalStyle />

			<Header>
				<Link to='/'>
					<h3>{data.site.siteMetadata.title}</h3>
				</Link>
				<ul>
					<ListLink to='/'>Home</ListLink>
					<ListLink to='/shop/'>Shop</ListLink>
					<ListLink to='/cart/'>Cart</ListLink>
				</ul>
			</Header>
			<Container>{children}</Container>
			<Footer>
				<Img fixed={data.file.childImageSharp.fixed} />
				<p>Made with Gatsby.</p>
			</Footer>
		</ThemeProvider>
	);
};

export default Layout;
