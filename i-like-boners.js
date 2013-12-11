$(function (e){
		
	navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                              navigator.mozGetUserMedia || navigator.msGetUserMedia;
	
	if (navigator.getUserMedia) {
	    var videoRecorder = $('video').get(0);
    
	    window.cancelRequestAnimationFrame = window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || 
	                                         window.mozCancelRequestAnimationFrame || window.msCancelRequesetAnimationFrame; 
	                                          
	    navigator.getUserMedia({video: true}, function(stream) {
	              videoRecorder.src = window.URL.createObjectURL(stream);
	              videoRecorder.play();
	    }, function(e) {
	    	console.error(e);
	    });
	} 
	
	var snd = new Audio("We-Like-to-Party.mp3");
		snd.addEventListener('ended', function() {
    		this.currentTime = 0;
 			this.play();
		}, false);
	   	snd.addEventListener('canplay', function() { 
			this.play();   		
	   	});
	   	snd.src = "We-Like-to-Party.mp3";
	
	var  $body = $('body')
		,$window = $(window);

	var count = Math.floor($(document).height()/27 * $window.width()/20);
	var llamas = ['', '_albino', '_fancy', '_golden', '_king', '_spartan', '_super', '_superalbino', '_wizard'];

	//todo: throttle-debounce when i'm not being lazy as fuck.
	$window.resize(function () {
		$('.llama').remove();
		for (var i = 0; i < count; i++) {
			var llama_index = Math.floor((Math.random(10)*llamas.length));
			$llama = $('<img style="z-index: 0; display:inline-block;" class="llama ' +(i%3 === 0 ? 'weird' : '') +'" src="llamas/llama'+llamas[llama_index]+'.gif" />');
			$llama.appendTo($body);
		}
	}).resize();
	function doShit() {
		var hex = Math.floor(Math.random() * 0xFFFFFF);
		hex =  "#" + ("000000" + hex.toString(16)).substr(-6);
		$body.css({
    		"background-color": hex
		});
	}

	var interval;

	window.setTimeout(function () {
		$('body > img').addClass('llama');
	}, 2000)
	interval = window.setInterval(doShit, 100);

});