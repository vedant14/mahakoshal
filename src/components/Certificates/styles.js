import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
	margin-top: 100px;
	margin-bottom: 100px;
	text-align: center;

	> h2 {
		margin: 50px auto;
	}
	> div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 30px;
		@media screen and (min-width: 768px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
`;

export const CertificateCard = styled.div`
	text-align: center;
	> img {
		max-width: 100%;
	}
	> p {
		padding-left: 10px;
		padding-right: 10px;
		@media screen and (min-width: 768px) {
			padding-left: 20px;
			padding-right: 20px;
		}
	}
`;
