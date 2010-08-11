(function($) {

	function cleanValue(el) {
		el.data('originalValue', el.val());
		el.focusin(function(){
			if(this.value == '' || this.value == el.data('originalValue'))
				this.value = '';
		});
		el.focusout(function(){
			if(this.value == '') {
				this.value = el.data('originalValue');
			}
		});
	}
	
	$.fn.cleanClick = function() {
		return this.each(function(i, el) {
			cleanValue($(el));
		});
	};
	
	$.extend( {
		cleanClick : function(ids) {
			if (typeof (ids.length) != "undefined") {
				$(ids).each(function(i, el) {
					cleanValue($(el));
				});
			}
		}
	});

})(jQuery);