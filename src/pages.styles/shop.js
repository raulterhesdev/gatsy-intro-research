import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 220px);
	grid-gap: 24px;
	justify-content: center;
	align-items: center;
`;

export const Card = styled.div`
	box-shadow: 8px 8px 12px #00000029;
	padding: 10px;
`;

export const Title = styled.div`
	margin: 4px 0;
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.bgColor};
		text-align: center;
		padding: 6px 0;
		display: flex;
		justify-content: center;

		span {
			width: 100%;
			padding: 6px 0;
			border-bottom: 1px solid ${({ theme }) => theme.bgColor};
		}
	}
`;

export const Text = styled.p`
	padding: 4px;
	text-align: center;
`;

export const Button = styled.button`
	width: 100%;
	border: none;
	background-color: ${({ theme }) => theme.bgColor};
	outline: none;
	color: white;
	padding: 12px;
	margin-top: 6px;

	&:hover {
		opacity: 0.9;
	}
`;

export const Message = styled.div`
	position: fixed;
	bottom: 16px;
	right: 16px;
	background-color: ${({ theme }) => theme.bgColor};
	color: white;
	border-radius: 8px;
	padding: 12px;
`;
