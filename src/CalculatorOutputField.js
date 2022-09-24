import React from "react";

class CalculatorOutputField extends React.Component {
	constructor(props) {
		super(props);
	}

	convert(num, base) {
		if (base == 2) {
			return "0b " + (num >> 0).toString(2);
		} else if (base == 16) {
			return "0x " + (num >> 0).toString(16).toUpperCase();
		} else if (base == 10) {
			return num.toString();
		}
	}

	render() {
		return (
			<div className="outputField">
				<div>{this.convert(this.props.result, 2)}</div>
				<div>{this.convert(this.props.result, 16)}</div>
				<div>{this.convert(this.props.result, 10)}</div>
			</div>
		);
	}
}

export default CalculatorOutputField;
