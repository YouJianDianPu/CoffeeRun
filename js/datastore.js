(function(window){
	'use strict';
	//app作为CoffeeRun的命名空间存储数据
	var App = window.App || {};

	function DataStore(){
		// console.log('run here now');
		this.data = {};
	}
	//添加信息
	DataStore.prototype.add = function(key, val){
		this.data[key] = val;
	}
	//根据特定键值获取信息
	DataStore.prototype.get = function(key){
		return this.data[key];
	}
	//获取所有键值对
	DataStore.prototype.getAll = function(){
		return this.data;
	}
	//删除特定信息
	DataStore.prototype.remove = function(key){
		delete this.data[key];
	}

	App.DataStore = DataStore;
	window.App = App;
})(window)