import React from "react";

import BaseNumber from "./Number.js";

class CalculatorInputField extends React.Component {
	constructor(props) {
		super(props);

		this.state = { base: 2 };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		if (e.target.name === "number") {
			var number = new BaseNumber(e.target.value, this.state.base).getValue();
			this.props.action(this.props.id, number);
		} else if (e.target.name === "base") {
			document.getElementsByName("number")[this.props.id - 1].value = "";
			this.setState({ base: e.target.value });
		}
	}

	render() {
		return (
			<div className="inputField">
				<input
					className="numberInputField"
					name="number"
					onChange={this.handleChange}
				></input>
				<select
					className="baseInputField"
					name="base"
					onChange={this.handleChange}
				>
					<option>2</option>
					<option>16</option>
					<option>10</option>
				</select>
			</div>
		);
	}
}

export default CalculatorInputField;
