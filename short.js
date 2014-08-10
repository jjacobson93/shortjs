function abs(x) {
	return Math.abs(x);
}

function all(iterable) {
	for (var i = 0; i < iterable.length(); i++) {
		if (!iterable[i])
			return false;
	}
	return true;
}

function bin(i) {
	return i.toString(2);
}

function bool(x) {
	return !!x;
}

function chr(i) {
	return String.fromCharCode(i);
}

function deepClone(o) {
	return JSON.parse(JSON.stringify(o));
}

function dir(o) {
	return Object.keys(o);
}

function float(x) {
	return parseFloat(x);
}

function hex(x) {
	return x.toString(16);
}

function int(x) {
	return parseInt(x);
}

function isinstance(o, i) {
	return o instanceof i;
}

function len(o) {
	return o.length;
}

function map(f, o) {
	return o.map(f);
}

function max() {
	if (arguments.length == 1) {
		if (arguments[0] instanceof Array)
			arguments = arguments[0];
	}

	var currMax = arguments[0];
	for (var i = arguments.length - 1; i >= 0; i--) {
		if (arguments[i] > currMax) {
			currMax = arguments[i];
		}
	};
	return currMax;
}

function min() {
	if (arguments.length == 1) {
		if (arguments[0] instanceof Array)
			arguments = arguments[0];
	}

	var currMin = arguments[0];
	for (var i = arguments.length - 1; i >= 0; i--) {
		if (arguments[i] < currMin) {
			currMin = arguments[i];
		}
	};
	return currMin;
}

function range(start, stop, step){
    if (typeof stop=='undefined'){
        // one param defined
        stop = start;
        start = 0;
    };
    if (typeof step=='undefined'){
        step = 1;
    };
    if ((step>0 && start>=stop) || (step<0 && start<=stop)){
        return [];
    };
    var result = [];
    for (var i=start; step>0 ? i<stop : i>stop; i+=step){
        result.push(i);
    };
    return result;
};

function ord(c) {
	return c.charCodeAt();
}

