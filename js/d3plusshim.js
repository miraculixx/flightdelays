define(['d3plusd3', 'topojson', 'd3plusjs'], function(d3_dontuse, topojson, d3plus_dontuse) {
  /**
   * this module makes d3plus work with requirejs for some reason d3plus doesnt like to be
   * shimed by requirejs and requirejs thinks it is an amd module  however d3plus 
   * resolves as the d3plus.simplify function so we shim ourselves, returning the global object.
   */
  window.topojson = topojson;
  return window.d3plus;
})