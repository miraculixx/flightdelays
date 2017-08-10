define(['backbone', 'jquery', 'text!../templates/ButtonSelector.html'],
	/**
	 * provides a multi-valued button widget
	 * 
	 * Available options
	 * 
	 * .buttons - a list of button options. defaults to [1, 2, 3]
	 * .playDelay - delay in milliseconds when using .animate(). defaults to 1000
	 * 
	 * Usage:
	 *   
	 * var selector = new ButtonSelector(options);
	 * selector.render();
	 * 
	 * To animate button clicks one by one in .playDelay intervals call
	 * 
	 * selector.animate()
	 * 
	 * This will trigger the selected event on selector which you can
	 * catch as follows:
	 * 
	 * selector.on('selected', function() { ... });
	 * 
	 * @see http://backbonejs.org/#View for details on Views
	 * @see http://backbonejs.org/#Events for details on event handling
	 * @see http://getbootstrap.com/ on details of Bootstrap buttons
	 * 
	 */
	function($B, $, template_html) { //
	  var ButtonSelector = $B.View.extend({
		template : _.template(template_html),
		events : {
		  'click .select' : "buttonSelected",
		  'click .animate' : 'animate',
		},
		/**
		 * initialize the object
		 */
		initialize : function(options) {
		  this.buttons = options.buttons || [1, 2, 3];
		  this.playDelay = options.playDelay || 1000;
		  this.animating = false;
		  this.render();
		},
		/**
		 * render the object
		 */
		render : function() {
		  this.$el.html(this.template({
			buttons : this.buttons,
		  }));
		  return this;
		},
		/**
		 * event handler vor button clicked
		 */
		buttonSelected : function(e) {
		  var target = this.$(e.target);
		  if (!this.animating) {
			this.$('.btn.select').removeClass('active');
		  }
		  this.trigger('selected', target.data('value'));
		},
		/**
		 * animate button clicks, one by one
		 * 
		 * triggers the selected event
		 */
		animate : function(e) {
		  // FIXME make progress dependent on external event, not time
		  // then we can be sure that the user has seen the effect
		  var view = this;
		  var htmlButtons = this.$('.btn.select');
		  if (this.animating)
			return;
		  this.animating = true;
		  _.each(this.buttons, function(b, i) {
			_.delay(function() {
			  htmlButtons.removeClass('active');
			  this.$(htmlButtons[i]).toggleClass('active');
			  this.$(htmlButtons[i]).trigger('click');
			}, view.playDelay * i);
		  });
		  _.delay(function() {
			this.animating = false;
		  }, view.playDelay * (this.buttons.length + 1));
		},
	  });
	  return ButtonSelector;
	});