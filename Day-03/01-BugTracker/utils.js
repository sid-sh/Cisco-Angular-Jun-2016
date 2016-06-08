var utils = angular.module("utils", []);

utils.value("defaultTrimLength", 30);

utils.filter("trimText", function(defaultTrimLength){
	return function(text, trimLength){
		trimLength = trimLength || defaultTrimLength;
		return text.length < trimLength ? text : text.substr(0,trimLength) + '...';
	};
});

utils.value("momentApi", window.moment);

utils.filter('elapsed', function(momentApi){
	return function(date){
		return momentApi(date).fromNow();
	};
});