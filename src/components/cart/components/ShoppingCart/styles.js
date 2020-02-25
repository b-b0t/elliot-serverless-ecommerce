import styled from "styled-components";

export const Center = styled.div`
	text-align: center;

	h2 {
		font-size: 24pt;
	}
`;

export const TableWrapper = styled.div`
	@media (min-width: 1200px) {
		overflow-x: initial;
	}

	button {
		background: none;
		border: none;
	}
`;

export const Table = styled.table`
	margin: 0 auto;
	border-collapse: collapse;

	tr {
		td {
			padding: 0.625rem 1.25rem;
			border: none;

			a {
				display: block;
				color: ${({
					theme: {
						colors: { black }
					}
				}) => black};

				&:hover {
					color: ${({
						theme: {
							colors: { accent }
						}
					}) => accent};
				}
			}

			span {
				color: ${({
					theme: {
						colors: { black }
					}
				}) => black};

				del {
					color: #eee;
					margin-left: 0.625rem;
				}
			}

			&:nth-child(2) {
				min-width: 14.375rem;
			}

			&:last-child {
				text-align: right;
			}
		}
	}

	strong {
		font-weight: 500;
		color: ${({
			theme: {
				colors: { black }
			}
		}) => black};
	}
`;

export const Product = styled.div`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

export const Thumbnail = styled.div`
	max-width: 4.375rem;
	margin-right: 1rem;

	@media (min-width: 768px) {
		margin-bottom: 0;
		max-width: 31.25rem;
	}

	@media (min-width: 1200px) {
		max-width: calc(40% - 4.375rem);
	}

	img {
		width: 100%;
		transition: ${({ theme: { transitions } }) => transitions.default800};
	}
`;

export const Content = styled.div`
	a {
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 600;
		color: ${({
			theme: {
				colors: { black }
			}
		}) => black};
		font-size: 15px;
	}
`;

export const Tbody = styled.tbody`
	tr {
		td {
			padding: 1.875rem 0.9375rem;
			border: none;
			vertical-align: middle;
			font-size: 14px;
			font-weight: 600;
			color: ${({ theme: { colors } }) => colors.darkGray};
			border-bottom: 1px solid #ddd;

			&:first-child {
				min-width: 21.875rem;
				padding-left: 0;
			}

			&:last-child {
				text-align: right;

				a {
					font-size: 24px;

					i {
						font-size: inherit;
					}
				}
			}
		}
	}
`;

export const Thead = styled.thead`
	display: table-header-group;
	vertical-align: middle;
	border-color: inherit;

	tr {
		th {
			text-align: left;
			font-size: 12px;
			font-weight: 600;
			color: #ccc;
			border: none;
			text-transform: uppercase;
			border-bottom: 1px solid
				${({ theme: { colors } }) => colors.lightnessGray};

			&:last-child {
				text-align: right;
			}

			&:first-child {
				padding-left: 0;
			}
		}
	}
`;
