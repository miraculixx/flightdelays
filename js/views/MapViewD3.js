define(['backbone', 'jquery', 'jquerycsv'], function($B, $, csv) {
  /**
   * d3geomap view
   * 
   * This module implements the MapView chart. The following options are
   * available:
   * 
   * .data - the data object to set on the line plot .unitid - the .unitid()
   * variable name .geofile - the url of the topojson map, defaults to USA.json
   * 
   * Usage:
   * 
   * var mapview = new views.MapView(options); mapview.render()
   * 
   * @see http://backbonejs.org/#View for details on View objects
   * @see https://d3-geomap.github.io/map/choropleth/us-states/ for details on
   *      geomap plots
   */
  var MapView = $B.View.extend({
	/**
	 * initialize
	 */
	initialize : function(options) {
	  this.vis = null;
	  this.column = options.column;
	  this.unitid = options.unitid || 'fips';
	  this.data = options.data;
	  this.geofile = options.geofile
		  || '//d3-geomap.github.io/d3-geomap/topojson/countries/USA.json';
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
	  // source https://d3-geomap.github.io/map/choropleth/us-states/
	  var view = this;
	  var selector = this.selector();
	  $(selector).empty();
	  var map = d3.geomap.choropleth().geofile(this.geofile).projection(
		  d3.geo.albersUsa).column(this.column).unitId(this.unitid).scale(600)
		  .legend(true);
	  d3.select(selector).datum(view.data).call(map.draw, map);
	},
  });
  return MapView;
});
