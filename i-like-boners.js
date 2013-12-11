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
	   		$('body > img').addClass('llama');
			this.play();   		
	   	});
	   	snd.src = "We-Like-to-Party.mp3";
	
	var  $body = $('body')
		,$window = $(window);

	var count = Math.floor($(document).height()/27 * $window.width()/20);
	var llamas = ['', '_albino', '_fancy', '_golden', '_king', '_spartan', '_super', '_superalbino', '_wizard'];

	$window.resize($.throttle( 250, 
		function () {
			$('.llama').remove();
			for (var i = 0; i < count; i++) {
				var llama_index = Math.floor((Math.random(10)*llamas.length));
				$llama = $('<img style="z-index: 0; display:inline-block;" class="llama ' +(i%3 === 0 ? 'weird' : '') +'" src="llamas/llama'+llamas[llama_index]+'.gif" />');
				$llama.appendTo($body);
			}
	})).resize();
	
	function doShit() {
		var hex = Math.floor(Math.random() * 0xFFFFFF);
		hex =  "#" + ("000000" + hex.toString(16)).substr(-6);
		$body.css({
    		"background-color": hex
		});
	}

	var interval;
	interval = window.setInterval(doShit, 100); 

});