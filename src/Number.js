class Number {
	constructor(value, base) {
		this.value = parseInt(value.replaceAll(" ", ""), base);
	}

	getValue() {
		return this.value;
	}

	toString(base) {
		function addWhiteSpace(value, interval) {
			var ret = "";

			for (var i = 0; i < value.length; i++) {
				if (i % interval == 0) {
					ret += " ";
				}
				ret += value[i];
			}

			return ret;
		}

		if (base == 2) {
			return "0b" + addWhiteSpace(this.value.toString(2), 4);
		} else if (base == 16) {
			return "0x" + addWhiteSpace(this.value.toString(16), 4).toUpperCase();
		} else if (base == 10) {
			return this.value.toString();
		}
	}
}

export default Number;
