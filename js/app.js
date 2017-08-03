define(['backbone', 'jquery', 'views', 'util', 'marked'], function($B, $,
	views, util, marked) {
  var App = $B.View.extend({
	/**
	 * @memberOf App
	 */
	initialize : function() {
	  this.render();
	},
	render : function() {
	  var view = this;
	  this.renderTextBlocks();
	  this.renderPlots();
	  return;
	  this.renderDelayCauseByYears();
	  return;
	  // this.renderDelayDistribution();
	  this.renderDelaysByAirport();
	  this.renderMap();

	},
	renderTextBlocks : function() {
	  // render text blocks
	  $('[data-textmd]').each(function(i, el) {
		var mdfile = $(el).data('textmd');
		$.get(mdfile, function(text) {
		  $(el).append(marked(text));
		});
	  });
	},
	renderPlots : function() {
	  $('[data-plot]').each(function(i, el) {
		var el = $(el);
		var PlotView = views[el.data('plot')];
		var plot = new PlotView({
		  el: el,
		  dataid: el.data('id'), //line, bar
		  datax: el.data('x'), // line, bar
		  datay: el.data('y'), // line, bar
		  unitid: el.data('unitid'), //map
          column: el.data('column'), //map
		});
		var datafile = el.data('file');
		var shouldParse = el.attr('data-noparse') ? false : true;
		$.get(datafile, function(csvtext) {
		  var data = $.csv.toObjects(csvtext, {
			onParseValue : shouldParse ? $.csv.hooks.castToScalar : undefined,
		  });
		  plot.data = data;
		  plot.render();
		});
	  });
	},
	renderDelayCauseByYears : function() {
	  var lineplot = new views.LinePlotView({
		el : "#cause_plot",
	  });
	  $.get('../data/delays_cause_year.csv', function(csvtext) {
		var data = $.csv.toObjects(csvtext, {
		  onParseValue : $.csv.hooks.castToScalar,
		});
		lineplot.data = data;
		lineplot.render();
	  });
	},
	renderDelayDistribution : function() {
	  var histogram = new views.BarChartView({
		el : "#histogram",
	  });
	  histogram.render();
	},
	renderDelaysByAirport : function() {
	  var sample = new views.BoxPlotView({
		el : '#boxplot',
	  });
	  $.get('../data/delays_2003.csv', function(csvtext) {
		var data = $.csv.toObjects(csvtext, {
		  onParseValue : $.csv.hooks.castToScalar
		});
		sample.data = data;
		sample.render();
	  });
	  var selector = new views.ButtonSelector({
		el : '#bpyears',
		buttons : _.range(2003, 2017 + 1),
	  });
	  var airlineSelector = new views.DropdownSelector({
		el : '#bpairlines',
		actions : ['All', 'Top 10 by flights', 'Top 10 by weather delays'],
		title : ['Airlines'],
	  });
	  airlineSelector.on('selected', function(action) {
		alert(action);
	  });
	  selector.on('selected', function(value) {
		$.get('data/delays_{0}.csv'.format([value]), function(csvtext) {
		  var data = $.csv.toObjects(csvtext, {
			onParseValue : $.csv.hooks.castToScalar
		  });
		  sample.data = data;
		  sample.render();
		});
	  });
	},
	renderMap : function() {
	  var map = new views.MapViewD3({
		el : '#mapview',
	  });
	  $.get('data/airport_flights.csv', function(csvtext) {
		var data = $.csv.toObjects(csvtext);
		map.data = data;
		map.column = '2012';
		map.render();
	  });
	  var selector = new views.ButtonSelector({
		el : '#mapyears',
		buttons : _.range(2003, 2017 + 1),
	  });
	  selector.on('selected', function(value) {
		map.column = value;
		map.render();
	  });
	},
  });
  return App;
});