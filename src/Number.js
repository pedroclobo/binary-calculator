class BaseNumber {
	constructor(value, base = 10) {
		// Double ~ parses number as 32 bit 2 complement
		// https://stackoverflow.com/questions/37022434/how-do-i-parse-a-twos-complement-string-to-a-number
		if (typeof value === "string") {
			this.value = ~~parseInt(value.replaceAll(" ", ""), base);
		} else {
			this.value = value;
		}
	}

	getValue() {
		return this.value;
	}

	toString(base) {
		function addWhiteSpace(value, interval) {
			var ret = "";

			for (var i = 0; i < value.length; i++) {
				if (i % interval === 0) {
					ret += " ";
				}
				ret += value[i];
			}

			return ret;
		}

		if (base === 2) {
			if (this.value < 0) {
				var value = this.value + 0x100000000;
				return "0b" + addWhiteSpace(value.toString(base), 4);
			}
			return "0b" + addWhiteSpace(this.value.toString(base), 4);
		} else if (base === 16) {
			if (this.value < 0) {
				var value = this.value + 0x100000000;
				return "0x" + addWhiteSpace(value.toString(base), 4).toUpperCase();
			}
			return "0x" + addWhiteSpace(this.value.toString(base), 4).toUpperCase();
		} else if (base === 10) {
			return this.value.toString();
		}
	}
}

export default BaseNumber;
