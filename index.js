const fastdom = require('fastdom');


module.exports = {
	throttleMeasure (callback) {
		var sheduled = false,
			shedulesArgs;
			
		return function (...args) {
			shedulesArgs = args;
			if (sheduled) return;
			sheduled = fastdom.measure(function () {
				shdeuled = false;
				callback(...shedulesArgs);
			})
		}
	},


	throttleMutate (callback) {
		var sheduled = false,
			shedulesArgs;

		return function (...args) {
			shedulesArgs = args;
			if (sheduled) return;
			sheduled = fastdom.mutate(function () {
				shdeuled = false;
				callback(...shedulesArgs);
			})
		}
	}
}