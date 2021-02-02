import styled from 'styled-components';

export const StyledHero = styled.div``;

export const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 16px;
	margin-top: 16px;
`;

export const Card = styled.div`
	max-width: 350px;
	margin: 0 auto;
	h2 {
		text-align: center;
		background-color: ${({ theme }) => theme.bgColor};
		color: white;
		padding: 8px;
		border-radius: 6px 6px 0 0;
	}

	p {
		border: 1px solid ${({ theme }) => theme.bgColor};
		padding: 4px 6px;
		border-radius: 0 0 6px 6px;
	}
`;
