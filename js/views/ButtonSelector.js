define(['backbone', 'jquery', 'text!/js/templates/ButtonSelector.html'],
	function($B, $, template_html) { //
	  var ButtonSelector = $B.View.extend({
		template : _.template(template_html),
		events : {
		  'click .select' : "buttonSelected",
		  'click .animate' : 'animate',
		},
		initialize : function(options) {
		  this.buttons = options.buttons || [1, 2, 3];
		  this.playDelay = options.playDelay || 1000;
		  this.animating = false;
		  this.render();
		},
		render : function() {
		  this.$el.html(this.template({
			buttons : this.buttons,
		  }));
		  return this;
		},
		buttonSelected : function(e) {
		  var target = this.$(e.target);
		  if (!this.animating) {
			this.$('.btn.select').removeClass('active');
		  }
		  this.trigger('selected', target.data('value'));
		},
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