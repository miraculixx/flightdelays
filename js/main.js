requirejs
	.config({
	  baseUrl : 'js',
	  paths : {
		backbone : '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min',
		underscore : '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
		jquery : '//code.jquery.com/jquery-2.2.4.min',
		jquerycsv: '//cdnjs.cloudflare.com/ajax/libs/jquery-csv/0.8.3/jquery.csv',
		text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
		marked: '//cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min',
	  },
	  shim : {
		jquery : {
		  exports : '$',
		},
		backbone : {
		  deps : ['jquery', 'underscore'],
		},
		jquerycsv: {
		  deps: ['jquery'],
		}
	  }
	});