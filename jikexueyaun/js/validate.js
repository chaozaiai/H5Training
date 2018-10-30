(function($){
	$.validator.config({
	rules:{
		stringCheck: [/^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/, "只能包含中文、英文、数字、下划线等字符"]
	}
	});
	
})(jQuery);