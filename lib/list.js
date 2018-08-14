module.exports = class list {
	constructor(opts = {}) {
		this._opts = Object.assign({}, {
			valuetype: "all"
		}, opts);
		this._list = [];
	}

	length() {
		return this._list.length;
	}

	set(index, value) {
		if(typeof index !== "number") {
			throw new TypeError("the argument index must be a number");
		}
		if(this._opts.valuetype !== "all" && typeof value !== this._opts.valuetype) {
			throw new TypeError("the argument value must be a(n) " + this._opts.valuetype);
		}
		if(!this.exists(index)) {
			throw new Error("the index of " + index + " is out of bounds");
		}

		this._list[index] = value;
	}

	add(value) {
		if(this._opts.valuetype !== "all" && typeof value !== this._opts.valuetype) {
			throw new TypeError("the argument value must be a(n) " + this._opts.valuetype);
		}

		return this._list.push(value) - 1;
	}

	get(index) {
		if(typeof index !== "number") {
			throw new TypeError("the argument index must be a number");
		}

		return this._list[index];
	}

	exists(index) {
		if(typeof index !== "number") {
			throw new TypeError("the argument index must be a number");
		}

		return index >= 0 && index < this._list.length;
	}

	remove(index) {
		if(typeof index !== "number") {
			throw new TypeError("the argument index must be a number");
		}
		if(!this.exists(index)) {
			throw new Error("the index of " + index + " is out of bounds");
		}

		this._list.splice(index);
	}

	delete(index) {
		this.remove(index);
	}

	clear() {
		this._list = [];
	}

	empty() {
		this.clear();
	}

	sort(func) {
		return this._list = this._list.sort(func);
	}

	includes(value) {
		return this._list.includes(value);
	}

	join(separator) {
		return this._list.join(separator);
	}
}