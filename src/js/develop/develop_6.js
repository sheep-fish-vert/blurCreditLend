
function clickAnchor(){
	$('.pro-page .item .item-wrap .item-text a').first().on('click', function(e){
		$.fn.fullpage.moveTo(6);
		e.prevent.Default();
	});
	var hash = window.location.hash;
		if(hash == "#target"){
			$.fn.fullpage.moveTo(6);
		}
}	
$(document).ready(function(){
    	clickAnchor();
});

$(window).load(function(){

});

$(window).resize(function(){

});