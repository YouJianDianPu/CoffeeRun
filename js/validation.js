(function(window){
	'use strict';

	var App = window.App || {};

	var Validation = {
		isCompanyEmail: function(email){
			return /.+@bignerdranch\.com$/.test(email);
		},
		isNotTrue: function(str, num){
			return !(/decaf/.test(str)||num > 20);
		}
	};

	App.Validation = Validation;
	window.App = App;

})(window);