sap.ui.define([], function() {
	"use strict";
     function currencyVal(value){
     	var numberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				maxFractionDigits: 2
			});
			var text = "$" + numberFormat.format(value / 1000) + " K";

			return text;
}
	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function(sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		
		delivery: function(value) {
			
		 return currencyVal(value);
		},
		getResult: function(value1, value2) {
            
			var val = value1 - value2;
			var finalval = Math.abs(val);
			var fval = currencyVal(finalval);
			return fval;
		},
		getColor: function(value1, value2) {

			var val = value1 - value2;
			var fValue = Math.abs(val);
			try {
				if (fValue < 33000) {
					return "Good";
				} else if (fValue < 66000) {
					return "Critical";
				} else {
					return "Error";
				}
			} catch (err) {
				return "Neutral";
			}
		},
		getIcon: function(value1, value2) {
			var val = value1 - value2;
			var fValue = Math.abs(val);
			try {
				if (fValue < 33000) {
					return "sap-icon://status-positive";
				} else if (fValue < 66000) {
					return "sap-icon://status-critical";
				} else {
					return "sap-icon://status-error";
				}
			} catch (err) {
				return "Neutral";
			}
		}
	};

});