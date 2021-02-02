import styled from 'styled-components';

export const Cart = styled.div`
	padding: 12px;
	min-height: 60vh;
	h1 {
		text-align: center;
		color: white;
		background-color: ${({ theme }) => theme.bgColor};
		padding: 12px;
		border-radius: 6px 6px 0 0;
	}

	h3 {
		text-align: right;
		padding: 16px;
		color: ${({ theme }) => theme.bgColor};
	}
`;

export const Table = styled.div`
	border: 1px solid ${({ theme }) => theme.bgColor};
	border-radius: 0 0 6px 6px;
`;

export const TableRow = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	padding: 8px;

	border-bottom: 1px solid
		${({ theme, isTableHead }) => (isTableHead ? theme.bgColor : 'transparent')};

	span {
		font-weight: ${({ isTableHead }) => (isTableHead ? ' bold' : 'initial')};
		font-size: ${({ isTableHead }) => (isTableHead ? ' 16px' : '18px')};
		padding: 0 8px;
	}
`;
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;

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
