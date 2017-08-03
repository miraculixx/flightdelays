define([], function() {
  var util = {
    /**
	 * format strings
 	 * @memberOf util
	 */
	format : function(string) {
	  args = arguments.length == 2 ? arguments[1] : arguments.slice(1);
	  return string.replace(/{(\w+)}/g, function(match, idx) {
		return typeof args[idx] != "undefined" ? args[idx] : match;
	  });
	},
  };
  String.prototype.format = function() {
	var args = arguments.length == 1 ? arguments[0] : arguments;
	return util.format(this, args);
  };
  return util;
});
