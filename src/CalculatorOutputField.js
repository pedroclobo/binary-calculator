import React from "react";

class CalculatorOutputField extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="outputField">
				<div>{this.props.result.toString(2)}</div>
				<div>{this.props.result.toString(16)}</div>
				<div>{this.props.result.toString(10)}</div>
			</div>
		);
	}
}

export default CalculatorOutputField;
