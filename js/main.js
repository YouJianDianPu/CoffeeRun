(function(window){
	'use strict';

	var FORM_SELECTOR = '[data-coffee-order="form"]';
	var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
	var App = window.App;
	var Truck = App.Truck;
	var DataStore = App.DataStore;
	var FormHandler = App.FormHandler;
	var Validation = App.Validation;
	var CheckList = App.CheckList;

	// 实例化
	var myTruck = new Truck('cor-001', new DataStore());
	//将myTruck暴露到全局变量中，以便让函数外能访问到函数内的变量、
	window.myTruck = myTruck;

	var checkList = new CheckList(CHECKLIST_SELECTOR);
	checkList.addClickHnadler(myTruck.deliverOrder.bind(myTruck));

	var formHandler = new FormHandler(FORM_SELECTOR);

	formHandler.addSubmitHandler(function(data){
		myTruck.createOrder.call(myTruck, data);
		checkList.addRow.call(checkList, data);
	});

	formHandler.addInputHandler(Validation.isCompanyEmail);

	console.log(formHandler);
})(window)