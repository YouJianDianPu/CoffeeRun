(function(window){
	'use strict';

	var App = window.App || {};

	function Truck(truckId, db){
		this.truckId = truckId;
		this.db = db;//db最终指向DataStore;
	}

	//添加订单
	Truck.prototype.createOrder = function(order){
		console.log('Adding order for ' + order.emailAddress);
		this.db.add(order.emailAddress, order);
	}

	//删除订单
	Truck.prototype.deliverOrder = function(customerId){
		console.log('delivering order for '+ customerId);
		this.db.remove(customerId);
	}

	//打印订单列表
	Truck.prototype.printOrders = function(){
		var customeridArray = Object.keys(this.db.getAll());
		console.log('Truck # '+ this.truckId + 'has pending orders');
		customeridArray.forEach(function(id){
			console.log(this.db.get(id));
		}.bind(this));
	}

	// Truck.prototype.print = function(){
	// 	var arr = [1, 2, 3, 4, 5, 6];
	// 	arr.forEach(function(v, i){
	// 		console.log('i: ' + i);
	// 		console.log('v: ' + v);
	// 	})
	// }
	App.Truck = Truck;
	window.App = App;
})(window);