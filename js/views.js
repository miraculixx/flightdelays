/**
 * This module sets up a central place for access to Views (widgets)
 * 
 * set a dependency on this module to gain easy access to any view defines in
 * the js/views directory. To keep this working for new views, be sure to add
 * the new view class here.
 */
define(["views/BoxPlotView", //
"views/ButtonSelector",//
"views/DropdownSelector", //
'views/MapView', //
'views/MapViewD3', //
'views/BarChartView',//
'views/LinePlotView'], function(BoxPlotView, ButtonSelector, DropdownSelector,
	MapView, MapViewD3, BarChartView, LinePlotView) {
  /**
   * load all views into a combined object. this makes it easier to include
   * views in other modules by adding a dependency on views.js and then
   * accessing the view as views.ViewName
   */
  var views = {
	BoxPlotView : BoxPlotView,
	ButtonSelector : ButtonSelector,
	DropdownSelector : DropdownSelector,
	MapView : MapView,
	MapViewD3 : MapViewD3,
	BarChartView : BarChartView,
	LinePlotView : LinePlotView,
  };
  return views;
});