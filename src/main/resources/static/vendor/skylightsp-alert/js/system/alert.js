$('#notifications').slideDown('slow').delay(3000).slideUp('slow');

var notif;

function loadNotification(status, message){
	notif = status[0]+message+status[1];
	$('#notifications').html(notif);
	$('#notifications').slideDown('slow').delay(3000).slideUp('slow');
}

$(document).ready(function(){
	$('.modal-notification-body').hide();
});

function loadAlert(){
	// var message;

	// if (value == 'add') {

	// 	// $('#add-row-title-notification').text(ModulTitle);
	// 	// $('#add').show();
	// 	// message = 'Are you sure to add <u><b>'+ModulTitle+'</b> '++'</u> ?';
	// }else if (value == 'edit') {

	// }


	$('.modal-content-body').hide("slide", { direction: "down" }, 500);
	setTimeout(function(){
	    $('.modal-notification-body').show("slide", { direction: "up" }, 1000);
	}, 600);
	
	// $('').show("slide", { direction: "left" }, 1000);
	// $('').hide("slide", { direction: "right" }, 1000);
	// $().slideRight('slow').delay(3000).slideLeft('slow');
}

function unloadAlert(){
	
	$('.modal-notification-body').hide("slide", { direction: "down" }, 500);
	setTimeout(function(){
	    $('.modal-content-body').show("slide", { direction: "up" }, 1000);
	}, 600);
}