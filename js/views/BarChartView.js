define(['backbone', 'jquery', 'jquerycsv'], function($B, $, csv) {
  var BarChartView = $B.View.extend({
	initialize : function(options) {
	  this.vis = null;
	  this.data = options.data || this.sample_data();
	  this.dataid = options.dataid || 'name';
	  this.datax = options.datax || 'year';
	  this.datay = options.datay || 'value';
	},
	selector : function() {
	  return '#{0}'.format([this.el.id]);
	},
	render : function() {
	  // http://d3plus.org/examples/basic/32517cfde67270c99092/
	  var view = this;
	  var selector = this.selector();
	  this.$(selector).empty();
	  var visualization = d3plus.viz().container(selector).data(view.data).type(
		  "bar").legend(true).id(view.dataid).color(view.datax).x(view.datax).y(view.datay).order(view.datay).draw();
	},
	sample_data: function() {
	  var data = [
                  {"year": 1991, "name":"alpha", "value": 15},
                  {"year": 1991, "name":"beta", "value": 10},
                  {"year": 1991, "name":"gamma", "value": 5},
                  {"year": 1991, "name":"delta", "value": 50},
                  {"year": 1992, "name":"alpha", "value": 20},
                  {"year": 1992, "name":"beta", "value": 10},
                  {"year": 1992, "name":"gamma", "value": 10},
                  {"year": 1992, "name":"delta", "value": 43},
                  {"year": 1993, "name":"alpha", "value": 30},
                  {"year": 1993, "name":"beta", "value": 40},
                  {"year": 1993, "name":"gamma", "value": 20},
                  {"year": 1993, "name":"delta", "value": 17},
                  {"year": 1994, "name":"alpha", "value": 60},
                  {"year": 1994, "name":"beta", "value": 60},
                  {"year": 1994, "name":"gamma", "value": 25},
                  {"year": 1994, "name":"delta", "value": 32}
                ];	  
	},
  });
  return BarChartView;
});