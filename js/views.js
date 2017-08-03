define([//
        "views/BoxPlotView", //
        "views/ButtonSelector",//
        "views/DropdownSelector", //
        'views/MapView',
        'views/MapViewD3',
        'views/BarChartView',
        'views/LinePlotView'],
	function(BoxPlotView, ButtonSelector, DropdownSelector, MapView, MapViewD3, BarChartView, LinePlotView) {
	  var views = {
		BoxPlotView : BoxPlotView,
		ButtonSelector : ButtonSelector,
		DropdownSelector: DropdownSelector,
		MapView: MapView,
		MapViewD3: MapViewD3,
		BarChartView: BarChartView,
		LinePlotView: LinePlotView,
	  };
	  return views;
	});