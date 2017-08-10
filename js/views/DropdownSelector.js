define(['backbone', 'jquery', 'text!../templates/DropdownSelector.html'], function($B, $, template_html) { //
    /**
     * A dropdown select box
     * 
	 * provides a multi-valued select box
	 * 
	 * Available options
	 * 
	 * .title - the title text to show, defaults to 'Select'
	 * .actions - the list of selectable items, defaults to ['Option 1', 'Option 2']
	 * 
	 * Usage:
	 *   
	 * var selector = new DropDownSelector(options);
	 * selector.render();
	 * 
	 * On selection of an item this triggers the selected event. Catch
	 * the event as follows:
	 * 
	 * selector.on('selected', function() { ... });
	 * 
	 * @see http://backbonejs.org/#View for details on Views
	 * @see http://backbonejs.org/#Events for details on event handling
	 * @see http://getbootstrap.com/ on details of Bootstrap select boxes
	 * 
     */
    var DropdownSelector = $B.View.extend({
        template : _.template(template_html),
        events : {
            'click .action-select' : "actionSelected",
        },
        /**
         * initialize the object
         */
        initialize : function(options) {
            this.title = options.title || 'Select';
            this.actions = options.actions || ['Option 1', 'Option 2'];
            this.render();
        },
        /**
         * render the object
         */
        render : function() {
            this.$el.html(this.template({
                title : this.title,
                actions : this.actions,
            }));
            return this;
        },
        /**
         * handler for selection events
         * 
         * this triggers the selected event
         */
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