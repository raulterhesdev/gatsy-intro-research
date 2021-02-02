import styled from 'styled-components';

export const BookContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1 {
		color: ${({ theme }) => theme.bgColor};
		margin: 6px;
	}

	h3 {
		color: ${({ theme }) => theme.bgColor};
		margin-bottom: 12px;
	}

	span {
		padding: 12px 24px 12px 0;
	}

	span:before {
		content: '$';
		padding: 12px 0 12px 24px;
	}

	span {
		border: 2px solid ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.bgColor};
		font-weight: bold;
	}

	p {
		max-width: 720px;
		margin: 16px;
		line-height: 1.5;
		letter-spacing: 0.3px;
	}

	button {
		width: 200px;
		outline: none;
		border: none;
		background-color: ${({ theme }) => theme.bgColor};
		padding: 16px;
		color: white;
		font-size: 18px;

		&:hover {
			opacity: 0.9;
		}
	}
`;
