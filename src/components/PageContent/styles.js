import styled from "styled-components";
// import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
	margin-bottom: 30px;
	.content {
		width: 90%;
		@media screen and (min-width: 768px) {
			width: 70%;
		}

		text-align: ${(props) => (props.center === true ? `center` : `left`)};
		margin: 80px auto;
		> img {
			max-width: 100%;
			object-fit: contain;
			height: fit-content;
		}
	}
`;
