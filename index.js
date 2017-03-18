const fastdom = require('fastdom');


module.exports = {
	throttleMeasure (callback) {
		var sheduled = false,
			shedulesArgs;
			
		return function (...args) {
			shedulesArgs = args;
			if (sheduled) return;
			sheduled = fastdom.measure(function () {
				sheduled = false;
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
				sheduled = false;
				callback(...shedulesArgs);
			})
		}
	}
}