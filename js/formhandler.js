(function(window){
	'use strict';

	var App = window.App || {};
	var $ = window.jQuery;

	function FormHandler(selector){
		if(!selector){
			throw new Error('NO SELECTOR PROVIDED');
		}
		this.$formElement = $(selector);
		if(this.$formElement.length === 0){
			throw new Error('COULD NOT FIND ELEMENT WITH SELECTOR: ' + selector);
		}
	}

	FormHandler.prototype.addSubmitHandler = function(fn){
		console.log('Setting submit handler for form');
		this.$formElement.on('submit', function(e){
			e.preventDefault();

			// var data = $(this).serializeArray();
			var data = {};
			$(this).serializeArray().forEach(function(item){
				data[item.name] = item.value;
				console.log(item.name + ' is ' + item.value);
			})
			console.log('data ==> ', data);
			fn(data);
			this.reset();
			this.elements[0].focus();
		})
	}

	FormHandler.prototype.addInputHandler = function(fn){
		console.log('Setting input handler for form');
		this.$formElement.on('input', '[name="emailAddress"]', function(e){
			var emailAddress = e.target.value;
			// console.log(fn(emailAddress));
			var message = '';
			if(fn(emailAddress)){
				e.target.setCustomValidity('');
			}else{
				message = emailAddress + ' is not an authorized email address!';
				e.target.setCustomValidity(message);
			}
		});
	};

	App.FormHandler = FormHandler;
	window.App = App;
})(window)