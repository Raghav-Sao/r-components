import React, { Component } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import style from './style';

class Alert extends Component {
	render() {
		const { children, type, show = false, toggle = true } = this.props;
		return (
			<div>
				{show && (
					<div className={cn(style, type)}>
						{children}
						{toggle && (
							<span
								className="glyphicon glyphicon-remove icon-close"
								onClick={toggle}
							/>
						)}
					</div>
				)}
			</div>
		);
	}
}

Alert.propTypes = {
	type: propTypes.oneOf(['success', 'error', 'info']),
	show: propTypes.bool.isRequired,
	toggle: propTypes.func.isRequired,
};

export default Alert;
