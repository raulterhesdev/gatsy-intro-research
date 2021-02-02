import styled, { createGlobalStyle } from 'styled-components';

export const globalTheme = {
	bgColor: '#663399',
};

export const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box; 
  }

  body {
	font-family: 'Montserrat';
    font-size: 16px;
  }
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1200px;
	margin: 2px auto;
	padding: 0 16px;

	ul {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: center;

		li {
			padding: 14px 12px;
			border-bottom: 2px solid transparent;

			&:hover {
				border-bottom: 2px solid ${({ theme }) => theme.bgColor};
			}
		}
	}

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.bgColor};
		padding: 12px 18px;
	}
`;

export const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.bgColor};
	margin-top: 18px;

	p {
		width: 100%;
		padding: 16px;
		text-align: center;
		font-weight: 800;
	}
`;

export const Container = styled.div`
	width: 95%;
	max-width: 1280px;
	min-height: 70vh;
	margin: 0 auto;
`;
