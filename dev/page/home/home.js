'use strict';
define(['module', 'common/kernel/kernel', 'common/vue/vue'], function(module, kernel, Vue) {
	var thisPage = module.id.replace(/^[^/]+\/|\/[^/]+/g, ''),
		dom = $('#' + thisPage);
	var i = 0;
	dom.find('>a').on('click', function() {
		i++;
		kernel.openPanel('samplePanel', i);
	});

	var app6 = new Vue({
	  el: '#app-6',
	  data: {
	    message: 'Hello Vue!'
	  }
	})
	return {
		onload: function(force) {
			// if (force) {
			// 	kernel.alert('loading ' + thisPage);
			// }
		},
		onunload: function() {
			//console.log('leaving ' + thisPage);
		}
	};
});