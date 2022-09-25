import React from "react";

import CalculatorInputField from "./CalculatorInputField.js";
import CalculatorOutputField from "./CalculatorOutputField.js";
import BaseNumber from "./Number.js";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input1: 0, input2: 0, result: new BaseNumber("0") };

		this.updateValue = this.updateValue.bind(this);

		this.add = this.add.bind(this);
		this.subtract = this.subtract.bind(this);
		this.and = this.and.bind(this);
		this.or = this.or.bind(this);
		this.sl = this.sl.bind(this);
		this.sr = this.sr.bind(this);
	}

	updateValue(id, val) {
		if (id == 1) {
			this.setState({ input1: val });
		} else if (id == 2) {
			this.setState({ input2: val });
		}
	}

	add() {
		this.setState({
			result: new BaseNumber(this.state.input1 + this.state.input2),
		});
	}

	subtract() {
		this.setState({
			result: new BaseNumber(this.state.input1 - this.state.input2),
		});
	}

	and() {
		this.setState({
			result: new BaseNumber(this.state.input1 & this.state.input2),
		});
	}

	or() {
		this.setState({
			result: new BaseNumber(this.state.input1 | this.state.input2),
		});
	}

	sl() {
		this.setState({
			result: new BaseNumber(this.state.input1 << this.state.input2),
		});
	}

	sr() {
		this.setState({
			result: new BaseNumber(this.state.input1 >> this.state.input2),
		});
	}

	render() {
		return (
			<div className="calculator">
				<h1>Binary Calculator</h1>

				<CalculatorInputField id="1" action={this.updateValue} />
				<CalculatorInputField id="2" action={this.updateValue} />

				<div className="operators">
					<button className="operatorButton" onClick={this.add}>
						+
					</button>
					<button className="operatorButton" onClick={this.subtract}>
						-
					</button>
					<button className="operatorButton" onClick={this.and}>
						AND
					</button>
					<button className="operatorButton" onClick={this.or}>
						OR
					</button>
					<button className="operatorButton" onClick={this.sl}>
						SL
					</button>
					<button className="operatorButton" onClick={this.sr}>
						SR
					</button>
				</div>

				<CalculatorOutputField result={this.state.result} />
			</div>
		);
	}
}

export default Calculator;
