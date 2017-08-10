define(['backbone', 'jquery', 'jquerycsv'], function($B, $, csv) {
  /**
   * d3 map view
   * 
   * This module implements the MapView.
   * 
   * DEPRECATED - it does not work properly. Left as a reminder.
   * 
   * this works technically, but the map is just a bunch of crazy lines after
   * spending some 3 hours experimenting with different geojson maps, I found
   * http://d3-geomap.github.io/map/choropleth/us-states/ which worked, see
   * MapViewD3.
   * 
   * Links found during investigation http://mapshaper.org/
   * https://www.acaspotlight.org/king-v-burwell.html
   * https://www.acaspotlight.org/maps/UStopo.json
   * https://github.com/topojson/topojson https://github.com/topojson/us-atlas
   * http://eric.clst.org/Stuff/USGeoJSON http://code.highcharts.com/mapdata/
   * 
   */
  var MapView = $B.View.extend({
	/**
	 * initialize
	 */
	initialize : function() {
	  this.vis = null;
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
	  this.vis = this.vis || d3plus.viz();
	  var sample_data = [{
		"value" : 2315987123,
		"state" : "00294478",
		"name" : "United States"
	  }];
	  var worldmap = "http://d3plus.org/topojson/countries.json";
	  var usamap = "https://d3js.org/us-10m.v1.json";
	  var usamap = '/data/usamap.topo.json'
	  // usamap = "https://unpkg.com/us-atlas@1/us/10m.json";
	  // instantiate d3plus
	  this.vis.container(this.selector()) // container
	  // DIV
	  // to hold the
	  // visualization
	  .data(sample_data) // data to use with the visualization
	  .coords(usamap, function(data) {
		return data;
		delete data.objects.counties;
		// delete data.objects.nation;
		delete data.bbox;
		return data;
	  }) // pass
	  // topojson
	  // coordinates
	  .type("geo_map") // visualization type
	  .id("state") // key for which our data is unique on
	  .text("name") // key to use for display text
	  .color("value") // key for coloring countries
	  .tooltip("value") // keys to place in tooltip
	  .draw() // finally, draw the visualization!
	},
  });
  return MapView;
});
