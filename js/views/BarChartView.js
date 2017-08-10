define(['backbone', 'jquery', 'jquerycsv'], function($B, $, csv) {
  /**
   * d3plus bar chart
   * 
   * This module implements the BarChartView. The following options
   * are available:
   * 
   * .data - the data object to set on the bar chart
   * .dataid - the name of the .id() variable
   * .datax - the name of the .x() variable
   * .datay - the name fo the .y() variable
   * .xlabel - the label for the x axis
   * .ylabel - the label for the y axis
   * .columnLabels - a map of column:text labels
   * 
   * Usage:
   * 
   * var barchart = new views.BarChartView(options);
   * barchart.render()
   * 
   * @see http://backbonejs.org/#View for details on View objects
   * @see http://d3plus.org/examples/basic/32517cfde67270c99092/ for details
   *      on bar chart plots
   */
  var BarChartView = $B.View.extend({
	/**
	 * initialize the plot
	 */
	initialize : function(options) {
	  this.vis = null;
	  this.data = options.data || this.sample_data();
	  this.dataid = options.dataid || 'name';
	  this.datax = options.datax || 'year';
	  this.datay = options.datay || 'value';
	  this.xlabel = options.xlabel;
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
	  var view = this;
	  var selector = this.selector();
	  this.$(selector).empty();
	  var visualization = d3plus.viz().container(selector).data(view.data)
		  .type("bar") // bar chart
		  .legend(true) // legend
		  .id(view.dataid) // id variable
		  .color(view.datax) // color variable
		  .format({
			"text" : function(label, key) {
			  return (view.columnLabels[label] || label);
			},
		  }) // text format
		  .x({
			value : view.datax,
			label : view.xlabel,
			grid: false,
		  }) // x axis
		  .y({
			value : view.datay,
			label : view.ylabel
		  }) // y axis
		  .order(view.datay) // sort
		  .draw();
	},
	/**
	 * sample data to render a default plot without retrieving new data
	 * source: d3plus.org 
	 */
	sample_data : function() {
	  var data = [{
		"year" : 1991,
		"name" : "alpha",
		"value" : 15
	  }, {
		"year" : 1991,
		"name" : "beta",
		"value" : 10
	  }, {
		"year" : 1991,
		"name" : "gamma",
		"value" : 5
	  }, {
		"year" : 1991,
		"name" : "delta",
		"value" : 50
	  }, {
		"year" : 1992,
		"name" : "alpha",
		"value" : 20
	  }, {
		"year" : 1992,
		"name" : "beta",
		"value" : 10
	  }, {
		"year" : 1992,
		"name" : "gamma",
		"value" : 10
	  }, {
		"year" : 1992,
		"name" : "delta",
		"value" : 43
	  }, {
		"year" : 1993,
		"name" : "alpha",
		"value" : 30
	  }, {
		"year" : 1993,
		"name" : "beta",
		"value" : 40
	  }, {
		"year" : 1993,
		"name" : "gamma",
		"value" : 20
	  }, {
		"year" : 1993,
		"name" : "delta",
		"value" : 17
	  }, {
		"year" : 1994,
		"name" : "alpha",
		"value" : 60
	  }, {
		"year" : 1994,
		"name" : "beta",
		"value" : 60
	  }, {
		"year" : 1994,
		"name" : "gamma",
		"value" : 25
	  }, {
		"year" : 1994,
		"name" : "delta",
		"value" : 32
	  }];
	},
  });
  return BarChartView;
});