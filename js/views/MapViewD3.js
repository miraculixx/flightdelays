define(['backbone', 'jquery', 'jquerycsv'], function($B, $, csv) {
  /**
   * d3 geomap map view
   */
    var MapView = $B.View.extend({
        initialize : function(options) {
            this.vis = null;
            this.column = options.column;
            this.unitid = options.unitid || 'fips';
            this.data = options.data;
            this.geofile = options.geofile || '//d3-geomap.github.io/d3-geomap/topojson/countries/USA.json';
        },
        selector : function() {
            return '#{0}'.format([this.el.id]);
        },
        render : function() {
            // source https://d3-geomap.github.io/map/choropleth/us-states/
            var view = this;
            var selector = this.selector();
            $(selector).empty();
            var map = d3.geomap.choropleth()
                .geofile(this.geofile)
                .projection(d3.geo.albersUsa).column(this.column)
                .unitId(this.unitid).scale(600).legend(true);
            d3.select(selector).datum(view.data).call(map.draw, map);
        },
    });
    return MapView;
});
