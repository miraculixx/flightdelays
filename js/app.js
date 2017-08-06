define(['backbone', 'jquery', 'views', 'util', 'marked', 'settings'], function($B, $,
	views, util, marked, settings) {
  /**
   * Main application module. Provides the main logic to run the application.
   */
  var App = $B.View.extend({
	/**
	 * @memberOf App
	 */
	initialize : function() {
	  this.render();
	},
	/**
	 * render all explanatory texts and plots 
	 */
	render : function() {
	  var view = this;
	  this.renderTextBlocks();
	  this.renderPlots();
	},
	/**
	 * render text blocks
	 * 
	 * This reads the text files from the url provided in the data-textmd
	 * attribute on any element, parses it using marker (a markdown to
	 * html processor) and adds the html to the element.
	 * 
	 * This way it is much easier to write explanatory text in plain 
	 * English and let marker worry about translating this into proper
	 * html. It also helps to keep the index.html tidy.
	 */
	renderTextBlocks : function() {
	  // render text blocks
	  $('[data-textmd]').each(function(i, el) {
		var mdfile = $(el).data('textmd');
		$.get(mdfile, function(text) {
		  $(el).append(marked(text));
		});
	  });
	},
	/**
	 * render plots
	 * 
	 * This renders all plots according to the data-plot attribute.
	 * Available plots are all listed in views.js, the data-plot value
	 * is the class name. The data file URL is given by the data-file
	 * attribute.  
	 * 
	 * Additional attributes can be set for some plots:
	 * 
	 * For line and bar charts:
	 * 
	 * data-id - the d3plus id attribute
	 * data-datax - the x variable name
	 * data-datay - the y variable name
	 * data-xlabel - the xlabel variable name
	 * data-ylabel - the ylabel variable name
	 * 
	 * For the map plot:
	 * 
	 * data-unitid - the unitid variable name
	 * data-column - the column variable name
	 * 
	 * The csv data by default is transformed to proper scalar values
	 * independent of whether the data is quoted in the csv file. That
	 * is numeric values like 0.20 or "0.20" are returned as JavaScript
	 * numeric types. Add data-noparse=1 to switch off this feature.
	 * 
	 */
	renderPlots : function() {
	  $('[data-plot]').each(function(i, el) {
		var el = $(el);
		var PlotView = views[el.data('plot')];
		var plot = new PlotView({
		  el: el,
		  dataid: el.data('id'), //line, bar
		  datax: el.data('x'), // line, bar
		  datay: el.data('y'), // line, bar
		  xlabel: el.data('xlabel'), // line, bar
		  ylabel: el.data('ylabel'), // line, bar 
		  unitid: el.data('unitid'), //map
          column: el.data('column'), //map
          labels: settings.columnLabels, 
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
  });
  return App;
});