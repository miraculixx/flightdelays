define(['backbone', 'jquery', 'jquerycsv'], function($B, $, csv) {
  /**
   * d3plus line plot
   * 
   * This module implements the LinePlotView. The following options
   * are available:
   * 
   * .data - the data object to set on the line plot
   * .ylabel - the y axis label
   * .columnLabels - a map of column:text labels
   * 
   * Usage:
   * 
   * var lineplot = new views.LinePlotView(options);
   * lineplot.render()
   * 
   * @see http://backbonejs.org/#View for details on View objects
   * @see http://d3plus.org/examples/basic/9037371/ for details
   *      on line plots
   */
  var LinePlotView = $B.View.extend({
	/**
	 * initialize the object
	 */
	initialize : function(options) {
	  this.vis = null;
	  this.column = null;
	  this.data = options.data || this.sampleData();
	  this.ylabel = options.ylabel;
	  this.columnLabels = options.labels || {};
	},
	/**
	 * return the #selector of the view's DOM element
	 */
	selector : function() {
	  return '#{0}'.format([this.el.id]);
	},
	/**
	 * render the plot according to the .options passed on creation
	 */
	render : function() {
	  // http://d3plus.org/examples/basic/9037371/
	  // sample data array
	  var view = this;
	  var selector = this.selector();
	  this.$(selector).empty();
	  // instantiate d3plus
	  var visualization = d3plus.viz().container(selector) // container DIV to
	  // hold the
	  // visualization
	  .data({
		stroke: {
		  width: 2,
		},
		value: view.data // data to use with the visualization
	  })
	  .type("line") // visualization type
	  .legend(true).color("name").id("name") // key for which our data is
	  // unique on
	  .text("name") // key to use for display text
	  .format({
		"text" : function(label, key) {
		  return (view.columnLabels[label] || label);
		},
	  }) // format
	  .y({
		value : "value",
		label : this.ylabel,
		grid : false
	  }) // key to use for y-axis
	  .x({
		value : "year",
		grid : false,
	  }) // key to use for x-axis
	  .draw() // finally, draw the visualization!
	},
	/**
	 * sample data to render a default plot without retrieving new data
	 * source: d3plus.org 
	 */
	sampleData : function() {
	  var sample_data = [{
		"year" : 1991,
		"name" : "alpha",
		"value" : 17
	  }, {
		"year" : 1992,
		"name" : "alpha",
		"value" : 20
	  }, {
		"year" : 1993,
		"name" : "alpha",
		"value" : 25
	  }, {
		"year" : 1994,
		"name" : "alpha",
		"value" : 33
	  }, {
		"year" : 1995,
		"name" : "alpha",
		"value" : 52
	  }, {
		"year" : 1991,
		"name" : "beta",
		"value" : 36
	  }, {
		"year" : 1992,
		"name" : "beta",
		"value" : 32
	  }, {
		"year" : 1993,
		"name" : "beta",
		"value" : 40
	  }, {
		"year" : 1994,
		"name" : "beta",
		"value" : 58
	  }, {
		"year" : 1995,
		"name" : "beta",
		"value" : 13
	  }, {
		"year" : 1991,
		"name" : "gamma",
		"value" : 24
	  }, {
		"year" : 1992,
		"name" : "gamma",
		"value" : 27
	  }, {
		"year" : 1994,
		"name" : "gamma",
		"value" : 35
	  }, {
		"year" : 1995,
		"name" : "gamma",
		"value" : 40
	  }];
	  return sample_data;
	}
  });
  return LinePlotView;
});