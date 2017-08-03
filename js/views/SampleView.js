define(['backbone', 'dimple'], function($B, dimple) { //
  // sample view for testing
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