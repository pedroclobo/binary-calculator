import React from "react";

import Number from "./Number.js";

class CalculatorInputField extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		var number = new Number(e.target.value, 2);
		this.props.action(this.props.id, number.getValue());
	}

	render() {
		return (
			<input
				className="inputField"
				maxlength="39"
				onChange={this.handleChange}
			></input>
		);
	}
}

export default CalculatorInputField;
