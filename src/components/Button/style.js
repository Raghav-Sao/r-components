import { css } from 'emotion';
import colors from '../../styles/colors';

const style = css`
	color: white;
	min-width: 100px;
	min-height: 40px;
	border: 1px solid transparent;
	border-radius: 2px;

	&.success {
		background: ${colors.success};
	}

	&.error {
		background: ${colors.error};
	}

	&.info {
		background: ${colors.info};
	}

	&:hover {
		opacity: 0.8;
	}

	&:active {
	}

	&:focus {
		outline: 0;
	}
`;

export default style;
