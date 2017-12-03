(function(window){
	'use strict';

	var App = window.App || {};
	var $ = window.jQuery;

	function CheckList(selector){
		if(!selector){
			throw new Error('NO SELECTOR PROVIDED!');
		}

		this.$element = $(selector);
		if(this.$element.length === 0){
			throw new Error('COULD NOT FIND ELEMENT WITH SELECTOR: ' + selector);
		}
	}

	CheckList.prototype.addClickHnadler = function(fn){
		this.$element.on('click', 'input', function(e){
			var email = e.target.value;
			this.removeRow(email);
			fn(email);
		}.bind(this));
	}

	CheckList.prototype.addRow = function(coffeeOrder){
		//移除匹配相应邮箱地址的现有行
		this.removeRow(coffeeOrder.emailAddress);

		var rowElement = new Row(coffeeOrder);

		this.$element.append(rowElement.$element);
	}

	CheckList.prototype.removeRow = function(email){
		this.$element
			.find('[value="' + email + '"]')
			.closest('[data-coffee-order="checkbox"]')
			.remove();
	}

	function Row(coffeeOrder){
		var $div = $('<div></div>', {
			'data-coffee-order': 'checkbox', 
			'class': 'checkbox'
		});
		var $label = $('<label></label>');
		var $checkbox = $('<input></input>', {
			type: 'checkbox',
			value: coffeeOrder.emailAddress
		});
		var $description = coffeeOrder.size + ' ';
		$description += coffeeOrder.flavor + ' ';
		$description += coffeeOrder.coffee + ', ';
		$description += '(' + coffeeOrder.emailAddress + ')';
		$description += '[ ' + coffeeOrder.strength + 'x ]';

		$label.append($checkbox);
		$label.append($description);
		$div.append($label);

		this.$element = $div;

	}

	App.CheckList = CheckList;
	window.App = App;
})(window);