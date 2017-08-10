define([], function() {
  /**
   * utility functions
   * 
   * Include this module as a depdendency to gain access to common
   * functions.
   */
  var util = {
    /**
	 * format strings using "some string {foo}".format({foo: 'value'});
 	 * @memberOf util
	 */
	format : function(string) {
	  args = arguments.length == 2 ? arguments[1] : arguments.slice(1);
	  return string.replace(/{(\w+)}/g, function(match, idx) {
		return typeof args[idx] != "undefined" ? args[idx] : match;
	  });
	},
  };
  // attach util.format to the String object. This way every String
  // automatically has a .format method 
  String.prototype.format = function() {
	var args = arguments.length == 1 ? arguments[0] : arguments;
	return util.format(this, args);
  };
  return util;
});
