// JavaScript Document
$(document).ready(function(){
	//page has loaded
	window.CurrentPage = '#ABT';
});

//function to close or open navigation
function NAV(){
	if($('nav').hasClass('closed')){
			$('nav').toggleClass('hidden');
		setTimeout(function(){
			$('nav').toggleClass('opaque');
			setTimeout(function(){
				$('.menu').toggleClass('close');
				$('nav').toggleClass('closed');
			},50);
		}, 10);
	}else{
		setTimeout(function(){
			$('nav').toggleClass('hidden');
		}, 500);
		$('.menu').toggleClass('close');
		$('nav').toggleClass('closed');
		$('nav').toggleClass('opaque');
	}
}
function colorToggle(){
	$('body').toggleClass('light');
}
function newPage(pageName){
	var newPageName = pageName;
	//console.log('old Page = ' + CurrentPage);
	//console.log('New Page = ' + newPageName);

	if(newPageName === CurrentPage){
		//console.log('same = '+CurrentPage);
		NAV();
	}else{
		NAV();
		setTimeout(function(){
			$(CurrentPage).removeClass('show');
			$(CurrentPage).addClass('hide');
			setTimeout(function(){
				$(CurrentPage).removeClass('active');
				$(newPageName).addClass('active');
				setTimeout(function(){
					$(newPageName).addClass('show');
					$(CurrentPage).removeClass('hide');
					CurrentPage = newPageName;
				}, 75);
			}, 300);
		},250);

	}
	return false;
}