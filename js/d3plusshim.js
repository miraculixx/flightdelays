define(['d3plusd3', 'topojson', 'd3plusjs'], function(d3_dontuse, topojson, d3plus_dontuse) {
  // for some reason d3plus doesnt like to be 
  // shimed by requirejs and requirejs thinks it is an amd module
  // however d3plus resolves as the d3plus.simplify function
  // so we shim ourselves, returning the global object. magic
  window.topojson = topojson;
  return window.d3plus;
})