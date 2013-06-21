$(document).ready(function(){
	$('.story').hide('slow');
	$('.storyHeader').click(function(){
		$('.story').hide();
		$(this).parent().children('.story').slideToggle('slow');
	});
});