	jQuery.validator.addMethod("isZipCode", function(value, element) {
	var specialChar = /`~!@#$^&*()=|{}':;',\\[\\].<>?~！@#￥……&*（）——|{}【】‘；：”“'。，、？/;
	return this.optional(element) || (specialChar.test(value));
}, "不能输入特殊字符");