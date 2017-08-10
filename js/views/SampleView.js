define(['backbone', 'dimple'], function($B, dimple) { //
  /**
   * sample view for testing purpose
   * 
   * This module implements a sample view. Do not use for real apps.
   * 
   * Usage:
   * 
   * var sampleview = new SampleView(options); sampleview.render()
   * 
   * @see http://backbonejs.org/#View for details on View objects
   */
  var SampleView = $B.View.extend({
	initialize : function() {
	},
	render : function() {
	  var svg = dimple.newSvg("body", 800, 600);
	  var data = [{
		"Word" : "Hello",
		"Awesomeness" : 2000
	  }, {
		"Word" : "World",
		"Awesomeness" : 3000
	  }];
	  var chart = new dimple.chart(svg, data);
	  chart.addCategoryAxis("x", "Word");
	  chart.addMeasureAxis("y", "Awesomeness");
	  chart.addSeries(null, dimple.plot.bar);
	  chart.draw();
	},
  });
  return SampleView;
});