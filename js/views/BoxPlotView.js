define(['backbone', 'jquery', 'jquerycsv'], function($B, $, csv) { //
    var BoxplotView = $B.View.extend({
        initialize : function() {
            this.data = {};
            this.vis = null;
        },
        selector: function() {
            return '#{0}'.format([this.el.id]);
        },
        render : function() {
            this.vis = this.vis
                || d3plus.viz().container(this.selector());
            // this.renderStatic(); return;
            var boxType = {
                "value" : "box",
                "mode" : "extent" // changes box/whisker from tukey to
            // extent mode
            };
            var options = {
                children : true,
            }
            var idCols = ['groupid'];
            // this sums by the id variable
            this.vis.data(this.data).type(boxType).tooltip(options).id(idCols)
                .x("name").y({
                    value : "value",
                    range : [0, 100],
                }).draw();
        },
        renderStatic : function() {
            var data = [{
                "year" : 1991,
                "name" : "alpha",
                "value" : 15
            }, {
                "year" : 1992,
                "name" : "alpha",
                "value" : 34
            }, {
                "year" : 1991,
                "name" : "alpha2",
                "value" : 17
            }, {
                "year" : 1992,
                "name" : "alpha2",
                "value" : 65
            }, {
                "year" : 1991,
                "name" : "beta",
                "value" : 10
            }, {
                "year" : 1992,
                "name" : "beta",
                "value" : 10
            }, {
                "year" : 1991,
                "name" : "beta2",
                "value" : 40
            }, {
                "year" : 1992,
                "name" : "beta2",
                "value" : 38
            }, {
                "year" : 1991,
                "name" : "gamma",
                "value" : 5
            }, {
                "year" : 1992,
                "name" : "gamma",
                "value" : 10
            }, {
                "year" : 1991,
                "name" : "gamma2",
                "value" : 20
            }, {
                "year" : 1992,
                "name" : "gamma2",
                "value" : 34
            }, {
                "year" : 1991,
                "name" : "delta",
                "value" : 50
            }, {
                "year" : 1992,
                "name" : "delta",
                "value" : 43
            }, {
                "year" : 1991,
                "name" : "delta2",
                "value" : 17
            }, {
                "year" : 1992,
                "name" : "delta2",
                "value" : 35
            }];
            var visualization = d3plus.viz().container(this.selector).data(data)
                .type("box").id("name").x("year").y("value").time("year").ui([{
                    "label" : "Visualization Type",
                    "method" : "type",
                    "value" : ["scatter", "box"]
                }]).draw();
        },
    });
    return BoxplotView;
});