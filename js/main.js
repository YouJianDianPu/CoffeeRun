(function(window){
	'use strict';

	var FORM_SELECTOR = '[data-coffee-order="form"]';
	var App = window.App;
	var Truck = App.Truck;
	var DataStore = App.DataStore;
	var FormHandler = App.FormHandler;

	// 实例化
	var myTruck = new Truck('cor-001', new DataStore());
	//将myTruck暴露到全局变量中，以便让函数外能访问到函数内的变量、
	window.myTruck = myTruck;

	var formHandler = new FormHandler(FORM_SELECTOR);
	formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
	console.log(formHandler);
})(window)