import { css } from 'emotion';
import colors from '../../styles/colors.js';

const style = css`
	background: red;
	color: white;
	display: grid;
	min-height: 45px;
	padding: 12px;
	positon: fixed;
	text-align: center;

	&.erro {
		background: red;
	}
	&.info {
		background: yellow;
	}
	&.success {
		background: ${colors.success};
	}
	& .icon-close {
		cursor: pointer;
		line-height: 45px;
		position: absolute;
		right: 20px;
		transition: transform 0.5s;
		-webkit-transition: transform 0.5s;

		&:hover {
			transform: rotate(90deg);
		}
	}
`;

export default style;
