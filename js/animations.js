$(document).ready(function() {

	$('#tweet-controls').hide();
	$('#dashboard').on('click', function() {
		$('#tweet-controls').fadeToggle('slow', 'linear')
		$('.tweet-compose').css('height', '5em');

	})
	$('#dashboard').blur(function() {
		$('#tweet-controls').fadeToggle('fast', 'linear')
		$('.tweet-compose').css('height', '2.5em');

	})

	$('#dashboard').on('focus')


	$('.tweet-compose').on('keypress keyup paste', function(){
		var num = $('textarea').val().length;
		var remains = 140 - num;
		$('#char-count').html(remains);
		$('textarea').attr('maxlength', "140");
		if (remains <= 10) {
			$('#char-count').css('color', 'red')
		}
		else if (remains < 0) {
			
			$('.button').hide()
		}
		else {
			$('#char-count').css('color', '')
		}
	})
	$('#tweet-submit').on('click', function() {
		var newTweet = $('#dashboard, .tweet-compose').val();
		var tweetForm = $('.tweet:first-child').clone()
		console.log(newTweet);
		tweetForm.find('.avatar').attr('src= img/funwatercat.jpg');
		tweetForm.find('.fullname').html("Ryan Brudnicki");
		tweetForm.find('.username').html("@guybrud");
		tweetForm.find('.tweet-text').text(newTweet);
		$('#stream').prepend(tweetForm);
	});



	$('.tweet-actions').hide();
	
	$('.tweet:hover').on('hover', function() {
		$('.tweet-actions').fadeToggle('fast', 'linear')
	})








});