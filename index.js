const fastdom = require('fastdom');


module.exports = {
	throttleMeasure : function (callback) {
		var sheduled = false,
			shedulesArgs;
			
		return function () {
			shedulesArgs = arguments;
			if (sheduled) return;
			sheduled = fastdom.measure(function () {
				sheduled = false;
				callback.apply(this, shedulesArgs);
			})
		}
	},


	throttleMutate : function (callback) {
		var sheduled = false,
			shedulesArgs;

		return function () {
			shedulesArgs = arguments;
			if (sheduled) return;
			sheduled = fastdom.mutate(function () {
				sheduled = false;
				callback.apply(this, shedulesArgs);
			})
		}
	}
}