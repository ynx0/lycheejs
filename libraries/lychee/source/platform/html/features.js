
(function(lychee, global) {

	const _CONTEXT = {
		fillStyle:    '#000000',
		globalAlpha:  1.0,
		lineWidth:    1,
		strokeStyle:  '#000000'
	};

	_CONTEXT.prototype = {

		arc:          function(x, y, radius, start, end) {},
		beginPath:    function() {},
		closePath:    function() {},
		drawImage:    function(image, x, y, width, height, srcx, srcy, src_width, src_height) {},
		fill:         function() {},
		fillRect:     function(x, y, width, height) {},
		setTransform: function(x1, y1, z1, x2, y2, z2) {},
		lineTo:       function(x, y) {},
		moveTo:       function(x, y) {},
		stroke:       function() {},
		strokeRect:   function(x, y, width, height) {}

	};

	const _ELEMENT = {
		id:        '',
		className: '',
		style:     {
			width:           1337,
			height:          1337,
			backgroundColor: '#000000',
			transform: ''
		}
	};

	_ELEMENT.prototype = {

		getBoundingClientRect: function() {

			return {
				left: 1337,
				top:  1337
			};

		},

		getContext: function(context) {

			if (context === '2d') {
				return _CONTEXT;
			}

			return null;

		}

	};

	const _FEATURES = {

		innerWidth:  1337,
		innerHeight: 1337,

		CanvasRenderingContext2D: function() {},
		FileReader:               function() {},
		Storage:                  function() {},
		WebSocket:                function() {},
		XMLHttpRequest:           function() {},

		addEventListener:      function() {},
		clearInterval:         function() {},
		clearTimeout:          function() {},
		requestAnimationFrame: function() {},
		setInterval:           function() {},
		setTimeout:            function() {},

		document: {
			createElement: function(type) {

				if (type === 'canvas') {
					return _ELEMENT;
				}

				return null;

			},
			querySelectorAll: function(query) {

				if (query === '.lychee-Renderer') {
					return [ _ELEMENT ];
				}

				return null;

			},
			body: {
				appendChild: function() {}
			}
		},

		location: {
			href: 'file:///tmp/index.html'
		},

		localStorage: {
		},

		sessionStorage: {
		}

	};

	_FEATURES.FileReader.prototype.readAsDataURL = function() {};


	Object.defineProperty(lychee.Environment._FEATURES, 'html', {

		get: function() {
			return _FEATURES;
		},

		set: function(value) {
			return false;
		}

	});

})(lychee, typeof global !== 'undefined' ? global : this);
