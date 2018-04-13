import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './style.js';

class Button extends Component {
	render() {
		const { children, onclick, type } = this.props;

		return (
			<button className={cn(style, type)} onClick={onclick}>
				{children}
			</button>
		);
	}
}

Button.PropTypes = {
	onclick: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
};

export default Button;
