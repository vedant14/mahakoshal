import styled from "styled-components";
// import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
	margin-top: 100px;
	margin-bottom: 30px;
	text-align: center;
	> div#grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 70px;
		@media screen and (min-width: 768px) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	> h2 {
		margin-bottom: 100px;
	}
`;

export const TeamCard = styled.div`
	display: block;
	> h3,
	small {
		margin-top: 10px;
		margin-bottom: 0px;
	}
	> img {
		width: 100px;
		height: 100px;
		object-fit: cover;
		object-position: center; /* Center the image */
		border-radius: 50px;
	}
`;
