define(['backbone', 'jquery', 'text!../templates/DropdownSelector.html'], function($B, $, template_html) { //
    /**
     * A dropdown select box
     */
    var DropdownSelector = $B.View.extend({
        template : _.template(template_html),
        events : {
            'click .action-select' : "actionSelected",
        },
        initialize : function(options) {
            this.title = options.title || 'Select';
            this.actions = options.actions || ['Option 1', 'Option 2'];
            this.render();
        },
        render : function() {
            this.$el.html(this.template({
                title : this.title,
                actions : this.actions,
            }));
            return this;
        },
        actionSelected : function(e) {
            var target = this.$(e.target);
            var action = target.data('action');
            this.trigger('selected', action);
            this.$('.btn-title').html("{0}<span class='caret'></span>"
                .format([action]));
        },
    });
    return DropdownSelector;
});